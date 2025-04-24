import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element with id "root" not found.');
  // Create a fallback element if root is not found
  const fallbackElement = document.createElement('div');
  fallbackElement.id = 'root';
  document.body.appendChild(fallbackElement);
  
  // Render to the fallback element
  createRoot(fallbackElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}