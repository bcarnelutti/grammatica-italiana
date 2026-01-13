import { IRREGULAR_VERBS, COMMON_ESSERE_VERBS } from './verbData';

export type Tense = 
  | 'presente' 
  | 'passatoProssimo' 
  | 'imperfetto' 
  | 'futuro' 
  | 'condizionale' 
  | 'congiuntivoPresente' 
  | 'congiuntivoPassato';

export const PRONOUNS = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
export const SUBJ_PRONOUNS = ['che io', 'che tu', 'che lui/lei', 'che noi', 'che voi', 'che loro'];

const ENDINGS = {
  are: {
    presente: ['o', 'i', 'a', 'iamo', 'ate', 'ano'],
    imperfetto: ['avo', 'avi', 'ava', 'avamo', 'avate', 'avano'],
    futuro: ['erò', 'erai', 'erà', 'eremo', 'erete', 'eranno'],
    condizionale: ['erei', 'eresti', 'erebbe', 'eremmo', 'ereste', 'erebbero'],
    congiuntivoPresente: ['i', 'i', 'i', 'iamo', 'iate', 'ino'],
    pastParticiple: 'ato'
  },
  ere: {
    presente: ['o', 'i', 'e', 'iamo', 'ete', 'ono'],
    imperfetto: ['evo', 'evi', 'eva', 'evamo', 'evate', 'evano'],
    futuro: ['erò', 'erai', 'erà', 'eremo', 'erete', 'eranno'],
    condizionale: ['erei', 'eresti', 'erebbe', 'eremmo', 'ereste', 'erebbero'],
    congiuntivoPresente: ['a', 'a', 'a', 'iamo', 'iate', 'ano'],
    pastParticiple: 'uto'
  },
  ire: {
    presente: ['o', 'i', 'e', 'iamo', 'ite', 'ono'],
    imperfetto: ['ivo', 'ivi', 'iva', 'ivamo', 'ivate', 'ivano'],
    futuro: ['irò', 'irai', 'irà', 'iremo', 'irete', 'iranno'],
    condizionale: ['irei', 'iresti', 'irebbe', 'iremmo', 'ireste', 'irebbero'],
    congiuntivoPresente: ['a', 'a', 'a', 'iamo', 'iate', 'ano'],
    pastParticiple: 'ito'
  }
};

const ISC_VERBS = ['capire', 'finire', 'preferire', 'pulire', 'spedire', 'costruire', 'unire', 'chiarire'];

const getAuxiliary = (verb: string): 'avere' | 'essere' => {
  if (IRREGULAR_VERBS[verb]?.auxiliary) return IRREGULAR_VERBS[verb].auxiliary!;
  if (COMMON_ESSERE_VERBS.includes(verb)) return 'essere';
  if (verb.endsWith('rsi')) return 'essere'; // Reflexive
  return 'avere'; // Default
};

const getPastParticiple = (verb: string, root: string, ending: 'are' | 'ere' | 'ire'): string => {
  if (IRREGULAR_VERBS[verb]?.pastParticiple) return IRREGULAR_VERBS[verb].pastParticiple!;
  return root + ENDINGS[ending].pastParticiple;
};

const getConjugation = (tense: string, root: string, ending: 'are' | 'ere' | 'ire', verb: string): string[] => {
  // Check irregular override first
  // @ts-ignore
  if (IRREGULAR_VERBS[verb] && IRREGULAR_VERBS[verb][tense]) {
     // @ts-ignore
     return IRREGULAR_VERBS[verb][tense];
  }

  // Handle -ISC- verbs in Presente and Congiuntivo Presente
  if (ISC_VERBS.includes(verb)) {
    if (tense === 'presente') {
      return [`${root}isco`, `${root}isci`, `${root}isce`, `${root}iamo`, `${root}ite`, `${root}iscono`];
    }
    if (tense === 'congiuntivoPresente') {
      return [`${root}isca`, `${root}isca`, `${root}isca`, `${root}iamo`, `${root}iate`, `${root}iscano`];
    }
  }

  // Handle CARE/GARE phonetic changes in Futuro and Condizionale
  // cercare -> cercherò (add h)
  // pagare -> pagherò (add h)
  if ((tense === 'futuro' || tense === 'condizionale') && ending === 'are') {
    if (root.endsWith('c') || root.endsWith('g')) {
      root = root + 'h';
    }
  }
  
  // Handle CIARE/GIARE phonetic changes in Futuro and Condizionale
  // mangiare -> mangerò (remove i)
  // cominciare -> comincerò (remove i)
  if ((tense === 'futuro' || tense === 'condizionale') && ending === 'are') {
      if (root.endsWith('ci') || root.endsWith('gi')) {
          root = root.slice(0, -1);
      }
  }

  // Generic regular
  // @ts-ignore
  const suffixes = ENDINGS[ending][tense] as string[];
  return suffixes.map(suffix => root + suffix);
};

export const conjugateVerb = (verbInput: string, tense: Tense): string[] => {
  const verb = verbInput.toLowerCase().trim();
  
  // Basic validation
  if (!verb.endsWith('are') && !verb.endsWith('ere') && !verb.endsWith('ire')) {
    return Array(6).fill('Invalid verb ending');
  }

  const ending = verb.slice(-3) as 'are' | 'ere' | 'ire';
  const root = verb.slice(0, -3);

  // Simple tenses
  if (tense !== 'passatoProssimo' && tense !== 'congiuntivoPassato') {
    return getConjugation(tense, root, ending, verb);
  }

  // Compound tenses
  const aux = getAuxiliary(verb);
  const pp = getPastParticiple(verb, root, ending);
  
  let auxConj: string[] = [];
  
  if (tense === 'passatoProssimo') {
    auxConj = IRREGULAR_VERBS[aux].present!;
  } else if (tense === 'congiuntivoPassato') {
    auxConj = IRREGULAR_VERBS[aux].congiuntivoPresente!;
  }

  return auxConj.map((a, idx) => {
    // Basic gender agreement for essere (singular/plural)
    let ppAgreed = pp;
    if (aux === 'essere') {
      if (idx < 3) ppAgreed = pp.endsWith('o') ? pp + '/a' : pp; // Singular
      else ppAgreed = pp.endsWith('o') ? pp.slice(0, -1) + 'i/e' : pp; // Plural
    }
    return `${a} ${ppAgreed}`;
  });
};
