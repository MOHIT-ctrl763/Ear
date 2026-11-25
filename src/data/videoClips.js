import { heroExact, budsProHighRes, airProHighRes, gamexHighRes } from './products';

/**
 * Super-Admin ready video clips configuration.
 * Replace this static array with a backend/CMS API response when connecting Super Admin.
 */
export const defaultVideoClips = [
  {
    id: 'clip-01',
    order: 1,
    tag: 'Unboxing',
    title: 'rocKo Signature Reveal',
    subtitle: 'Two-tone pearl & matte obsidian finish',
    duration: '0:15',
    poster: heroExact,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartwatch-and-wireless-earbuds-42817-large.mp4',
  },
  {
    id: 'clip-02',
    order: 2,
    tag: 'Studio ANC',
    title: 'Pure Acoustic Silence',
    subtitle: '-44dB active noise cancellation in action',
    duration: '0:18',
    poster: airProHighRes,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dj-playing-music-at-a-nightclub-4340-large.mp4',
  },
  {
    id: 'clip-03',
    order: 3,
    tag: 'Lifestyle',
    title: 'All-Day Urban Flow',
    subtitle: 'Featherweight 3.4g ergonomic comfort',
    duration: '0:12',
    poster: budsProHighRes,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-man-listening-to-music-with-headphones-42592-large.mp4',
  },
  {
    id: 'clip-04',
    order: 4,
    tag: 'Esports 24ms',
    title: 'rocKo GameX Chroma',
    subtitle: 'Zero-latency competitive spatial audio',
    duration: '0:14',
    poster: gamexHighRes,
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-gamer-playing-in-a-dark-room-with-neon-lights-42577-large.mp4',
  },
];
