import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import Hero from './Hero';
import Products from './Products';
import Feature from './Feature';
import Footer from './Footer';
import {productData , productDataTwo} from './Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading="Choose Your Favourite" data={productData}/>
      <Feature />
      <Products heading="Sweet Treats for You" data={productDataTwo}/>
      <Footer></Footer>
    </Router>
  );
}

export default App;
