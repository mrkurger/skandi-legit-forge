export interface Advertiser {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  size: 'square' | 'tall' | 'wide';
}

export const advertisers: Advertiser[] = [
  {
    id: '1',
    title: 'Oslo, Norge',
    subtitle: 'Skandinavisk hovedstad',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    href: '/search?location=oslo',
    size: 'wide'
  },
  {
    id: '2',
    title: 'Stockholm, Sverige',
    subtitle: 'Nordisk perle',
    imageUrl: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&h=800&fit=crop',
    href: '/search?location=stockholm',
    size: 'tall'
  },
  {
    id: '3',
    title: 'København, Danmark',
    subtitle: 'Hygge og wellness',
    imageUrl: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&h=600&fit=crop',
    href: '/search?location=copenhagen',
    size: 'square'
  },
  {
    id: '4',
    title: 'Bergen, Norge',
    subtitle: 'Fjord-byen',
    imageUrl: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=600&h=600&fit=crop',
    href: '/search?location=bergen',
    size: 'square'
  },
  {
    id: '5',
    title: 'Göteborg, Sverige',
    subtitle: 'Vestkysten',
    imageUrl: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=800&h=600&fit=crop',
    href: '/search?location=goteborg',
    size: 'wide'
  },
  {
    id: '6',
    title: 'Trondheim, Norge',
    subtitle: 'Historisk sjarm',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=800&fit=crop',
    href: '/search?location=trondheim',
    size: 'tall'
  },
  {
    id: '7',
    title: 'Malmö, Sverige',
    subtitle: 'Øresund-regionen',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
    href: '/search?location=malmo',
    size: 'square'
  },
  {
    id: '8',
    title: 'Aarhus, Danmark',
    subtitle: 'Kultur og velvære',
    imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=600&fit=crop',
    href: '/search?location=aarhus',
    size: 'square'
  },
  {
    id: '9',
    title: 'Stavanger, Norge',
    subtitle: 'Oljehovedstaden',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    href: '/search?location=stavanger',
    size: 'wide'
  },
  {
    id: '10',
    title: 'Helsinki, Finland',
    subtitle: 'Nordisk design',
    imageUrl: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=800&fit=crop',
    href: '/search?location=helsinki',
    size: 'tall'
  }
];