/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Product from './../src/components/Product'
import {useEffect,useState} from 'react'
function App() {
  const [products,setProducts]=useState()

  const fetchData= () =>{
      return fetch("http://localhost:8080/products")
            .then((response) => response.json())
            .then((data) => {
              console.log('data', data)
              setProducts(data)
            })} 
  
  useEffect(() =>{ 
    fetchData()
  },[])
  
  return ( 
    
    <div className="grid-container">
      <header className="row">
        <div className="left">
          <a className="brand" href="#">El-Nile</a>
        </div>
        <div className="right">
          <a href="#">Cart</a>
          <a href="#">signed</a>
        </div>
      </header>
      <main>
        <div className="row center">
         {!products? "product not found ": products.map((product) =>(
           <Product product={product} key={product._id}/>
         ))} 
          
        </div>
      </main>
      <footer>All rights reserved.</footer>
    </div>
 

  );
}

export default App;
