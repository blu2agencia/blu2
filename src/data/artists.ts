export interface Artist {
  id: string;
  name: string;
  introText: string;
  aboutHeading: string;
  aboutText: string;
  desktopImage: string;
  mobileImage: string;
  slug: string;
  websiteUrl?: string;
  aboutImage?: string;
  heroImages?: string[];
}

export const artists: Artist[] = [
  {
    id: "miguel-bose",
    name: "Miguel Bosé",
    introText:
      "Con casi 50 años de trayectoria, el ícono regresó a los escenarios con Importante Tour. La exitosa gira que produjimos para llevarla por México, Latinoamérica y Estados Unidos con más de 75 shows.",
    aboutHeading: "Sobre Miguel Bosé",
    aboutText:
      "Uno de los artistas más emblemáticos del pop en español vendiendo más de 30 millones de discos  así como 70 sencillos que se han colocado en los primeros lugares de las listas de América Latina y Europa. Ganador del Latin Grammy, Premios Onda, Billboard Latino,  World Music Awards, Premio Tu Mundo, Persona del año de los Latin Grammy, Global Gift Philanthropist por mencionar solo algunos.",
    desktopImage: "/images/bose.jpg",
    mobileImage: "/images/bose-mobile.jpg",
    slug: "miguel-bose",
    websiteUrl: "https://miguelbose.com/",
    aboutImage: "/images/bose-2.jpg",
    heroImages: [
      "/images/boseC-1.jpg",
      "/images/boseC-2.jpg",
      "/images/boseC-3.jpg",
      "/images/boseC-4.jpg",
      "/images/boseC-5.jpg",
    ],
  },
  {
    id: "flans",
    name: "Flans",
    introText:
      "Somos la agencia de management y ventas de uno de los grupos más queridos y representativos del pop en español. Tras más de 200 shows nacionales e internacionales con Pandora en Inesperado Tour cierran este capítulo para iniciar la celebración de sus 40 años de carrera con un nuevo disco y una gira internacional.",
    aboutHeading: "Sobre Flans",
    aboutText:
      "Desde sus inicios, el grupo marcó una diferencia al combinar música, moda, coreografías y una imagen fresca que conectó de inmediato con toda una generación convirtiéndolas en un fenómeno juvenil. El álbum Flans (1985) superó las 100 mil copias vendidas y Luz y Sombra (1987) con éxitos como “Las Mil y Una Noches” y “Corre, corre” alcanzó disco de platino. ",
    desktopImage: "/images/flan.jpg",
    mobileImage: "/images/flan-mobile.jpg",
    slug: "flans",
    aboutImage: "/images/flans-2.jpg",
    heroImages: [
      "/images/flanC-1.jpg",
      "/images/flanC-2.jpg",
      "/images/flanC-3.jpg",
      "/images/flanC-4.jpg",
      "/images/flanC-5.jpg",
    ],
  },
];

export const getArtistBySlug = (slug: string): Artist | undefined => {
  return artists.find((artist) => artist.slug === slug);
};

export const getAllArtists = (): Artist[] => {
  return artists;
};
