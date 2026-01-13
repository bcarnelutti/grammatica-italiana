export interface IrregularVerb {
  infinitive: string;
  meaning?: string;
  // Optional specific conjugations overrides
  present?: string[];
  pastParticiple?: string;
  auxiliary?: 'avere' | 'essere';
  imperfetto?: string[];
  futuro?: string[];
  condizionale?: string[];
  congiuntivoPresente?: string[];
  congiuntivoPassato?: string[];
}

export const COMMON_ESSERE_VERBS = [
  'andare', 'venire', 'partire', 'tornare', 'entrare', 'uscire', 
  'salire', 'scendere', 'nascere', 'morire', 'stare', 'rimanere', 
  'restare', 'essere', 'diventare', 'cadere', 'arrivare', 'sembrare', 
  'piacere', 'succedere', 'costare'
];

export const IRREGULAR_VERBS: Record<string, IrregularVerb> = {
  'essere': {
    infinitive: 'essere',
    auxiliary: 'essere',
    pastParticiple: 'stato',
    present: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
    imperfetto: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'],
    futuro: ['sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno'],
    condizionale: ['sarei', 'saresti', 'sarebbe', 'saremmo', 'sareste', 'sarebbero'],
    congiuntivoPresente: ['sia', 'sia', 'sia', 'siamo', 'siate', 'siano'],
    congiuntivoPassato: ['sia stato', 'sia stato', 'sia stato', 'siamo stati', 'siate stati', 'siano stati'] // handled by logic usually but here for ref
  },
  'avere': {
    infinitive: 'avere',
    auxiliary: 'avere',
    pastParticiple: 'avuto',
    present: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
    futuro: ['avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno'],
    condizionale: ['avrei', 'avresti', 'avrebbe', 'avremmo', 'avreste', 'avrebbero'],
    congiuntivoPresente: ['abbia', 'abbia', 'abbia', 'abbiamo', 'abbiate', 'abbiano']
  },
  'fare': {
    infinitive: 'fare',
    pastParticiple: 'fatto',
    present: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
    imperfetto: ['facevo', 'facevi', 'faceva', 'facevamo', 'facevate', 'facevano'],
    congiuntivoPresente: ['faccia', 'faccia', 'faccia', 'facciamo', 'facciate', 'facciano']
  },
  'andare': {
    infinitive: 'andare',
    auxiliary: 'essere',
    present: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
    futuro: ['andrò', 'andrai', 'andrà', 'andremo', 'andrete', 'andranno'],
    condizionale: ['andrei', 'andresti', 'andrebbe', 'andremmo', 'andreste', 'andrebbero']
  },
  'venire': {
    infinitive: 'venire',
    auxiliary: 'essere',
    pastParticiple: 'venuto',
    present: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'],
    futuro: ['verrò', 'verrai', 'verrà', 'verremo', 'verrete', 'verranno'],
    condizionale: ['verrei', 'verresti', 'verrebbe', 'verremmo', 'verreste', 'verrebbero'],
    congiuntivoPresente: ['venga', 'venga', 'venga', 'veniamo', 'veniate', 'vengano']
  },
  'dire': {
    infinitive: 'dire',
    pastParticiple: 'detto',
    present: ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'],
    imperfetto: ['dicevo', 'dicevi', 'diceva', 'dicevamo', 'dicevate', 'dicevano'],
    congiuntivoPresente: ['dica', 'dica', 'dica', 'diciamo', 'diciate', 'dicano']
  },
  'potere': {
    infinitive: 'potere',
    present: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'],
    futuro: ['potrò', 'potrai', 'potrà', 'potremo', 'potrete', 'potranno'],
    condizionale: ['potrei', 'potresti', 'potrebbe', 'potremmo', 'potreste', 'potrebbero']
  },
  'volere': {
    infinitive: 'volere',
    present: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'],
    futuro: ['vorrò', 'vorrai', 'vorrà', 'vorremo', 'vorrete', 'vorranno'],
    condizionale: ['vorrei', 'vorresti', 'vorrebbe', 'vorremmo', 'vorreste', 'vorrebbero'],
    congiuntivoPresente: ['voglia', 'voglia', 'voglia', 'vogliamo', 'vogliate', 'vogliano']
  },
  'dovere': {
    infinitive: 'dovere',
    present: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'],
    futuro: ['dovrò', 'dovrai', 'dovrà', 'dovremo', 'dovrete', 'dovranno'],
    condizionale: ['dovrei', 'dovresti', 'dovrebbe', 'dovremmo', 'dovreste', 'dovrebbero']
  },
  'sapere': {
    infinitive: 'sapere',
    present: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'],
    futuro: ['saprò', 'saprai', 'saprà', 'sapremo', 'saprete', 'sapranno'],
    condizionale: ['saprei', 'sapresti', 'saprebbe', 'sapremmo', 'sapreste', 'saprebbero'],
    congiuntivoPresente: ['sappia', 'sappia', 'sappia', 'sappiamo', 'sappiate', 'sappiano']
  },
  'stare': {
    infinitive: 'stare',
    auxiliary: 'essere',
    pastParticiple: 'stato',
    present: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'],
    congiuntivoPresente: ['stia', 'stia', 'stia', 'stiamo', 'stiate', 'stiano']
  },
  'dare': {
    infinitive: 'dare',
    pastParticiple: 'dato',
    present: ['do', 'dai', 'dà', 'diamo', 'date', 'danno'],
    congiuntivoPresente: ['dia', 'dia', 'dia', 'diamo', 'diate', 'diano']
  },
  'bere': {
    infinitive: 'bere',
    pastParticiple: 'bevuto',
    present: ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'],
    imperfetto: ['bevevo', 'bevevi', 'beveva', 'bevevamo', 'bevevate', 'bevevano'],
    congiuntivoPresente: ['beva', 'beva', 'beva', 'beviamo', 'beviate', 'bevano']
  },
  'salire': {
    infinitive: 'salire',
    auxiliary: 'essere',
    present: ['salgo', 'sali', 'sale', 'saliamo', 'salite', 'salgono'],
    congiuntivoPresente: ['salga', 'salga', 'salga', 'saliamo', 'saliate', 'salgano']
  },
  'scegliere': {
    infinitive: 'scegliere',
    pastParticiple: 'scelto',
    present: ['scelgo', 'scegli', 'sceglie', 'scegliamo', 'scegliete', 'scelgono'],
    congiuntivoPresente: ['scelga', 'scelga', 'scelga', 'scegliamo', 'scegliate', 'scelgano']
  },
  'uscire': {
    infinitive: 'uscire',
    auxiliary: 'essere',
    present: ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'],
    congiuntivoPresente: ['esca', 'esca', 'esca', 'usciamo', 'usciate', 'escano']
  },
  'tenere': {
    infinitive: 'tenere',
    present: ['tengo', 'tieni', 'tiene', 'teniamo', 'tenete', 'tengono'],
    futuro: ['terrò', 'terrai', 'terrà', 'terremo', 'terrete', 'terranno'],
    condizionale: ['terrei', 'terresti', 'terrebbe', 'terremmo', 'terreste', 'terrebbero'],
    congiuntivoPresente: ['tenga', 'tenga', 'tenga', 'teniamo', 'teniate', 'tengano']
  },
  'spegnere': {
    infinitive: 'spegnere',
    pastParticiple: 'spento',
    present: ['spengo', 'spegni', 'spegne', 'spegniamo', 'spegnete', 'spengono'],
    congiuntivoPresente: ['spenga', 'spenga', 'spenga', 'spegniamo', 'spegniate', 'spengano']
  },
  'rimanere': {
    infinitive: 'rimanere',
    auxiliary: 'essere',
    pastParticiple: 'rimasto',
    present: ['rimango', 'rimani', 'rimane', 'rimaniamo', 'rimanete', 'rimangono'],
    futuro: ['rimarrò', 'rimarrai', 'rimarrà', 'rimarremo', 'rimarrete', 'rimarranno'],
    condizionale: ['rimarrei', 'rimarresti', 'rimarrebbe', 'rimarremmo', 'rimarreste', 'rimarrebbero'],
    congiuntivoPresente: ['rimanga', 'rimanga', 'rimanga', 'rimaniamo', 'rimaniate', 'rimangano']
  },
  'vedere': {
    infinitive: 'vedere',
    pastParticiple: 'visto',
    futuro: ['vedrò', 'vedrai', 'vedrà', 'vedremo', 'vedrete', 'vedranno'],
    condizionale: ['vedrei', 'vedresti', 'vedrebbe', 'vedremmo', 'vedreste', 'vedrebbero']
  },
  'vivere': {
    infinitive: 'vivere',
    pastParticiple: 'vissuto',
    auxiliary: 'essere', // often
    futuro: ['vivrò', 'vivrai', 'vivrà', 'vivremo', 'vivrete', 'vivranno'],
    condizionale: ['vivrei', 'vivresti', 'vivrebbe', 'vivremmo', 'vivreste', 'vivrebbero']
  }
};
