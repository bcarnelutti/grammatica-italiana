export const translations = {
  it: {
    title: "Grammatica Italiana",
    subtitle: "Schede interattive per imparare la grammatica italiana.",
    footer: "Creato per gli studenti di lingua italiana",
    nav: {
      articles: "Articoli",
      verbs: "Verbi Presenti",
      prepositions: "Preposizioni",
      vocabulary: "Vocabolario",
      back: "Indietro"
    },
    articles: {
      definiteTitle: "Articoli Determinativi",
      indefiniteTitle: "Articoli Indeterminativi"
    },
    verbs: {
      presentTitle: "Presente Indicativo"
    },
    prepositions: {
      simpleTitle: "Preposizioni Semplici",
      articulatedTitle: "Preposizioni Articolate"
    },
    vocabularyMenu: {
      clothing: "Abbigliamento",
      health: "Salute",
      travel: "Viaggi",
      education: "Istruzione",
      body: "Il corpo",
      nature: "Natura",
      celebrations: "Feste",
      sports: "Sport"
    },
    controls: {
      expandAll: "Espandi tutto",
      collapseAll: "Comprimi tutto"
    }
  },
  en: {
    title: "Italian Grammar",
    subtitle: "Interactive charts to learn Italian grammar.",
    footer: "Created for Italian language students",
    nav: {
      articles: "Articles",
      verbs: "Present Verbs",
      prepositions: "Prepositions",
      vocabulary: "Vocabulary",
      back: "Back"
    },
    articles: {
      definiteTitle: "Definite Articles",
      indefiniteTitle: "Indefinite Articles"
    },
    verbs: {
      presentTitle: "Present Indicative"
    },
    prepositions: {
      simpleTitle: "Simple Prepositions",
      articulatedTitle: "Articulated Prepositions"
    },
    vocabularyMenu: {
      clothing: "Clothing",
      health: "Health",
      travel: "Travel",
      education: "Education",
      body: "The body",
      nature: "Nature",
      celebrations: "Celebrations",
      sports: "Sports"
    },
    controls: {
      expandAll: "Expand all",
      collapseAll: "Collapse all"
    }
  }
};

export type Language = 'it' | 'en';
export type TranslationKey = keyof typeof translations.it;