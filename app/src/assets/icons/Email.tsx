import { SvgXml } from 'react-native-svg';

interface EmailProps {
  color?: string;
}

export function Email({ color }: EmailProps) {
  const markup = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.6 3.50818H16.4C17.28 3.50818 18 4.18858 18 5.02018V14.0922C18 14.9238 17.28 15.6042 16.4 15.6042H3.6C2.72 15.6042 2 14.9238 2 14.0922V5.02018C2 4.18858 2.72 3.50818 3.6 3.50818Z" stroke=${
    color ? color : '#2d2d2d'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18 5.59631L10 10.6363L2 5.59631" stroke=${
    color ? color : '#2d2d2d'
  } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  return <SvgXml xml={markup} />;
}
