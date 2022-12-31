import { SvgXml } from 'react-native-svg';

interface LockProps {
  color: string;
}

export function Lock({ color }: LockProps) {
  const markup = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_35_16)">
  <path d="M15.4444 8.65625H4.55556C3.69645 8.65625 3 9.38888 3 10.2926V16.0199C3 16.9236 3.69645 17.6563 4.55556 17.6563H15.4444C16.3036 17.6563 17 16.9236 17 16.0199V10.2926C17 9.38888 16.3036 8.65625 15.4444 8.65625Z" stroke=${
    color ? color : '#2d2d2d'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6 8.6563V5.4563C6 4.39543 6.42143 3.37802 7.17157 2.62787C7.92172 1.87773 8.93913 1.4563 10 1.4563C11.0609 1.4563 12.0783 1.87773 12.8284 2.62787C13.5786 3.37802 14 4.39543 14 5.4563V8.6563" stroke=${
    color ? color : '#2d2d2d'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_35_16">
  <rect width="20" height="18" fill="white" transform="translate(0 0.556274)"/>
  </clipPath>
  </defs>
  </svg>
  `;

  return <SvgXml xml={markup} />;
}
