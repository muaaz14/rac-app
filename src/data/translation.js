export const translations = {
  sv: {
    breadcrumbAct: "Konsumentköplag (2022:260)",
    breadcrumbChapter: "4 kap. Fel på varan",
    breadcrumbOutcome: "Resultat",

    modalTitle: "Konsumentköplag (2022:260) — 4 kap. Lagrum",

    title: "Konsumentköplag Utvärderare",
    statutoryRefBtn: "Juridiska hänvisningar",
    restartBtn: "Starta nytt test",
    questionLabel: "Fråga",
    currentSectionLabel: "Nuvarande lagrum",
    readMoreSection: "Läs mer om denna sektion",

    yes: "Ja",
    no: "Nej",
    previousQuestion: "Föregående fråga",

    statusDefective: "Status: FEL PÅ VARAN",
    statusNotDefective: "Status: EJ FEL PÅ VARAN",
    statusNotApplicable: "Status: EJ TILLÄMPLIG LAG",
    legalFindingsHeader: "Rättsliga slutsatser & Motivering:",
    noDefectFound: "Inga lagstadgade fel upptäcktes enligt 4 kap. Konsumentköplagen.",

    presetsHeader: "Förinställda scenarier",

    nodes: {
      // Q1: {
      //   citation: "4 kap. 1 §",
      //   statuteText: "Varan ska i fråga om art, mängd, kvalitet, andra egenskaper och förpackning stämma överens med vad som följer av avtalet.",
      //   question: "Subjektivt kravtest (Avtalsenlighet)",
      //   description: "Avviker varan i fråga om art, mängd, kvalitet, förpackning eller beskrivning från vad som specifikt följer av avtalet eller kvittot?",
      //   onTrueGround: "Felaktig enligt 4 kap. 1 § — Varan avviker från vad som uttryckligen avtalats."
      // },
      
      OUT_Defective: {
        citation: "4 kap. Resultat",
        question: "Fel på varan konstaterat",
        description: "Varan anses felaktig enligt Konsumentköplagens bestämmelser."
      },
      OUT_NotDefective: {
        citation: "4 kap. Resultat",
        question: "Ej fel på varan",
        description: "Inga lagstadgade fel har konstaterats enligt 4 kap. Konsumentköplagen."
      },
      OUT_NotApplicable: {
        citation: "Tillämpningsområde",
        question: "Lagen ej tillämplig",
        description: "Detta ärende faller utanför tillämpningsområdet för 4 kap. Konsumentköplagen (2022:260)."
      }
    },

    teamGroupLabel: "RaC26-Group 1"
  },

  en: {
    breadcrumbAct: "Consumer Sales Act (2022:260)",
    breadcrumbChapter: "Ch. 4 Defects in Goods",
    breadcrumbOutcome: "Evaluation Result",

    modalTitle: "Consumer Sales Act (2022:260) — Chapter 4 Provisions",

    title: "Consumer Sales Act Evaluator",
    statutoryRefBtn: "Legal Citations",
    restartBtn: "Start New Assessment",
    questionLabel: "Question",
    currentSectionLabel: "Active Legal Section",
    readMoreSection: "Read more about this section",

    yes: "Yes",
    no: "No",
    previousQuestion: "Previous Question",

    statusDefective: "Status: DEFECTIVE GOODS",
    statusNotDefective: "Status: NOT DEFECTIVE",
    statusNotApplicable: "Status: NOT APPLICABLE",
    legalFindingsHeader: "Legal Findings & Rationale:",
    noDefectFound: "No statutory defects detected under Chapter 4 of the Consumer Sales Act.",

    presetsHeader: "Presets for Team Demo",

    nodes: {
      // Q1: {
      //   stage: "Scope & Conformity",
      //   citation: "Chapter 4, Section 1",
      //   statuteText: "The goods must in terms of type, quantity, quality, other properties, and packaging conform to what follows from the contract.",
      //   question: "Subjective Requirement Check",
      //   description: "Does the good fail to match the quantity, quality, packaging, or description explicitly agreed upon in the contract or sales receipt?",
      //   onTrueGround: "Defective under Chapter 4, Section 1 — Goods fail to conform with agreed contractual terms."
      // },
      
      OUT_Defective: {
        citation: "Chapter 4 Result",
        question: "Defect Established",
        description: "The product is deemed legally defective under Chapter 4 of the Consumer Sales Act."
      },
      OUT_NotDefective: {
        citation: "Chapter 4 Result",
        question: "No Statutory Defect Found",
        description: "No statutory defects were identified under Chapter 4 of the Consumer Sales Act."
      },
      OUT_NotApplicable: {
        citation: "Scope Check Result",
        question: "Act Not Applicable",
        description: "This matter falls outside the scope of Chapter 4 of the Consumer Sales Act (2022:260)."
      }
    },

    teamGroupLabel: "RaC26-Group 1"
  }
};