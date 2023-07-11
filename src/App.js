import logo from './logo.svg';
import {useState } from 'react';
import './App.css';
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
  const [menu, setMenu] = useState('Minuman');
  return (
    <div className="p-8 lg:max-w-5xl mx-auto">
      <Header menu={menu} setMenu={setMenu}/>
      <ProductList menu={menu}/>
    </div>
  );
}

export default App;
