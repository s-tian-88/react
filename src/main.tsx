import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// redux
import { Provider } from 'react-redux';
import { configureStore } from './redux/store.ts';

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <Provider store={configureStore()}>
        <App />
    </Provider>
  </StrictMode>,
)
