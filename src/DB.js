export const DBToDoLists = () => {
  return [
    {
      id: 1,
      title: 'Lista zakupów',
      url: 'lista-zakupow',
      prices: true,
      items: [
        {
          id: 1,
          name: 'Chleb',
          checked: false,
          price: 0,
        },
        {
          id: 2,
          name: 'Masło',
          checked: true,
          price: 0,
        }
      ]
    },
    {
      id: 2,
      title: 'Sprzątanie',
      url: 'sprzatanie',
      prices: false,
      items: [
        {
          id: 1,
          name: 'pokój',
          checked: false,
          price: null,
        },
        {
          id: 2,
          name: 'salon',
          checked: true,
          price: null,
        },
        {
          id: 3,
          name: 'garaż',
          checked: true,
          price: null,
        }
      ]
    }
  ]
}

export const DBMyCookbook = () => {
  return [
    {
      id: 1,
      title: 'Chleb na wychodzenie',
      url: 'chleb-na-wychodzenie',
      prepare_time: '15 min',
      servings: '26',
      calories: '150',
      protein: '5g',
      carbohydrates: '5g',
      fat: '5g',
      ingrediens_info: 'na foremkę 24 x 12 cm',
      ingrediens: {
        main: [
          '1 szklanka mąki kokosowej',
          '5 łyżek mielonej babki płesznik',
          '2 łyżki mąki z orzechów laskowych lub migdałowej',
          '1/2 szklanki siemia lnianego',
          '1/2 szklanki nasion słonecznika',
          '1/2 szklanki pestek dyni',
          '1/3 szklanki orzechów laskowych',
          '1/3 szklanki ziaren babki płesznik',
          '4 jajka',
          '1 łyżeczka soli',
          '3 łyżeczki oleju kokosowego',
          'zioła prowansalskie, bazylia, kumin'
        ],
        marinate: [],
        sause: []
      },
      prepering_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://picsum.photos/id/237/200/300',
      source: 'dieta warzywno-owocowa dr Ewy Dąbrowskiej&reg; przepisy na wychodzenie; Beata Anna Dąbrowska, Paulina Borkowska'
    },
    {
      id: 2,
      title: 'Kurczak kung pao',
      url: 'kurczak-kung-pao',
      prepare_time: '15 min',
      servings: '26',
      calories: '150',
      protein: '5g',
      carbohydrates: '5g',
      fat: '5g',
      ingrediens_info: '',
      ingrediens: {
        main: [
          '30 dag filetu z piersi kurczaka',
          '1 czerwona papryka',
          '1 cukinia',
          '4 suszone papryczki chili',
          '1/2 szklanki nieosolonych orzeszków ziemnych',
          '2 ząbki czosnku',
          '2 cm imbiru',
          '4 cebulki dymki',
          '2 łyżki oleju',
          '1 łyżka mąki kukurydzianej'
        ],
        marinate: [
          '2 łyżki ciemnego sosu sojowego',
          '2 łyżeczki octu winnego'
        ],
        sause: [
          '2 łyżeczki jasnego sosu sojowego',
          '1 łyżka sosu hoishin',
          '1 łyżeczka oleju sezamowego',
          '1 łyżka ciemnego octu ryżowego',
          '2 łyżeczki mąki kukurydzianej',
          '2 łyżeczki cukru',
          '1 łyżeczka czarnego pieprzu'
        ]
      },
      prepering_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://picsum.photos/id/237/200/300',
      source: 'Dania z woka; Wyd. Olesiejuk'
    }
  ]
}
