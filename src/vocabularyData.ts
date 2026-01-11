export interface VocabItem {
  id: string;
  it: string;
  en: string;
  gender?: 'm' | 'f' | 'pl';
}

export const vocabularyData: Record<string, VocabItem[]> = {
  clothing: [
    { id: 'shirt', it: 'Camicia', en: 'Shirt', gender: 'f' },
    { id: 'tshirt', it: 'Maglietta', en: 'T-shirt', gender: 'f' },
    { id: 'pants', it: 'Pantaloni', en: 'Pants', gender: 'pl' },
    { id: 'jeans', it: 'Jeans', en: 'Jeans', gender: 'pl' },
    { id: 'dress', it: 'Vestito', en: 'Dress', gender: 'm' },
    { id: 'skirt', it: 'Gonna', en: 'Skirt', gender: 'f' },
    { id: 'sweater', it: 'Maglione', en: 'Sweater', gender: 'm' },
    { id: 'jacket', it: 'Giacca', en: 'Jacket', gender: 'f' },
    { id: 'coat', it: 'Cappotto', en: 'Coat', gender: 'm' },
    { id: 'shoes', it: 'Scarpe', en: 'Shoes', gender: 'pl' },
    { id: 'boots', it: 'Stivali', en: 'Boots', gender: 'pl' },
    { id: 'hat', it: 'Cappello', en: 'Hat', gender: 'm' },
    { id: 'scarf', it: 'Sciarpa', en: 'Scarf', gender: 'f' },
    { id: 'gloves', it: 'Guanti', en: 'Gloves', gender: 'pl' },
    { id: 'socks', it: 'Calzini', en: 'Socks', gender: 'pl' },
  ],
  health: [],
  travel: [],
  education: [],
  body: [],
  nature: [],
  celebrations: [],
  sports: []
};