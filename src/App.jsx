import React, { useState } from "react";
import rulesData from "./data/rules.json";
import { translations } from "./data/translations";
import { 
  FileText, 
  RotateCcw, 
  ArrowLeft, 
  Bookmark, 
  CheckCircle2, 
  AlertTriangle, 
  X,
  Globe
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("sv"); // Default language: Swedish
  const [currentNodeId, setCurrentNodeId] = useState(rulesData.startNode);
  const [historyStack, setHistoryStack] = useState([]);
  const [monthsInput, setMonthsInput] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setHistoryStack([...historyStack, { nodeId: currentNodeId, caseDataSnapshot: { ...caseData, grounds: [...caseData.grounds] } }]);

    const updatedGrounds = [...caseData.grounds];
    
    if (currentNodeT && currentNodeT.groundText) {
      if (currentNodeId === "check_subjective" && answer === "yes") {
        updatedGrounds.push(currentNodeT.groundText);
      } else if (currentNodeId === "check_objective" && answer === "yes") {
        updatedGrounds.push(currentNodeT.groundText);
      } else if (currentNodeId === "check_explicit_agreement" && answer === "yes") {
        updatedGrounds.push(currentNodeT.groundText);
      } else if (currentNodeId.includes("assembly") && answer === "yes") {
        updatedGrounds.push(currentNodeT.groundText);
      }
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
          t.nodes.check_objective.groundText,
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
        grounds: [t.nodes.check_assembly.groundText]
      });
      setCurrentNodeId("result_defective_assembly");
    } else if (presetType === "presetC") {
      setCaseData({
        monthsSinceDelivery: 18,
        sellerLiable: true,
        grounds: [
          t.nodes.check_objective.groundText,
          lang === "sv"
            ? "Inom 2-års presumtionsregel (18 månader). Felet presumeras ha funnits vid avlämnandet (4 kap. 17 §)."
            : "Within 2-year presumption window (18 months). Defect is presumed present at delivery (4 kap. 17 §)."
        ]
      });
      setCurrentNodeId("result_evaluated");
    }
  };

  const progressPct = currentNode?.step
    ? Math.round((currentNode.step / currentNode.totalSteps) * 100)
    : 100;

  const isDefective = caseData.grounds.some((g) => !g.includes("Undantaget") && !g.includes("Exempted"));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="bg-slate-900 text-white px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider">
              {t.statuteBadge}
            </span>
            <h1 className="text-2xl font-bold text-slate-900">
              {t.title}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-lg px-3 py-1.5 shadow-sm">
              <Globe className="w-4 h-4 text-slate-500" />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent text-sm font-medium text-slate-700 cursor-pointer focus:outline-none"
              >
                <option value="sv">🇸🇪 Svenska</option>
                <option value="en">🇬🇧 English</option>
              </select>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium border border-slate-300 rounded-lg bg-white hover:bg-slate-100 transition shadow-sm"
            >
              <FileText className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">{t.statutoryRefBtn}</span>
            </button>
            
            <button
              onClick={resetAssessment}
              className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium border border-slate-300 rounded-lg bg-white hover:bg-slate-100 transition shadow-sm"
            >
              <RotateCcw className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">{t.restartBtn}</span>
            </button>
          </div>
        </header>

        {/* Main Grid */}
        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Main Assessment Panel */}
          <section className="md:col-span-2 bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${progressPct}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>{currentNode?.step ? `${t.step} ${currentNode.step} ${t.of} ${currentNode.totalSteps}` : t.completed}</span>
                  <span>{progressPct}% {t.completed}</span>
                </div>
              </div>

              {/* Dynamic Question Screen */}
              {!isTerminal ? (
                <div>
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md mb-3">
                    {currentNodeT?.citation || currentNode.citation}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">
                    {currentNodeT?.question || currentNode.question}
                  </h2>
                  <p className="text-slate-600 text-sm mb-6">
                    {currentNodeT?.description || currentNode.description}
                  </p>

                  {currentNode.type === "binary" && (
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleChoice("yes")}
                        className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                      >
                        {t.yes}
                      </button>
                      <button
                        onClick={() => handleChoice("no")}
                        className="px-6 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition"
                      >
                        {t.no}
                      </button>
                    </div>
                  )}

                  {currentNode.type === "input_months" && (
                    <div>
                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          {t.monthsLabel}
                        </label>
                        <input
                          type="number"
                          min="0"
                          max="60"
                          value={monthsInput}
                          onChange={(e) => setMonthsInput(parseInt(e.target.value, 10) || 0)}
                          className="w-32 px-3 py-2 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button
                        onClick={handleMonthsSubmit}
                        className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                      >
                        {t.continue}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* Diagnostic Result Screen */
                <div>
                  <div
                    className={`p-5 rounded-lg border mb-6 ${
                      isDefective
                        ? "bg-red-50 border-red-200 text-red-900"
                        : "bg-emerald-50 border-emerald-200 text-emerald-900"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      {isDefective ? (
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      ) : (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      )}
                      <h2 className="text-lg font-bold">
                        {isDefective ? t.statusDefective : t.statusNotDefective}
                      </h2>
                    </div>
                    <p className="text-sm font-medium">
                      <strong>{t.sellerLiabilityHeader}</strong>{" "}
                      {caseData.sellerLiable ? t.sellerIsLiable : t.consumerBurden}
                    </p>
                  </div>

                  <h3 className="font-semibold text-slate-900 mb-3 text-sm">
                    {t.legalFindingsHeader}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                    {caseData.grounds.length > 0 ? (
                      caseData.grounds.map((ground, idx) => <li key={idx}>{ground}</li>)
                    ) : (
                      <li>{t.noDefectFound}</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Back Button */}
            <div className="mt-8 pt-4 border-t border-slate-100">
              {historyStack.length > 0 && (
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t.previousQuestion}
                </button>
              )}
            </div>
          </section>

          {/* Sidebar Presets */}
          <aside className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold">
              <Bookmark className="w-4 h-4 text-blue-600" />
              <h3>{t.presetsHeader}</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              {t.presetsSubtitle}
            </p>

            <div className="space-y-3">
              <button
                onClick={() => applyPreset("presetA")}
                className="w-full text-left p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"
              >
                <strong className="block text-xs text-slate-800">
                  {t.scenarioATitle}
                </strong>
                <span className="text-[11px] text-slate-500">{t.scenarioASub}</span>
              </button>

              <button
                onClick={() => applyPreset("presetB")}
                className="w-full text-left p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"
              >
                <strong className="block text-xs text-slate-800">
                  {t.scenarioBTitle}
                </strong>
                <span className="text-[11px] text-slate-500">{t.scenarioBSub}</span>
              </button>

              <button
                onClick={() => applyPreset("presetC")}
                className="w-full text-left p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition"
              >
                <strong className="block text-xs text-slate-800">
                  {t.scenarioCTitle}
                </strong>
                <span className="text-[11px] text-slate-500">{t.scenarioCSub}</span>
              </button>
            </div>
          </aside>
        </main>
      </div>

      {/* Statutory References Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="bg-white max-w-xl w-full max-h-[80vh] overflow-y-auto rounded-xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-900">
                Konsumentköplag (2022:260) — 4 kap.
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <article className="border-b pb-3">
                <h3 className="font-semibold text-slate-900">4 kap. 1 § — Avtalsenlighet (Subjective)</h3>
                <p>Varan ska i fråga om art, mängd, kvalitet, andra egenskaper och förpackning stämma överens med vad som följer av avtalet.</p>
              </article>
              <article className="border-b pb-3">
                <h3 className="font-semibold text-slate-900">4 kap. 2 § — Objektiva krav (Objective)</h3>
                <p>Varan ska vara ämnad för de ändamål för vilka motsvarande varor normalt används, ha den hållbarhet och funktion som köparen med fog kan förvänta sig.</p>
              </article>
              <article className="border-b pb-3">
                <h3 className="font-semibold text-slate-900">4 kap. 3 § — Installation och montering</h3>
                <p>Fel finns även om varan installerats av säljaren eller om felaktiga monteringsanvisningar medföljt.</p>
              </article>
              <article className="border-b pb-3">
                <h3 className="font-semibold text-slate-900">4 kap. 6 § — Undantag vid särskilt godkännande</h3>
                <p>Säljaren svarar inte för en avvikelse om köparen uttryckligen och särskilt informerats och godkänt den vid köpet.</p>
              </article>
              <article>
                <h3 className="font-semibold text-slate-900">4 kap. 14 & 17 §§ — Tidpunkt och presumtion</h3>
                <p>Säljaren svarar för fel som funnits vid avlämnandet. Fel som visar visar sig inom två år (24 månader) presumeras ha funnits vid avlämnandet.</p>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}