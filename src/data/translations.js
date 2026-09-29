export const translations = {
  sv: {
    // Header & Meta
    statuteBadge: "SFS 2022:260",
    title: "Konsumentköplag Utvärderare",
    statutoryRefBtn: "Lagtextreferenser",
    restartBtn: "Starta om",
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
        groundText: "Brister i subjektiva krav enligt 4 kap. 1 § (Stämmer inte överens med avtalet)."
      },
      check_objective: {
        citation: "4 kap. 2 §",
        question: "Objektivt kravtest",
        description: "Minskar varans hållbarhet, säkerhet eller funktion i förhållande till vad köparen med fog kunde förvänta sig för normal användning?",
        groundText: "Brister i objektiva krav enligt 4 kap. 2 § (Avviker från normal hållbarhet/funktion)."
      },
      check_explicit_agreement: {
        citation: "4 kap. 6 §",
        question: "Särskilt godkännande av avvikelse",
        description: "Informerades köparen uttryckligen om just denna specifika avvikelse före köpet och godkände den särskilt?",
        groundText: "Undantaget enligt 4 kap. 6 § gäller då köparen uttryckligen godkänt avvikelsen."
      },
      check_assembly: {
        citation: "4 kap. 3 §",
        question: "Installation och montering",
        description: "Orsakades felet av att säljaren installerat varan felaktigt, eller p.g.a. felaktiga monteringsanvisningar i manualen?",
        groundText: "Felaktig enligt 4 kap. 3 § p.g.a. brister i installation eller monteringsanvisning."
      },
      check_timeframe_objective: {
        citation: "4 kap. 14 & 17 §§",
        question: "Tidpunkt & Presumtionsregel",
        description: "Hur många månader har passerat sedan varan avlämnades (levererades) till köparen?"
      }
    }
  },

  en: {
    // Header & Meta
    statuteBadge: "SFS 2022:260",
    title: "Consumer Sales Act Evaluator",
    statutoryRefBtn: "Statutory References",
    restartBtn: "Restart Assessment",
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
        groundText: "Fails subjective requirement under 4 kap. 1 § (Does not match agreed spec/contract)."
      },
      check_objective: {
        citation: "4 kap. 2 §",
        question: "Objective Requirement Check",
        description: "Does the product fail normal expectations for fitness for standard purpose, durability, safety, or sample/model comparison?",
        groundText: "Fails objective requirements under 4 kap. 2 § (Durability, fitness, or safety)."
      },
      check_explicit_agreement: {
        citation: "4 kap. 6 §",
        question: "Explicit Pre-Sale Fault Disclaimer",
        description: "Was the consumer explicitly informed of this specific fault prior to purchase and did they explicitly accept it?",
        groundText: "Exempted under 4 kap. 6 § due to explicit pre-sale agreement on known fault."
      },
      check_assembly: {
        citation: "4 kap. 3 §",
        question: "Assembly & Installation Check",
        description: "Was the defect caused by incorrect installation performed by the seller, or by faulty assembly instructions in the manual?",
        groundText: "Defective under 4 kap. 3 § due to faulty installation or assembly manual."
      },
      check_timeframe_objective: {
        citation: "4 kap. 14 & 17 §§",
        question: "Timeframe & Presumption Period",
        description: "How many months have passed since the product was delivered to the consumer?"
      }
    }
  }
};