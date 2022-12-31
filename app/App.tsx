import { useFonts } from 'expo-font';
import Main from './src/Main';

export default function App() {
  const [isFontLoaded] = useFonts({
    'Manrope-300': require('./src/assets/fonts/Manrope-Light.ttf'),
    'Manrope-400': require('./src/assets/fonts/Manrope-Regular.ttf'),
    'Manrope-500': require('./src/assets/fonts/Manrope-Medium.ttf'),
    'Manrope-700': require('./src/assets/fonts/Manrope-Bold.ttf'),
    'Manrope-800': require('./src/assets/fonts/Manrope-ExtraBold.ttf'),
  });

  if (!isFontLoaded) {
    return null;
  }

  return <Main />;
}
