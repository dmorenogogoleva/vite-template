import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
import Home from "./Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

import './index.css'

createRoot(document.getElementById('root')!).render(<StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </Provider>
</StrictMode>)
