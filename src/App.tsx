import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import theme from './global/theme';
// import { Dashboard } from './screens/Dashboard';
// import { Register } from './screens/Register';
import { RegisterAccount } from './screens/RegisterAccount';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <RegisterAccount />
    </ThemeProvider>
  );
}
