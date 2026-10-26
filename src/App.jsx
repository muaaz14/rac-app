import React, { useState } from "react";
import rulesData from "./data/rules.json";
import { translations } from "./data/translation.js";
import { X, ChevronDown, ChevronUp, PlayCircle } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [currentNodeId, setCurrentNodeId] = useState(rulesData.startNode || "Q1");
  const [historyStack, setHistoryStack] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPresetsModalOpen, setIsPresetsModalOpen] = useState(false);
  const [isTeamPopoverOpen, setIsTeamPopoverOpen] = useState(false);
  const [isRationaleExpanded, setIsRationaleExpanded] = useState(false);
  const [caseData, setCaseData] = useState({ grounds: [] });

  const t = translations[lang] || translations["en"];
  
  const baseNode = rulesData.nodes?.[currentNodeId] || {};
  const transNode = t.nodes?.[currentNodeId] || {};

  const currentNode = {
    type: baseNode.type || "decision",
    stage: transNode.stage || baseNode.stage || "Assessment Stage",
    citation: transNode.citation || baseNode.citation || "",
    statuteText: transNode.statuteText || baseNode.statuteText || "",
    question: transNode.question || baseNode.question || currentNodeId,
    description: transNode.description || baseNode.description || "",
    onTrueGround: transNode.onTrueGround || baseNode.onTrueGround || "",
    onFalseGround: transNode.onFalseGround || baseNode.onFalseGround || "",
    true: baseNode.true,
    false: baseNode.false
  };

  const isTerminal = currentNodeId.startsWith("OUT_") || currentNode.type === "outcome";

  const dynamicStatuteList = Object.entries(rulesData.nodes)
    .filter(([key]) => key.startsWith("Q"))
    .map(([key, node]) => ({
      id: key,
      citation: t.nodes?.[key]?.citation || node.citation,
      statuteText: t.nodes?.[key]?.statuteText || node.statuteText
    }));

  const handleChoice = (boolChoice) => {
    setHistoryStack([
      ...historyStack,
      { nodeId: currentNodeId, caseDataSnapshot: { grounds: [...caseData.grounds] } }
    ]);

    const groundText = boolChoice ? currentNode.onTrueGround : currentNode.onFalseGround;
    
    const newGround = groundText ? {
      citation: currentNode.citation,
      rationale: groundText
    } : null;

    const updatedGrounds = newGround ? [...caseData.grounds, newGround] : [...caseData.grounds];
    const branchKey = boolChoice ? "true" : "false";
    const nextNodeId = currentNode[branchKey];

    // Store updated grounds and track the immediate last ground that triggered this step
    setCaseData({ 
      grounds: updatedGrounds,
      lastTriggeredGround: newGround || caseData.lastTriggeredGround
    });

    if (nextNodeId) setCurrentNodeId(nextNodeId);
  };

  const goBack = () => {
    if (historyStack.length === 0) return;
    const previous = historyStack[historyStack.length - 1];
    setHistoryStack(historyStack.slice(0, -1));
    setCurrentNodeId(previous.nodeId);
    setCaseData(previous.caseDataSnapshot);
  };

  const resetAssessment = () => {
    setCurrentNodeId(rulesData.startNode || "Q1");
    setHistoryStack([]);
    setCaseData({ grounds: [], lastTriggeredGround: null });
    setIsRationaleExpanded(false);
  };

  const applyPreset = (presetType) => {
    resetAssessment();
    if (presetType === "presetA") {
      setCaseData({
        grounds: [
          { citation: t.nodes.Q1.citation, rationale: t.nodes.Q1.onTrueGround },
          { citation: t.nodes.Q6.citation, rationale: lang === "sv" ? "Inom 2-års presumtionsregel (4 kap. 17 §)." : "Within 2-year presumption window (Chapter 4, Section 17)." }
        ]
      });
      setCurrentNodeId("OUT_Defective");
    } else if (presetType === "presetB") {
      setCaseData({
        grounds: [{ citation: t.nodes.Q5.citation, rationale: t.nodes.Q5.onTrueGround }]
      });
      setCurrentNodeId("OUT_Defective");
    } else if (presetType === "presetC") {
      setCaseData({
        grounds: [{ citation: t.nodes.Q6.citation, rationale: t.nodes.Q6.onTrueGround }]
      });
      setCurrentNodeId("OUT_NotDefective");
    }
    setIsPresetsModalOpen(false);
  };

  const isDefective = currentNodeId === "OUT_Defective";
  const isNotDefective = currentNodeId === "OUT_NotDefective";

  return (
    <div className="min-h-screen bg-[#f2eee5] text-[#1c1c1a] font-sans flex flex-col justify-between antialiased selection:bg-[#1c1c1a] selection:text-white">
      
      {/* Responsive Header Bar */}
      <header className="w-full border-b border-[#e0dad0] px-4 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 text-xs font-medium text-[#706e68]">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="truncate">{t.breadcrumbAct}</span>
          <span className="text-[#a09d96]">/</span>
          <span className="truncate">{t.breadcrumbChapter}</span>
          <span className="text-[#a09d96]">/</span>
          <span className="text-[#1c1c1a] font-semibold truncate">
            {!isTerminal ? currentNode.citation : t.breadcrumbOutcome}
          </span>
        </nav>

        <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pt-1 sm:pt-0 border-t sm:border-t-0 border-[#e8e3d8]">
          <button onClick={() => setIsModalOpen(true)} className="hover:text-[#1c1c1a] transition cursor-pointer">
            {t.statutoryRefBtn}
          </button>

          <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-transparent text-xs font-medium text-[#706e68] hover:text-[#1c1c1a] cursor-pointer focus:outline-none">
            <option value="en">English</option>
            <option value="sv">Svenska</option>
          </select>
        </div>
      </header>

      {/* Main Container - Optimized Vertical Spacing for Mobile */}
      <main className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 my-auto flex flex-col items-center text-center">
        {!isTerminal ? (
          <div className="w-full flex flex-col items-center">
            
            {/* Stage Tag & Node ID */}
            <div className="flex flex-col items-center gap-1 mb-4 sm:mb-6">
              <span className="text-xs font-mono text-[#8c887f]">
                {currentNodeId}
              </span>
            </div>

            {/* Question Title */}
            <h1 className="text-lg sm:text-xl font-medium text-[#1c1c1a] mb-3 sm:mb-4 px-2">
              {currentNode.question}
            </h1>

            {/* Question Description */}
            <p className="text-[#59564f] text-sm sm:text-base leading-relaxed max-w-lg mb-8 sm:mb-10 px-2">
              {currentNode.description}
            </p>

            {/* Touch-Friendly Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <button
                onClick={() => handleChoice(true)}
                className="w-full sm:w-auto min-w-[120px] py-3.5 sm:py-3 px-8 bg-[#2d2c2a] text-[#f2eee5] text-sm font-medium rounded-md hover:bg-[#1c1c1a] active:scale-[0.98] transition shadow-xs cursor-pointer"
              >
                {t.yes}
              </button>
              <button
                onClick={() => handleChoice(false)}
                className="w-full sm:w-auto min-w-[120px] py-3.5 sm:py-3 px-8 border border-[#b8b3a8] text-[#1c1c1a] text-sm font-medium rounded-md hover:bg-[#e6e1d5] active:scale-[0.98] transition cursor-pointer"
              >
                {t.no}
              </button>
            </div>
          </div>
        ) : (
          /* Responsive Output Screen with Dynamic 3-Outcome Rendering */
          <div className="w-full flex flex-col items-center text-center px-2">
            <span className="text-[11px] sm:text-xs uppercase tracking-widest font-mono text-[#8c887f] mb-2 sm:mb-3">
              {t.legalFindingsHeader}
            </span>

            <h2 className={`text-2xl sm:text-3xl font-bold mb-3 ${
              isDefective 
                ? "text-[#8b261d]" 
                : isNotDefective 
                ? "text-[#1e5233]" 
                : "text-[#706e68]"
            }`}>
              {isDefective 
                ? t.statusDefective 
                : isNotDefective 
                ? t.statusNotDefective 
                : (t.statusNotApplicable || "Status: NOT APPLICABLE")}
            </h2>

            <p className="text-sm text-[#59564f] max-w-md mb-6 leading-relaxed">
              {currentNode.description}
            </p>

            {/* Expand / Collapse Rationale Button */}
            {/* Expand / Collapse Rationale Link */}
            {caseData.lastTriggeredGround && (
              <button
                onClick={() => setIsRationaleExpanded(!isRationaleExpanded)}
                className="text-xs font-medium text-[#706e68] hover:text-[#1c1c1a] underline underline-offset-4 flex items-center gap-1 mb-6 sm:mb-8 cursor-pointer transition"
              >
                <span>{t.readMoreSection}</span>
                {isRationaleExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}

            {/* Ultimate Decisive Reason Box */}
            {isRationaleExpanded && caseData.lastTriggeredGround && (
              <div className="w-full bg-[#f8f5ee] border-l-2 border-[#8b261d] p-4 sm:p-5 text-left mb-6 sm:mb-8 shadow-2xs transition-all duration-200 rounded-r-md">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8b261d]">
                    {caseData.lastTriggeredGround.citation}
                  </span>
                  <p className="text-xs text-[#2c2a26] leading-relaxed">
                    {caseData.lastTriggeredGround.rationale}
                  </p>
                </div>
              </div>
            )}

            {/* Expandable Statutory Rationale Box */}
            {/* {isRationaleExpanded && caseData.grounds.length > 0 && (
              <div className="w-full bg-[#f8f5ee] border-l-2 border-[#8b261d] p-4 sm:p-5 text-left mb-6 sm:mb-8 shadow-2xs transition-all duration-200 rounded-r-md">
                {caseData.grounds.map((ground, idx) => (
                  <div key={idx} className="flex flex-col gap-1 border-b border-[#ece7dc] pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#8b261d]">
                      {ground.citation}
                    </span>
                    <p className="text-xs text-[#2c2a26] leading-relaxed">
                      {ground.rationale}
                    </p>
                  </div>
                ))}
              </div>
            )} */}

            <button
              onClick={resetAssessment}
              className="w-full sm:w-auto px-6 py-3 sm:py-2.5 border border-[#b8b3a8] text-[#1c1c1a] text-xs font-medium rounded hover:bg-[#e6e1d5] active:scale-[0.98] transition cursor-pointer"
            >
              {t.restartBtn}
            </button>
          </div>
        )}

        {historyStack.length > 0 && !isTerminal && (
          <button
            onClick={goBack}
            className="mt-8 sm:mt-12 text-xs text-[#8c887f] hover:text-[#1c1c1a] transition underline underline-offset-4 cursor-pointer"
          >
            {t.previousQuestion}
          </button>
        )}
      </main>

      {/* Responsive Footer */}
      <footer className="w-full border-t border-[#e0dad0] px-4 sm:px-6 py-3.5 sm:py-4 flex flex-row justify-between items-center text-xs text-[#706e68]">
        <div className="relative flex items-center justify-between w-full">
          <button
            onClick={() => setIsTeamPopoverOpen(!isTeamPopoverOpen)}
            className="font-semibold text-[#1c1c1a] hover:underline underline-offset-2 cursor-pointer transition text-xs"
          >
            {t.teamGroupLabel}
          </button>

          {/* Mobile-Adjusted Team Popover */}
          {isTeamPopoverOpen && (
            <div className="absolute left-0 bottom-full mb-3 w-48 sm:w-56 bg-[#faf9f6] border border-[#e5e2db] rounded-lg p-4 shadow-md z-40 text-left">
              <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-[#e5e2db]">
                <span className="font-bold text-xs text-[#1c1c1a]">{t.teamGroupLabel}</span>
                <button
                  onClick={() => setIsTeamPopoverOpen(false)}
                  className="text-[#706e68] hover:text-[#1c1c1a] transition cursor-pointer text-xs"
                >
                  ✕
                </button>
              </div>
              <ul className="space-y-1.5 text-xs font-medium text-[#2c3036]">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Amelia</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Amro</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Felicia</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Moritz</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2b5883]"></span> Muaaz</li>
              </ul>
              <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-[#faf9f6] border-b border-r border-[#e5e2db] rotate-45"></div>
            </div>
          )}
        </div>
      </footer>

      {/* Statutory Reference Modal - Responsive Sizing */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#1a1f26]/40 backdrop-blur-xs flex justify-center items-center p-3 sm:p-4 z-50">
          <div className="bg-white max-w-xl w-full max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-lg border border-[#e5e2db] shadow-lg overflow-hidden">
            
            {/* Fixed Modal Header */}
            <div className="flex justify-between items-center px-4 sm:px-6 py-3.5 sm:py-4 border-b border-[#e5e2db] bg-white shrink-0">
              <h2 className="font-bold text-sm sm:text-base text-[#1a1f26] truncate pr-2">{t.modalTitle}</h2>
              <button 
                onClick={() => setIsModalOpen(false)} 
                className="text-[#6b7280] hover:text-[#1a1f26] transition cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs text-[#4b5563] leading-relaxed">
              {dynamicStatuteList.map((item) => (
                <article key={item.id} className="border-b border-[#f0ede6] pb-3 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-[#1a1f26] mb-1">{item.citation}</h3>
                  <p className="text-xs">{item.statuteText}</p>
                </article>
              ))}
            </div>

          </div>
        </div>
      )}


    </div>
  );
}