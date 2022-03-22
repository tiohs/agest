import { ThemeProvider } from 'styled-components';

import theme from './global/theme';
import { Dashboard } from './screens/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
