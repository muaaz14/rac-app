export const translations = {
  sv: {
    breadcrumbAct: "Konsumentköplag (2022:260)",
    breadcrumbChapter: "4 kap. Fel på varan",
    breadcrumbOutcome: "Resultat",

    modalTitle: "Konsumentköplag (2022:260) — 4 kap. Lagrum",
    modalSections: {
      s1Title: "4 kap. 1 § — Avtalsenlighet (Subjektiva krav)",
      s1Text: "Varan ska i fråga om art, mängd, kvalitet, andra egenskaper och förpackning stämma överens med vad som följer av avtalet.",
      s2Title: "4 kap. 2 § — Objektiva krav",
      s2Text: "Varan ska vara ämnad för de ändamål för vilka motsvarande varor normalt används, ha den hållbarhet och funktion som köparen med fog kan förvänta sig.",
      s3Title: "4 kap. 3 § — Installation och montering",
      s3Text: "Fel finns även om varan installerats av säljaren eller om felaktiga monteringsanvisningar medföljt.",
      s5Title: "4 kap. 5 § — Marknadsföring och offentliga utfästelser",
      s5Text: "Fel finns om varan avviker från uppgifter om dess egenskaper eller användning som lämnats vid marknadsföringen eller på förpackningen.",
      s6Title: "4 kap. 6 § — Undantag vid särskilt godkännande",
      s6Text: "Säljaren svarar inte för en avvikelse om köparen uttryckligen och särskilt informerats och godkänt den vid köpet.",
      s14_17Title: "4 kap. 14 & 17 §§ — Tidpunkt för fel och presumtion",
      s14_17Text: "Säljaren svarar för fel som funnits vid avlämnandet. Fel som visar sig inom två år (24 månader) presumeras ha funnits vid avlämnandet."
    },

    statuteBadge: "SFS 2022:260",
    title: "Konsumentköplag Utvärderare",
    statutoryRefBtn: "Juridiska hänvisningar",
    restartBtn: "Starta nytt test",
    step: "Fråga",
    completed: "Slutfört",
    of: "av",

    yes: "Ja",
    no: "Nej",
    continue: "Fortsätt utvärdering",
    previousQuestion: "Föregående fråga",
    monthsLabel: "Månader sedan avlämnande (leverans):",

    statusDefective: "Status: FEL PÅ VARAN",
    statusNotDefective: "Status: EJ FEL PÅ VARAN",
    sellerIsLiable: "Säljaren är ansvarig (Presumtionsregeln gäller)",
    consumerBurden: "Köparen har bevisbördan (Tiden har passerat 2 år)",
    sellerLiabilityHeader: "Säljarens ansvar:",
    legalFindingsHeader: "Rättsliga slutsatser & Motivering:",
    noDefectFound: "Inga lagstadgade fel upptäcktes enligt 4 kap. Konsumentköplagen.",

    presetsHeader: "Förinställda scenarier",
    presetsSubtitle: "Klicka för att snabbt testa lagstadgade fall med gruppen:",
    scenarioATitle: "Scenario A: Avtalat fel vs Dolt fel",
    scenarioASub: "4 kap. 1 § vs 6 § (Kylskåp)",
    scenarioBTitle: "Scenario B: Felaktig monteringsanvisning",
    scenarioBSub: "4 kap. 3 § (Bokhylla)",
    scenarioCTitle: "Scenario C: 2-års presumtionsregel",
    scenarioCSub: "4 kap. 14 & 17 §§ (Cykelväxel)",

    nodes: {
      Q1: {
        citation: "1 kap. 2 §",
        question: "Konsumentskyddets tillämpningsområde",
        description: "Är köparen en privatperson (konsument) som handlar huvudsakligen för ändamål som faller utanför näringsverksamhet?"
      },
      Q2: {
        citation: "1 kap. 2 §",
        question: "Säljarens egenskap",
        description: "Är säljaren en näringsidkare eller förmedlas köpet av en näringsidkare?"
      },
      Q3: {
        citation: "1 kap. 1 §",
        question: "Varuidentifiering",
        description: "Avser köpet en lös sak (fysisk vara)?"
      },
      Q4: {
        citation: "1 kap. 3 §",
        question: "Undantag från lagen",
        description: "Är köpet undantaget från Konsumentköplagens tillämpningsområde?"
      },
      Q5: {
        citation: "1 kap. 4 §",
        question: "Tidsmässigt tillämpningsområde",
        description: "Infaller köpet eller avlämnandet inom lagens giltighetstid?"
      },
      Q6: {
        citation: "4 kap. 2 § 3 st.",
        question: "Säkerhetsbrister",
        description: "Innebär varan en säkerhetsrisk eller brister den i lagstadgade säkerhetskrav?"
      },
      Q7: {
        citation: "4 kap. 13 §",
        question: "Tredje mans rätt (Rättsligt fel)",
        description: "Är varan fri från tredje mans äganderätt, panträtt eller andra rättsliga anspråk?"
      },
      Q8: {
        citation: "4 kap. 2 §",
        question: "Säkerhetsinformation",
        description: "Har nödvändig säkerhetsinformation och anvisningar tillhandahållits?"
      },
      Q9: {
        citation: "4 kap. 5 §",
        question: "Informations- och marknadsföringskrav",
        description: "Stämmer varan överens med de uppgifter som lämnats vid marknadsföring eller på förpackning?"
      },
      Q10: {
        citation: "4 kap. 5 §",
        question: "Inverkan på köpet",
        description: "Kan det antas att de utelämnade eller felaktiga uppgifterna INTE har inverkat på köpet?"
      },
      Q11: {
        citation: "4 kap. 5 §",
        question: "Rättelse av uppgifter",
        description: "Rättades de felaktiga marknadsföringsuppgifterna tydligt före köpet?"
      },
      Q12: {
        citation: "4 kap. 5 § 2 st.",
        question: "Uppgifter från utomstående",
        description: "Lämnades uppgifterna av någon annan än säljaren (t.ex. tillverkaren)?"
      },
      Q13: {
        citation: "4 kap. 5 § 2 st.",
        question: "Säljarens vetskap om uppgifter",
        description: "Kände säljaren till, eller borde ha känt till, de felaktiga uppgifterna?"
      },
      Q14: {
        citation: "4 kap. 1 §",
        question: "Subjektiva krav (Avtalsenlighet)",
        description: "Stämmer varan överens med art, mängd, kvalitet och övriga egenskaper enligt avtalet?"
      },
      Q15: {
        citation: "4 kap. 2 §",
        question: "Objektiva krav",
        description: "Uppfyller varan normala förväntningar gällande funktion, hållbarhet och användbarhet?"
      },
      Q16: {
        citation: "4 kap. 3 §",
        question: "Installationsrelaterat fel",
        description: "Orsakades felet i samband med installation eller montering av varan?"
      },
      Q17: {
        citation: "4 kap. 3 § 1 st.",
        question: "Installation utförd av säljaren",
        description: "Utfördes installationen av säljaren eller någon för säljarens räkning?"
      },
      Q18: {
        citation: "4 kap. 3 § 2 st.",
        question: "Monteringsanvisningar",
        description: "Berodde den felaktiga installationen på brister i medföljande monteringsanvisningar?"
      },
      Q19: {
        citation: "4 kap. 6 §",
        question: "Information om avvikelse",
        description: "Informerades konsumenten uttryckligen om den specifika avvikelsen före köpet?"
      },
      Q20: {
        citation: "4 kap. 6 §",
        question: "Särskilt godkännande",
        description: "Godkände konsumenten uttryckligen och särskilt denna avvikelse vid köpet?"
      },
      OUT_NotApplicable: {
        citation: "1 kap.",
        question: "Lagen ej tillämplig",
        description: "Konsumentköplagen är inte tillämplig på detta ärende baserat på de angivna förutsättningarna."
      },
      OUT_Defective: {
        citation: "4 kap.",
        question: "Fel på varan konstaterat",
        description: "Varan anses felaktig enligt Konsumentköplagens bestämmelser.",
        onYesGround: "Varan avviker från lagstadgade krav i 4 kap. Konsumentköplagen."
      },
      OUT_NotDefective: {
        citation: "4 kap.",
        question: "Ej fel på varan",
        description: "Inga lagstadgade fel har konstaterats enligt 4 kap. Konsumentköplagen."
      },
      PLACEHOLDER_Q20_YES: {
        citation: "4 kap. 6 §",
        question: "Godkänd avvikelse",
        description: "Säljaren frias från ansvar för denna specifika avvikelse eftersom konsumenten särskilt godkänt den."
      }
    },

    broughtToYouBy: "Framtagen av:",
    teamGroupLabel: "RaC26-Group 1",
    teamModalTitle: "Projektgrupp — RaC26-Group 1",
    closeBtn: "Stäng"
  },

  en: {
    breadcrumbAct: "Consumer Sales Act (2022:260)",
    breadcrumbChapter: "Ch. 4 Defects in Goods",
    breadcrumbOutcome: "Evaluation Result",

    modalTitle: "Consumer Sales Act (2022:260) — Chapter 4 Provisions",
    modalSections: {
      s1Title: "Chapter 4, Section 1 — Conformity with Contract (Subjective)",
      s1Text: "The goods must in terms of type, quantity, quality, other properties, and packaging conform to what follows from the contract.",
      s2Title: "Chapter 4, Section 2 — Objective Requirements",
      s2Text: "The goods must be fit for the purposes for which corresponding goods are normally used, and possess the durability and functionality the buyer can reasonably expect.",
      s3Title: "Chapter 4, Section 3 — Installation & Assembly",
      s3Text: "A defect exists if the goods were installed incorrectly by the seller, or if incorrect assembly instructions accompanied the goods.",
      s5Title: "Chapter 4, Section 5 — Marketing Statements",
      s5Text: "Goods are defective if they fail to conform to claims made in advertising, on packaging, or in public statements.",
      s6Title: "Chapter 4, Section 6 — Exception for Explicit Approval",
      s6Text: "The seller is not liable for a deviation if the buyer was explicitly informed of the specific deviation and accepted it prior to purchase.",
      s14_17Title: "Chapter 4, Sections 14 & 17 — Time of Defect & Presumption Period",
      s14_17Text: "The seller is liable for defects existing at delivery. Defects showing within two years (24 months) are presumed to have existed at delivery."
    },

    statuteBadge: "SFS 2022:260",
    title: "Consumer Sales Act Evaluator",
    statutoryRefBtn: "Legal Citations",
    restartBtn: "Start New Assessment",
    step: "Question",
    completed: "Completed",
    of: "of",

    yes: "Yes",
    no: "No",
    continue: "Continue Evaluation",
    previousQuestion: "Previous Question",
    monthsLabel: "Months since delivery:",

    statusDefective: "Status: DEFECTIVE GOODS",
    statusNotDefective: "Status: NOT DEFECTIVE",
    sellerIsLiable: "Seller is Liable (Presumption rule active)",
    consumerBurden: "Burden of Proof rests on Consumer (> 2 Years)",
    sellerLiabilityHeader: "Seller Liability:",
    legalFindingsHeader: "Legal Findings & Rationale:",
    noDefectFound: "No statutory defects detected under Chapter 4 of the Consumer Sales Act.",

    presetsHeader: "Presets for Team Demo",
    presetsSubtitle: "Quickly test statutory scenarios with your group:",
    scenarioATitle: "Scenario A: Agreed Fault vs Hidden Defect",
    scenarioASub: "Chapter 4, Section 1 vs Section 6 (Refrigerator)",
    scenarioBTitle: "Scenario B: Bad Assembly Manual",
    scenarioBSub: "Chapter 4, Section 3 (Bookshelf instruction)",
    scenarioCTitle: "Scenario C: 2-Year Presumption Rule",
    scenarioCSub: "Chapter 4, Sections 14 & 17 (Bicycle hub)",

    nodes: {
      Q1: {
        citation: "Chapter 1, Section 2",
        question: "Consumer Scope Check",
        description: "Is the buyer a natural person (consumer) acting mainly for purposes outside a business trade?"
      },
      Q2: {
        citation: "Chapter 1, Section 2",
        question: "Trader Status Check",
        description: "Is the seller a commercial trader, or is the sale brokered by a trader?"
      },
      Q3: {
        citation: "Chapter 1, Section 1",
        question: "Physical Goods Identification",
        description: "Does the transaction pertain to tangible movable property (physical goods)?"
      },
      Q4: {
        citation: "Chapter 1, Section 3",
        question: "Exemption Check",
        description: "Is the transaction explicitly exempted from the scope of the Consumer Sales Act?"
      },
      Q5: {
        citation: "Chapter 1, Section 4",
        question: "Temporal Scope",
        description: "Did the purchase or delivery occur within the effective validity period of the Act?"
      },
      Q6: {
        citation: "Chapter 4, Section 2",
        question: "Safety Standards Check",
        description: "Does the product present a safety hazard or fail mandatory safety requirements?"
      },
      Q7: {
        citation: "Chapter 4, Section 13",
        question: "Third-Party Rights (Legal Defect)",
        description: "Is the product free from third-party ownership claims, liens, or encumbrances?"
      },
      Q8: {
        citation: "Chapter 4, Section 2",
        question: "Safety Instructions Provided",
        description: "Were necessary safety warnings and operational instructions adequately provided?"
      },
      Q9: {
        citation: "Chapter 4, Section 5",
        question: "Public & Marketing Statements",
        description: "Does the product conform to claims made in advertising, marketing, or on packaging?"
      },
      Q10: {
        citation: "Chapter 4, Section 5",
        question: "Impact on Purchase",
        description: "Can it be assumed that the omitted or incorrect marketing details did NOT influence the purchase decision?"
      },
      Q11: {
        citation: "Chapter 4, Section 5",
        question: "Correction of Information",
        description: "Were the inaccurate marketing statements clearly corrected prior to contract conclusion?"
      },
      Q12: {
        citation: "Chapter 4, Section 5",
        question: "Third-Party Marketing Claims",
        description: "Were the marketing statements made by an independent third party (e.g., manufacturer) rather than the direct seller?"
      },
      Q13: {
        citation: "Chapter 4, Section 5",
        question: "Seller Knowledge of Claims",
        description: "Did the seller know, or should the seller reasonably have known, about the inaccurate third-party statements?"
      },
      Q14: {
        citation: "Chapter 4, Section 1",
        question: "Subjective Requirements (Contract Conformity)",
        description: "Does the good match the agreed type, quantity, quality, packaging, and specific specifications in the contract?"
      },
      Q15: {
        citation: "Chapter 4, Section 2",
        question: "Objective Requirements",
        description: "Does the product satisfy general expectations regarding fitness for purpose, durability, and functionality?"
      },
      Q16: {
        citation: "Chapter 4, Section 3",
        question: "Installation-Related Defect",
        description: "Was the defect caused during or as a result of installation/assembly?"
      },
      Q17: {
        citation: "Chapter 4, Section 3",
        question: "Installation Performed by Seller",
        description: "Was the installation carried out by the seller or under the seller's responsibility?"
      },
      Q18: {
        citation: "Chapter 4, Section 3",
        question: "Assembly Instructions Manual",
        description: "Was the incorrect installation caused by shortcomings or errors in the provided assembly instructions?"
      },
      Q19: {
        citation: "Chapter 4, Section 6",
        question: "Notice of Specific Deviation",
        description: "Was the consumer explicitly informed of this specific deviation prior to purchase?"
      },
      Q20: {
        citation: "Chapter 4, Section 6",
        question: "Explicit Approval of Deviation",
        description: "Did the consumer explicitly and specifically accept this deviation at the time of purchase?"
      },
      OUT_NotApplicable: {
        citation: "Chapter 1",
        question: "Act Not Applicable",
        description: "The Consumer Sales Act does not apply to this transaction based on the provided inputs."
      },
      OUT_Defective: {
        citation: "Chapter 4",
        question: "Defect Established",
        description: "The product is deemed legally defective under Chapter 4 provisions.",
        onYesGround: "Product deviates from mandatory statutory standards under Chapter 4."
      },
      OUT_NotDefective: {
        citation: "Chapter 4",
        question: "No Statutory Defect Found",
        description: "No statutory defects were identified under Chapter 4 of the Act."
      },
      PLACEHOLDER_Q20_YES: {
        citation: "Chapter 4, Section 6",
        question: "Approved Deviation",
        description: "The seller is exempt from liability for this specific fault due to explicit consumer pre-sale agreement."
      }
    },

    broughtToYouBy: "Brought to you by:",
    teamGroupLabel: "RaC26-Group 1",
    teamModalTitle: "Project Team — RaC26-Group 1",
    closeBtn: "Close"
  }
};