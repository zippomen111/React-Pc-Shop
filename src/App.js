import React from 'react'
import { Routes, Route } from "react-router-dom"

import "./App.scss"
import { Header } from "./components/Header/Header"
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { Footer } from './components/Footer/Footer';

function App() {




  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
