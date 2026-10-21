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
    legalFindingsHeader: "Rättsliga slutsatser & Motivering:",
    noDefectFound: "Inga lagstadgade fel upptäcktes enligt 4 kap. Konsumentköplagen.",

    presetsHeader: "Förinställda scenarier",

    nodes: {
      Q1: {
        stage: "Tillämpningsområde",
        citation: "4 kap. 1 §",
        statuteText: "Varan ska i fråga om art, mängd, kvalitet, andra egenskaper och förpackning stämma överens med vad som följer av avtalet.",
        question: "Subjektivt kravtest (Avtalsenlighet)",
        description: "Avviker varan i fråga om art, mängd, kvalitet, förpackning eller beskrivning från vad som specifikt följer av avtalet eller kvittot?",
        onTrueGround: "Felaktig enligt 4 kap. 1 § — Varan avviker från vad som uttryckligen avtalats."
      },
      Q2: {
        stage: "Felbedömning",
        citation: "4 kap. 2 §",
        statuteText: "Varan ska vara ämnad för de ändamål för vilka motsvarande varor normalt används, ha den hållbarhet och funktion som köparen med fog kan förvänta sig.",
        question: "Objektivt kravtest",
        description: "Minskar varans hållbarhet, säkerhet eller funktion i förhållande till vad köparen med fog kunde förvänta sig för normal användning?",
        onTrueGround: "Felaktig enligt 4 kap. 2 § — Varan brister i normal hållbarhet, säkerhet eller funktion."
      },
      Q3: {
        stage: "Felbedömning",
        citation: "4 kap. 5 §",
        statuteText: "Fel finns om varan avviker från uppgifter om dess egenskaper eller användning som lämnats vid marknadsföringen eller på förpackningen.",
        question: "Marknadsföring och offentliga utfästelser",
        description: "Avviker varan från uppgifter om dess egenskaper eller användning som lämnats vid marknadsföringen eller på förpackningen?",
        onTrueGround: "Felaktig enligt 4 kap. 5 § — Avvikelse från uppgifter i marknadsföring eller förpackning."
      },
      Q4: {
        stage: "Undantag & Förbehåll",
        citation: "4 kap. 6 §",
        statuteText: "Säljaren svarar inte för en avvikelse om köparen uttryckligen och särskilt informerats och godkänt den vid köpet.",
        question: "Särskilt godkännande av avvikelse",
        description: "Informerades köparen uttryckligen om just denna specifika avvikelse före köpet och godkände den särskilt?",
        onTrueGround: "Undantag enligt 4 kap. 6 § — Köparen har uttryckligen informerats och godkänt avvikelsen."
      },
      Q5: {
        stage: "Montering & Installation",
        citation: "4 kap. 3 §",
        statuteText: "Fel finns även om varan installerats av säljaren eller om felaktiga monteringsanvisningar medföljt.",
        question: "Installation och montering",
        description: "Orsakades felet av att säljaren installerat varan felaktigt, eller p.g.a. felaktiga monteringsanvisningar i manualen?",
        onTrueGround: "Felaktig enligt 4 kap. 3 § — Brister i installation utförd av säljaren eller felaktig monteringsanvisning."
      },
      Q6: {
        stage: "Tidsfrist & Presumtion",
        citation: "4 kap. 14 & 17 §§",
        statuteText: "Säljaren svarar för fel som funnits vid avlämnandet. Fel som visar sig inom två år (24 månader) presumeras ha funnits vid avlämnandet.",
        question: "Tidpunkt & Presumtionsregel",
        description: "Visade sig felet inom 2 år (24 månader) från det att varan avlämnades?",
        onTrueGround: "Presumtionsregel aktiv (4 kap. 17 §) — Felet uppkom inom 2 år och presumeras ha funnits vid avlämnandet.",
        onFalseGround: "Presumtionsregel utgången (4 kap. 14 §) — Felet uppkom efter 2 år; köparen har bevisbördan."
      },
      OUT_Defective: {
        citation: "4 kap. Resultat",
        question: "Fel på varan konstaterat",
        description: "Varan anses felaktig enligt Konsumentköplagens bestämmelser."
      },
      OUT_NotDefective: {
        citation: "4 kap. Resultat",
        question: "Ej fel på varan",
        description: "Inga lagstadgade fel har konstaterats enligt 4 kap. Konsumentköplagen."
      }
    },

    broughtToYouBy: "Framtagen av:",
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
    legalFindingsHeader: "Legal Findings & Rationale:",
    noDefectFound: "No statutory defects detected under Chapter 4 of the Consumer Sales Act.",

    presetsHeader: "Presets for Team Demo",

    nodes: {
      Q1: {
        stage: "Scope & Conformity",
        citation: "Chapter 4, Section 1",
        statuteText: "The goods must in terms of type, quantity, quality, other properties, and packaging conform to what follows from the contract.",
        question: "Subjective Requirement Check",
        description: "Does the good fail to match the quantity, quality, packaging, or description explicitly agreed upon in the contract or sales receipt?",
        onTrueGround: "Defective under Chapter 4, Section 1 — Goods fail to conform with agreed contractual terms."
      },
      Q2: {
        stage: "Objective Quality",
        citation: "Chapter 4, Section 2",
        statuteText: "The goods must be fit for the purposes for which corresponding goods are normally used, and possess the durability and functionality the buyer can reasonably expect.",
        question: "Objective Requirement Check",
        description: "Does the product fail normal expectations for fitness for standard purpose, durability, safety, or sample/model comparison?",
        onTrueGround: "Defective under Chapter 4, Section 2 — Goods deviate from objective durability or standard fitness expectations."
      },
      Q3: {
        stage: "Public Statements",
        citation: "Chapter 4, Section 5",
        statuteText: "Goods are defective if they fail to conform to claims made in advertising, on packaging, or in public statements by the seller or manufacturer.",
        question: "Marketing & Public Statements",
        description: "Does the product fail to conform to specific claims made in marketing, on packaging, or in public statements by the seller or manufacturer?",
        onTrueGround: "Defective under Chapter 4, Section 5 — Goods fail to match claims made in marketing or packaging."
      },
      Q4: {
        stage: "Seller Disclaimers",
        citation: "Chapter 4, Section 6",
        statuteText: "The seller is not liable for a deviation if the buyer was explicitly informed of the specific deviation and accepted it prior to purchase.",
        question: "Explicit Pre-Sale Fault Disclaimer",
        description: "Was the consumer explicitly informed of this specific fault prior to purchase and did they explicitly accept it?",
        onTrueGround: "Exempted under Chapter 4, Section 6 — Consumer explicitly approved the specific deviation prior to sale."
      },
      Q5: {
        stage: "Assembly & Installation",
        citation: "Chapter 4, Section 3",
        statuteText: "A defect exists if the goods were installed incorrectly by the seller, or if incorrect assembly instructions accompanied the goods.",
        question: "Assembly & Installation Check",
        description: "Was the defect caused by incorrect installation performed by the seller, or by faulty assembly instructions in the manual?",
        onTrueGround: "Defective under Chapter 4, Section 3 — Defect resulted from faulty installation or incorrect assembly manual."
      },
      Q6: {
        stage: "Timeframe & Presumption",
        citation: "Chapter 4, Sections 14 & 17",
        statuteText: "The seller is liable for defects existing at delivery. Defects showing within two years (24 months) are presumed to have existed at delivery.",
        question: "Timeframe & Presumption Period",
        description: "Did the defect manifest within 2 years (24 months) from the date the product was delivered?",
        onTrueGround: "Presumption Rule Active (Chapter 4, Section 17) — Defect manifested within 2 years and is presumed present at delivery.",
        onFalseGround: "Presumption Window Expired (Chapter 4, Section 14) — Defect manifested after 2 years; burden of proof rests on consumer."
      },
      OUT_Defective: {
        citation: "Chapter 4 Result",
        question: "Defect Established",
        description: "The product is deemed legally defective under Chapter 4 of the Consumer Sales Act."
      },
      OUT_NotDefective: {
        citation: "Chapter 4 Result",
        question: "No Statutory Defect Found",
        description: "No statutory defects were identified under Chapter 4 of the Consumer Sales Act."
      }
    },

    broughtToYouBy: "Brought to you by:",
    teamGroupLabel: "RaC26-Group 1"
  }
};