import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { BrowserRouter } from 'react-router-dom'; // <--- Import this
import App from './App';
import '../src/styles/index.css'; // Or your main CSS file
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <>
      <App />
      <Footer/>
    </>
    </BrowserRouter>
      <footer/>
  </React.StrictMode>
);