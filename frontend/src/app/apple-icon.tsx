import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg
        viewBox="0 0 40 40"
        width={180}
        height={180}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="40" height="40" />
        {/* Diamond frame */}
        <rect x="5" y="5" width="30" height="30" rx="2" stroke="#C9A84C" strokeWidth="1.2" fill="none" transform="rotate(45 20 20)" />
        {/* Scissors blades */}
        <circle cx="13" cy="15" r="3" stroke="#C9A84C" strokeWidth="1.3" fill="none" />
        <circle cx="13" cy="25" r="3" stroke="#C9A84C" strokeWidth="1.3" fill="none" />
        <line x1="15.8" y1="16.8" x2="28" y2="22" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="15.8" y1="23.2" x2="28" y2="18" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    { ...size },
  );
}
