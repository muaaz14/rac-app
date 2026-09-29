export const translations = {
  sv: {
    // src/data/translations.js (Inside 'sv' object)
    breadcrumbAct: "Konsumentköplag (2022:260)",
    breadcrumbChapter: "4 kap. Fel på varan",
    breadcrumbOutcome: "Resultat",

    // Modal Translations
    modalTitle: "Konsumentköplag (2022:260) — 4 kap. Lagrum",
    modalSections: {
        s1Title: "4 kap. 1 § — Avtalsenlighet (Subjektiva krav)",
        s1Text: "Varan ska i fråga om art, mängd, kvalitet, andra egenskaper och förpackning stämma överens med vad som följer av avtalet.",
        s2Title: "4 kap. 2 § — Objektiva krav",
        s2Text: "Varan ska vara ämnad för de ändamål för vilka motsvarande varor normalt används, ha den hållbarhet och funktion som köparen med fog kan förvänta sig.",
        s3Title: "4 kap. 3 § — Installation och montering",
        s3Text: "Fel finns även om varan installerats av säljaren eller om felaktiga monteringsanvisningar medföljt.",
        s6Title: "4 kap. 6 § — Undantag vid särskilt godkännande",
        s6Text: "Säljaren svarar inte för en avvikelse om köparen uttryckligen och särskilt informerats och godkänt den vid köpet.",
        s14_17Title: "4 kap. 14 & 17 §§ — Tidpunkt för fel och presumtion",
        s14_17Text: "Säljaren svarar för fel som funnits vid avlämnandet. Fel som visar sig inom två år (24 månader) presumeras ha funnits vid avlämnandet."
    },

    // Header & Meta
    statuteBadge: "SFS 2022:260",
    title: "Konsumentköplag Utvärderare",
    statutoryRefBtn: "Lagtextreferenser",
    restartBtn: "Starta nytt test",
    step: "Steg",
    completed: "Slutfört",
    of: "av",

    // Actions & Form
    yes: "Ja",
    no: "Nej",
    continue: "Fortsätt utvärdering",
    previousQuestion: "Föregående fråga",
    monthsLabel: "Månader sedan avlämnande (leverans):",

    // Diagnostic Outcome
    statusDefective: "Status: FEL PÅ VARAN",
    statusNotDefective: "Status: EJ FEL PÅ VARAN",
    sellerIsLiable: "Säljaren är ansvarig (Presumtionsregeln gäller)",
    consumerBurden: "Köparen har bevisbördan (Tiden har passerat 2 år)",
    sellerLiabilityHeader: "Säljarens ansvar:",
    legalFindingsHeader: "Rättsliga slutsatser & Motivering:",
    noDefectFound: "Inga lagstadgade fel upptäcktes enligt 4 kap. Konsumentköplagen.",

    // Presets Sidebar
    presetsHeader: "Förinställda scenarier",
    presetsSubtitle: "Klicka för att snabbt testa lagstadgade fall med gruppen:",
    scenarioATitle: "Scenario A: Avtalat fel vs Dolt fel",
    scenarioASub: "4 kap. 1 § vs 6 § (Kylskåp)",
    scenarioBTitle: "Scenario B: Felaktig monteringsanvisning",
    scenarioBSub: "4 kap. 3 § (Bokhylla)",
    scenarioCTitle: "Scenario C: 2-års presumtionsregel",
    scenarioCSub: "4 kap. 14 & 17 §§ (Cykelväxel)",

    // Questions & Nodes
    nodes: {
      check_subjective: {
        citation: "4 kap. 1 §",
        question: "Subjektivt kravtest (Avtalsenlighet)",
        description: "Avviker varan i fråga om art, mängd, kvalitet, förpackning eller beskrivning från vad som specifikt följer av avtalet eller kvittot?",
        onYesGround: "Brister i subjektiva krav enligt 4 kap. 1 § (Stämmer inte överens med avtalet)."
      },
      check_objective: {
        citation: "4 kap. 2 §",
        question: "Objektivt kravtest",
        description: "Minskar varans hållbarhet, säkerhet eller funktion i förhållande till vad köparen med fog kunde förvänta sig för normal användning?",
        onYesGround: "Brister i objektiva krav enligt 4 kap. 2 § (Avviker från normal hållbarhet/funktion)."
      },
      check_explicit_agreement: {
        citation: "4 kap. 6 §",
        question: "Särskilt godkännande av avvikelse",
        description: "Informerades köparen uttryckligen om just denna specifika avvikelse före köpet och godkände den särskilt?",
        onYesGround: "Undantaget enligt 4 kap. 6 § gäller då köparen uttryckligen godkänt avvikelsen."
      },
      check_assembly: {
        citation: "4 kap. 3 §",
        question: "Installation och montering",
        description: "Orsakades felet av att säljaren installerat varan felaktigt, eller p.g.a. felaktiga monteringsanvisningar i manualen?",
        onYesGround: "Felaktig enligt 4 kap. 3 § p.g.a. brister i installation eller monteringsanvisning."
      },
      check_assembly_after_objective_fault: {
        citation: "4 kap. 3 §",
        question: "Installation och montering",
        description: "Förvärrades felet även av felaktig installation eller bristfälliga monteringsanvisningar?",
        onYesGround: "Felaktig enligt 4 kap. 3 § p.g.a. brister i installation eller monteringsanvisning."
      },
      check_timeframe_objective: {
        citation: "4 kap. 14 & 17 §§",
        question: "Tidpunkt & Presumtionsregel",
        description: "Hur många månader har passerat sedan varan avlämnades (levererades) till köparen?"
      }
    },

    // src/data/translations.js (Inside 'sv' object)
    broughtToYouBy: "Framtagen av:",
    teamGroupLabel: "RaC26-Group 1",
    teamModalTitle: "Projektgrupp — RaC26-Group 1",
    closeBtn: "Stäng",
  },

  en: {

    // src/data/translations.js (Inside 'en' object)
    breadcrumbAct: "Consumer Sales Act (2022:260)",
    breadcrumbChapter: "Ch. 4 Defects in Goods",
    breadcrumbOutcome: "Evaluation Result",

    // Modal Translations
    modalTitle: "Consumer Sales Act (2022:260) — Chapter 4 Provisions",
    modalSections: {
        s1Title: "Chapter 4, Section 1 — Conformity with Contract (Subjective)",
        s1Text: "The goods must in terms of type, quantity, quality, other properties, and packaging conform to what follows from the contract.",
        s2Title: "Chapter 4, Section 2 — Objective Requirements",
        s2Text: "The goods must be fit for the purposes for which corresponding goods are normally used, and possess the durability and functionality the buyer can reasonably expect.",
        s3Title: "Chapter 4, Section 3 — Installation & Assembly",
        s3Text: "A defect exists if the goods were installed incorrectly by the seller, or if incorrect assembly instructions accompanied the goods.",
        s6Title: "Chapter 4, Section 6 — Exception for Explicit Approval",
        s6Text: "The seller is not liable for a deviation if the buyer was explicitly informed of the specific deviation and accepted it prior to purchase.",
        s14_17Title: "Chapter 4, Sections 14 & 17 — Time of Defect & Presumption Period",
        s14_17Text: "The seller is liable for defects existing at delivery. Defects showing within two years (24 months) are presumed to have existed at delivery."
    },

    // Header & Meta
    statuteBadge: "SFS 2022:260",
    title: "Consumer Sales Act Evaluator",
    statutoryRefBtn: "Statutory References",
    restartBtn: "Start New Assessment",
    step: "Step",
    completed: "Completed",
    of: "of",

    // Actions & Form
    yes: "Yes",
    no: "No",
    continue: "Continue Evaluation",
    previousQuestion: "Previous Question",
    monthsLabel: "Months since delivery:",

    // Diagnostic Outcome
    statusDefective: "Status: DEFECTIVE GOODS",
    statusNotDefective: "Status: NOT DEFECTIVE",
    sellerIsLiable: "Seller is Liable (Presumption rule active)",
    consumerBurden: "Burden of Proof rests on Consumer (> 2 Years)",
    sellerLiabilityHeader: "Seller Liability:",
    legalFindingsHeader: "Legal Findings & Rationale:",
    noDefectFound: "No statutory defects detected under Chapter 4 of the Consumer Sales Act.",

    // Presets Sidebar
    presetsHeader: "Presets for Team Demo",
    presetsSubtitle: "Quickly test statutory scenarios with your group:",
    scenarioATitle: "Scenario A: Agreed Fault vs Hidden Defect",
    scenarioASub: "4 kap. 1 § vs 6 § (Refrigerator)",
    scenarioBTitle: "Scenario B: Bad Assembly Manual",
    scenarioBSub: "4 kap. 3 § (Bookshelf instruction)",
    scenarioCTitle: "Scenario C: 2-Year Presumption Rule",
    scenarioCSub: "4 kap. 14 & 17 §§ (Bicycle hub)",

    // Questions & Nodes
    nodes: {
      check_subjective: {
        citation: "4 kap. 1 §",
        question: "Subjective Requirement Check",
        description: "Does the good fail to match the quantity, quality, packaging, or description explicitly agreed upon in the contract or sales receipt?",
        onYesGround: "Fails subjective requirement under 4 kap. 1 § (Does not match agreed spec/contract)."
      },
      check_objective: {
        citation: "4 kap. 2 §",
        question: "Objective Requirement Check",
        description: "Does the product fail normal expectations for fitness for standard purpose, durability, safety, or sample/model comparison?",
        onYesGround: "Fails objective requirements under 4 kap. 2 § (Durability, fitness, or safety)."
      },
      check_explicit_agreement: {
        citation: "4 kap. 6 §",
        question: "Explicit Pre-Sale Fault Disclaimer",
        description: "Was the consumer explicitly informed of this specific fault prior to purchase and did they explicitly accept it?",
        onYesGround: "Exempted under 4 kap. 6 § due to explicit pre-sale agreement on known fault."
      },
      check_assembly: {
        citation: "4 kap. 3 §",
        question: "Assembly & Installation Check",
        description: "Was the defect caused by incorrect installation performed by the seller, or by faulty assembly instructions in the manual?",
        onYesGround: "Defective under 4 kap. 3 § due to faulty installation or assembly manual."
      },
      check_assembly_after_objective_fault: {
        citation: "4 kap. 3 §",
        question: "Assembly & Installation Check",
        description: "Was the fault also exacerbated by incorrect installation or faulty manual instructions?",
        onYesGround: "Defective under 4 kap. 3 § due to faulty installation or assembly manual."
      },
      check_timeframe_objective: {
        citation: "4 kap. 14 & 17 §§",
        question: "Timeframe & Presumption Period",
        description: "How many months have passed since the product was delivered to the consumer?"
      },
      check_public_statements: {
        citation: "4 kap. 5 §",
        question: "Marknadsföring och offentliga utfästelser",
        description: "Avviker varan från uppgifter om dess egenskaper eller användning som lämnats vid marknadsföringen eller på förpackningen?",
        onYesGround: "Felaktig enligt 4 kap. 5 § p.g.a. avvikelse från marknadsföring eller förpackningsuppgifter."
      },
    },

    // src/data/translations.js (Inside 'en' object)
    broughtToYouBy: "Brought to you by:",
    teamGroupLabel: "RaC26-Group 1",
    teamModalTitle: "Project Team — RaC26-Group 1",
    closeBtn: "Close",
  }
};