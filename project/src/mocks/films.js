const films = [
  {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Sorry, you will see it later...',
    rating: 1.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton'],
    runTime: 101,
    genre: 'Comedy',
    released: 2001,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Sorry, you will see it later...',
    rating: 2.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Edward Norton', 'Jude Law'],
    runTime: 102,
    genre: 'Crime',
    released: 2002,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Sorry, you will see it later...',
    rating: 4.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Willem Dafoe', 'Saoirse Ronan'],
    runTime: 104,
    genre: 'Drama',
    released: 2004,
    isFavorite: false,
  },
  {
    id: 5,
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
    previewImage: 'img/macbeth.jpg',
    backgroundImage: 'img/macbeth.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Sorry, you will see it later...',
    rating: 5.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 95,
    genre: 'Horror',
    released: 2005,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundImage: 'img/we-need-to-talk-about-kevin.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Sorry, you will see it later...',
    rating: 6.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Saoirse Ronan'],
    runTime: 96,
    genre: 'Kids & Family',
    released: 2006,
    isFavorite: false,
  },
  {
    id: 7,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: 'img/revenant.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Sorry, you will see it later...',
    rating: 7.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Jude Law', 'Saoirse Ronan'],
    runTime: 107,
    genre: 'Romance',
    released: 2007,
    isFavorite: false,
  },
  {
    id: 8,
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: 'img/johnny-english.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Sorry, you will see it later...',
    rating: 8.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton'],
    runTime: 108,
    genre: 'Sci-Fi',
    released: 2008,
    isFavorite: false,
  },
  {
    id: 9,
    name: 'Shutter Island',
    posterImage: 'img/shutter-island.jpg',
    previewImage: 'img/shutter-island.jpg',
    backgroundImage: 'img/shutter-island.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Sorry, you will see it later...',
    rating: 9.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 109,
    genre: 'Thrillers',
    released: 2009,
    isFavorite: false,
  },
  {
    id: 10,
    name: 'Pulp Fiction',
    posterImage: 'img/pulp-fiction.jpg',
    previewImage: 'img/pulp-fiction.jpg',
    backgroundImage: 'img/pulp-fiction.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Sorry, you will see it later...',
    rating: 10.0,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: ['Willem Dafoe', 'Saoirse Ronan'],
    runTime:110,
    genre: 'Comedy',
    released: 2010,
    isFavorite: false,
  },
  {
    id: 11,
    name: 'No Country for Old Men',
    posterImage: 'img/no-country-for-old-men.jpg',
    previewImage: 'img/no-country-for-old-men.jpg',
    backgroundImage: 'img/no-country-for-old-men.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 1.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 91,
    genre: 'Comedy',
    released: 2011,
    isFavorite: false,
  },
  {
    id: 12,
    name: 'Snatch',
    posterImage: 'img/snatch.jpg',
    previewImage: 'img/snatch.jpg',
    backgroundImage: 'img/snatch.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 2.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 92,
    genre: 'Crime',
    released: 2012,
    isFavorite: false,
  },
  {
    id: 13,
    name: 'Moonrise Kingdom',
    posterImage: 'img/moonrise-kingdom.jpg',
    previewImage: 'img/moonrise-kingdom.jpg',
    backgroundImage: 'img/moonrise-kingdom.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 3.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 93,
    genre: 'Documentary',
    released: 2013,
    isFavorite: false,
  },
  {
    id: 14,
    name: 'Seven Years in Tibet',
    posterImage: 'img/seven-years-in-tibet.jpg',
    previewImage: 'img/seven-years-in-tibet.jpg',
    backgroundImage: 'img/seven-years-in-tibet.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 4.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 94,
    genre: 'Drama',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 15,
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
    previewImage: 'img/midnight-special.jpg',
    backgroundImage: 'img/midnight-special.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 5.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 95,
    genre: 'Horror',
    released: 2015,
    isFavorite: false,
  },
  {
    id: 16,
    name: 'War of the Worlds',
    posterImage: 'img/war-of-the-worlds.jpg',
    previewImage: 'img/war-of-the-worlds.jpg',
    backgroundImage: 'img/war-of-the-worlds.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 6.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 96,
    genre: 'Kids & Family',
    released: 2016,
    isFavorite: false,
  },
  {
    id: 17,
    name: 'Dardjeeling Limited',
    posterImage: 'img/dardjeeling-limited.jpg',
    previewImage: 'img/dardjeeling-limited.jpg',
    backgroundImage: 'img/dardjeeling-limited.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 7.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 97,
    genre: 'Romance',
    released: 2017,
    isFavorite: false,
  },
  {
    id: 18,
    name: 'Orlando',
    posterImage: 'img/orlando.jpg',
    previewImage: 'img/orlando.jpg',
    backgroundImage: 'img/orlando.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 8.1,
    scoresCount: 440,
    director: 'Edward Norton',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 98,
    genre: 'Romance',
    released: 2018,
    isFavorite: false,
  },
  {
    id: 19,
    name: 'Mindhunter',
    posterImage: 'img/mindhunter.jpg',
    previewImage: 'img/mindhunter.jpg',
    backgroundImage: 'img/mindhunter.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Some description in progress...',
    rating: 9.1,
    scoresCount: 440,
    director: 'Wes Andreson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    runTime: 99,
    genre: 'Sci-Fi',
    released: 2019,
    isFavorite: true,
  },
];

export default films;