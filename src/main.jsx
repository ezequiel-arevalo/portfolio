import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import '@/assets/css/styles.css';
import App from './App.jsx';
import './i18n.js';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
