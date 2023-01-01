import { SvgXml } from 'react-native-svg';

interface PersonProps {
  color?: string;
}

export function Person({ color }: PersonProps) {
  const markup = `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_48_498)">
  <path d="M9.99998 9.4895C12.3012 9.4895 14.1666 7.81057 14.1666 5.7395C14.1666 3.66843 12.3012 1.9895 9.99998 1.9895C7.69879 1.9895 5.83331 3.66843 5.83331 5.7395C5.83331 7.81057 7.69879 9.4895 9.99998 9.4895Z" stroke=${
    color ? color : '#2d2d2d'
  } stroke-width="2"/>
  <path d="M14.1667 10.9895H14.46C15.0692 10.9897 15.6574 11.19 16.1141 11.553C16.5708 11.9159 16.8645 12.4164 16.94 12.9605L17.2658 15.3035C17.2952 15.5146 17.2742 15.7288 17.2045 15.9321C17.1348 16.1353 17.0178 16.3229 16.8614 16.4823C16.7049 16.6418 16.5126 16.7695 16.2971 16.8569C16.0817 16.9444 15.848 16.9895 15.6117 16.9895H4.38834C4.15199 16.9895 3.91834 16.9444 3.70288 16.8569C3.48742 16.7695 3.29509 16.6418 3.13866 16.4823C2.98222 16.3229 2.86525 16.1353 2.79551 15.9321C2.72578 15.7288 2.70487 15.5146 2.73418 15.3035L3.05918 12.9605C3.13476 12.4162 3.42869 11.9154 3.8857 11.5525C4.34272 11.1895 4.93132 10.9893 5.54084 10.9895H5.83334" stroke=${
    color ? color : '#2d2d2d'
  }  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <clipPath id="clip0_48_498">
  <rect width="20" height="18" fill="white" transform="translate(0 0.489502)"/>
  </clipPath>
  </defs>
  </svg>
  `;

  return <SvgXml xml={markup} />;
}
