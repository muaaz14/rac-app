import React, { useState } from "react";
import rulesData from "./data/rules.json";
import { translations } from "./data/translations";
import { FileText, RotateCcw, ArrowLeft, Check, AlertCircle, X, Globe, HelpCircle, CheckCircle2, ChevronRight} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [currentNodeId, setCurrentNodeId] = useState(rulesData.startNode);
  const [historyStack, setHistoryStack] = useState([]);
  const [monthsInput, setMonthsInput] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTeamPopoverOpen, setIsTeamPopoverOpen] = useState(false);
  const [caseData, setCaseData] = useState({
    monthsSinceDelivery: 0,
    grounds: [],
    sellerLiable: true,
  });

  const t = translations[lang];
  const currentNode = rulesData.nodes[currentNodeId];
  const currentNodeT = t.nodes[currentNodeId];
  const isTerminal = currentNodeId.startsWith("result_");

  const handleChoice = (answer) => {
    setHistoryStack([
      ...historyStack, 
      { nodeId: currentNodeId, caseDataSnapshot: { ...caseData, grounds: [...caseData.grounds] } }
    ]);

    const updatedGrounds = [...caseData.grounds];
  
    // Generic RaC Interpreter: Dynamically fetch ground text from schema based on user choice
    const groundKey = answer === "yes" ? "onYesGround" : "onNoGround";
    if (currentNodeT && currentNodeT[groundKey]) {
      updatedGrounds.push(currentNodeT[groundKey]);
    }

    setCaseData((prev) => ({ ...prev, grounds: updatedGrounds }));
    setCurrentNodeId(currentNode[answer]);
  };

  const handleMonthsSubmit = () => {
    setHistoryStack([...historyStack, { nodeId: currentNodeId, caseDataSnapshot: { ...caseData, grounds: [...caseData.grounds] } }]);

    const updatedGrounds = [...caseData.grounds];
    let isLiable = true;

    if (monthsInput <= 24) {
      const msg = lang === "sv" 
        ? `Inom 2-års presumtionsregel (${monthsInput} månader). Felet presumeras ha funnits vid avlämnandet (4 kap. 17 §).`
        : `Within 2-year presumption window (${monthsInput} months). Defect is presumed present at delivery (4 kap. 17 §).`;
      updatedGrounds.push(msg);
      isLiable = true;
    } else {
      const msg = lang === "sv"
        ? `Efter 2-års presumtionsregel (${monthsInput} månader). Köparen måste bevisa att felet fanns vid avlämnandet (4 kap. 14 §).`
        : `Outside 2-year presumption window (${monthsInput} months). Consumer must prove defect existed at delivery (4 kap. 14 §).`;
      updatedGrounds.push(msg);
      isLiable = false;
    }

    setCaseData((prev) => ({
      ...prev,
      monthsSinceDelivery: monthsInput,
      grounds: updatedGrounds,
      sellerLiable: isLiable,
    }));
    setCurrentNodeId("result_evaluated");
  };

  const goBack = () => {
    if (historyStack.length === 0) return;
    const previous = historyStack[historyStack.length - 1];
    setHistoryStack(historyStack.slice(0, -1));
    setCurrentNodeId(previous.nodeId);
    setCaseData(previous.caseDataSnapshot);
  };

  const resetAssessment = () => {
    setCurrentNodeId(rulesData.startNode);
    setHistoryStack([]);
    setMonthsInput(6);
    setCaseData({ monthsSinceDelivery: 0, grounds: [], sellerLiable: true });
  };

  const applyPreset = (presetType) => {
    resetAssessment();
    if (presetType === "presetA") {
      setCaseData({
        monthsSinceDelivery: 14,
        sellerLiable: true,
        grounds: [
          t.nodes.check_objective.onYesGround,
          lang === "sv" 
            ? "Inom 2-års presumtionsregel (14 månader). Felet presumeras ha funnits vid avlämnandet (4 kap. 17 §)."
            : "Within 2-year presumption window (14 months). Defect is presumed present at delivery (4 kap. 17 §)."
        ]
      });
      setCurrentNodeId("result_evaluated");
    } else if (presetType === "presetB") {
      setCaseData({
        monthsSinceDelivery: 0,
        sellerLiable: true,
        grounds: [t.nodes.check_assembly.onYesGround]
      });
      setCurrentNodeId("result_defective_assembly");
    } else if (presetType === "presetC") {
      setCaseData({
        monthsSinceDelivery: 18,
        sellerLiable: true,
        grounds: [
          t.nodes.check_objective.onYesGround,
          lang === "sv"
            ? "Inom 2-års presumtionsregel (18 månader). Felet presumeras ha funnits vid avlämnandet (4 kap. 17 §)."
            : "Within 2-year presumption window (18 months). Defect is presumed present at delivery (4 kap. 17 §)."
        ]
      });
      setCurrentNodeId("result_evaluated");
    }
  };

  const isDefective = caseData.grounds.some((g) => !g.includes("Undantaget") && !g.includes("Exempted"));

  return (
    <div className="min-h-screen bg-[#f2eee5] text-[#1c1c1a] font-sans flex flex-col justify-between antialiased selection:bg-[#1c1c1a] selection:text-white">
    
    {/* Ultra-Clean Minimal Top Bar */}
    <header className="w-full border-b border-[#e0dad0] px-4 py-4 flex items-center justify-between text-xs font-medium text-[#706e68]">
      {/* Left: Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2">
        <span>{t.breadcrumbAct}</span>
        <span className="text-[#a09d96]">/</span>
        <span>{t.breadcrumbChapter}</span>
        <span className="text-[#a09d96]">/</span>
        <span className="text-[#1c1c1a] font-semibold">
          {!isTerminal ? (currentNodeT?.citation || currentNode.citation) : t.breadcrumbOutcome}
        </span>
      </nav>

      {/* Right: Minimal Status & Utilities */}
      <div className="flex items-center gap-6">
        <button onClick={() => setIsModalOpen(true)} className="hover:text-[#1c1c1a] transition cursor-pointer">
          {t.statutoryRefBtn}
        </button>

        {/* Quiet Language Toggle */}
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-transparent text-xs font-medium text-[#706e68] hover:text-[#1c1c1a] cursor-pointer focus:outline-none">
          <option value="en">English</option>
          <option value="sv">Svenska</option>
        </select>
      </div>
    </header>

    {/* Main Container */}
    <main className="w-full max-w-2xl mx-auto px-6 py-12 my-auto flex flex-col items-center text-center">
      {!isTerminal ? (
        <div className="w-full flex flex-col items-center">
          {/* Subtle Citation Subhead */}
          <span className="text-xs uppercase tracking-widest font-mono text-[#8c887f] mb-4">
            {t.step} {currentNode.step} {t.of} {currentNode.totalSteps}
          </span>

          {/* Large Focused Question Title */}
          <h1 className="text-xl sm:text-xl font-medium text-[#1c1c1a] mb-4">
            {currentNodeT?.question || currentNode.question}
          </h1>

          {/* Clean Body Text */}
          <p className="text-[#59564f] text-base leading-relaxed max-w-lg mb-10">
            {currentNodeT?.description || currentNode.description}
          </p>

          {/* Binary Action Buttons (Matching image button style) */}
          {currentNode.type === "binary" && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleChoice("yes")}
                className="px-7 py-3 bg-[#2d2c2a] text-[#f2eee5] text-sm font-medium rounded-md hover:bg-[#1c1c1a] transition shadow-xs cursor-pointer"
              >
                {t.yes}
              </button>
              <button
                onClick={() => handleChoice("no")}
                className="px-7 py-3 border border-[#b8b3a8] text-[#1c1c1a] text-sm font-medium rounded-md hover:bg-[#e6e1d5] transition cursor-pointer"
              >
                {t.no}
              </button>
            </div>
          )}

          {/* Number Input Step */}
          {currentNode.type === "input_months" && (
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="0"
                  max="60"
                  value={monthsInput}
                  onChange={(e) => setMonthsInput(parseInt(e.target.value, 10) || 0)}
                  className="w-24 px-3 py-2 bg-white border border-[#b8b3a8] rounded text-center text-base text-[#1c1c1a] focus:outline-none"
                />
                <span className="text-sm text-[#706e68]">{t.monthsLabel}</span>
              </div>
              <button
                onClick={handleMonthsSubmit}
                className="px-7 py-3 bg-[#2d2c2a] text-[#f2eee5] text-sm font-medium rounded-md hover:bg-[#1c1c1a] transition cursor-pointer"
              >
                {t.continue}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Minimal Diagnostic Result View */
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-widest font-mono text-[#8c887f] mb-3">
            {t.legalFindingsHeader}
          </span>

          <h2 className={`text-3xl font-bold mb-3 ${isDefective ? "text-[#8b261d]" : "text-[#1e5233]"}`}>
            {isDefective ? t.statusDefective : t.statusNotDefective}
          </h2>

          <p className="text-sm text-[#59564f] mb-8">
            <strong>{t.sellerLiabilityHeader}</strong> {caseData.sellerLiable ? t.sellerIsLiable : t.consumerBurden}
          </p>

          <div className="w-full bg-[#faf7f0] border border-[#dcd7cb] rounded-lg p-6 text-left mb-8 space-y-2">
            {caseData.grounds.map((ground, idx) => (
              <p key={idx} className="text-xs text-[#42403b] leading-relaxed flex gap-2">
                <span className="text-[#8c887f]">•</span>
                <span>{ground}</span>
              </p>
            ))}
          </div>

          <button
            onClick={resetAssessment}
            className="px-6 py-2.5 border border-[#b8b3a8] text-[#1c1c1a] text-xs font-medium rounded hover:bg-[#e6e1d5] transition"
          >
            {t.restartBtn}
          </button>
        </div>
      )}

      {/* Subtle Back Button */}
      {historyStack.length > 0 && !isTerminal && (
        <button
          onClick={goBack}
          className="mt-12 text-xs text-[#8c887f] hover:text-[#1c1c1a] transition underline underline-offset-4 cursor-pointer"
        >
          {t.previousQuestion}
        </button>
      )}
    </main>

    {/* Minimalist Bottom Footer Bar */}
    <footer className="w-full border-t border-[#e0dad0] px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-[#706e68] gap-4">
      <div className="flex flex-col flex-wrap items-start gap-1">
        <span className="font-semibold text-[#1c1c1a]">{t.presetsHeader}:</span>
        <div className="flex flex-row gap-6">
          <button onClick={() => applyPreset("presetA")} className="hover:text-[#1c1c1a] transition cursor-pointer">
            A: Refrigerator (§ 1 vs 6)
          </button>
          <button onClick={() => applyPreset("presetB")} className="hover:text-[#1c1c1a] transition cursor-pointer">
            B: Bookshelf (§ 3 Assembly)
          </button>
          <button onClick={() => applyPreset("presetC")} className="hover:text-[#1c1c1a] transition cursor-pointer">
            C: Bicycle (§ 17 Presumption)
          </button>
        </div>
        
      </div>

      {/* Right Side Footer: Credits with Pop-over */}
      <div className="relative flex flex-col gap-1 text-left items-start pr-8">
        <span>{t.broughtToYouBy}</span>
        
        <button
          onClick={() => setIsTeamPopoverOpen(!isTeamPopoverOpen)}
          className="font-semibold text-[#1c1c1a] hover:underline underline-offset-2 cursor-pointer transition"
        >
          {t.teamGroupLabel}
        </button>

        {/* Inline Floating Pop-over */}
        {isTeamPopoverOpen && (
          <div className="absolute right-0 bottom-full mb-3 w-56 bg-[#faf9f6] border border-[#e5e2db] rounded-lg p-4 shadow-md z-40 text-left animate-in fade-in slide-in-from-bottom-2 duration-150">
            
            {/* Pop-over Header */}
            <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-[#e5e2db]">
              <span className="font-bold text-xs text-[#1c1c1a]">
                {t.teamGroupLabel}
              </span>
              <button
                onClick={() => setIsTeamPopoverOpen(false)}
                className="text-[#706e68] hover:text-[#1c1c1a] transition cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            {/* Student List */}
            <ul className="space-y-1.5 text-xs font-medium text-[#2c3036]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Amelia
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Amro
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Felicia
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Mortiz
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Muaaz
              </li>
            </ul>

            {/* Subtle Pop-over Pointer Arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#faf9f6] border-b border-r border-[#e5e2db] rotate-45"></div>
          </div>
        )}
      </div>
    </footer>

      {/* Statutory Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#1a1f26]/40 backdrop-blur-xs flex justify-center items-center p-4 z-50">
          <div className="bg-white max-w-xl w-full max-h-[80vh] overflow-y-auto rounded-lg p-6 border border-[#e5e2db] shadow-lg">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#e5e2db]">
              <h2 className="font-bold text-base text-[#1a1f26]">
                {t.modalTitle}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[#6b7280] hover:text-[#1a1f26] transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4 text-xs text-[#4b5563] leading-relaxed">
              <article className="border-b border-[#f0ede6] pb-3">
                <h3 className="font-semibold text-[#1a1f26] mb-1">{t.modalSections.s1Title}</h3>
                <p>{t.modalSections.s1Text}</p>
              </article>
              <article className="border-b border-[#f0ede6] pb-3">
                <h3 className="font-semibold text-[#1a1f26] mb-1">{t.modalSections.s2Title}</h3>
                <p>{t.modalSections.s2Text}</p>
              </article>
              <article className="border-b border-[#f0ede6] pb-3">
                <h3 className="font-semibold text-[#1a1f26] mb-1">{t.modalSections.s3Title}</h3>
                <p>{t.modalSections.s3Text}</p>
              </article>
              <article className="border-b border-[#f0ede6] pb-3">
                <h3 className="font-semibold text-[#1a1f26] mb-1">{t.modalSections.s6Title}</h3>
                <p>{t.modalSections.s6Text}</p>
              </article>
              <article>
                <h3 className="font-semibold text-[#1a1f26] mb-1">{t.modalSections.s14_17Title}</h3>
                <p>{t.modalSections.s14_17Text}</p>
              </article>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}