// DiceBear HTTP API: free, no API key needed.
// The old avatars.dicebear.com/api/... URLs were shut down, so use api.dicebear.com.
const DICEBEAR_VERSION = '9.x';

const dicebearUrl = (style, seed) =>
  `https://api.dicebear.com/${DICEBEAR_VERSION}/${style}/svg?seed=${encodeURIComponent(seed)}`;

const STYLES = ['personas', 'avataaars', 'bottts', 'pixel-art'];

// Returns 8 avatar URLs: 2 of each style, each with a random seed.
export const generateAvatar = () =>
  STYLES.flatMap((style) =>
    Array.from({ length: 2 }, () => dicebearUrl(style, Math.random().toString(36).slice(2)))
  );
