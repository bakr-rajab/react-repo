import React from 'react'

export default function Product({product}) {
    return (
        <div>
             <div className="card" key={product._id}>
            
            <a href={`/products/${product._id}`}>
              <img className="medium" src={`images/${product.img}`} alt="product image" />
            </a>
            <div className="card-body">
              <a href={`/products/${product._id}`}>
                <h2>{product.name}</h2>
              </a>
              <div className="rating">
                <span>
                  <i className="fa fa-star"></i>
                </span>
                <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>               </span>
              </div>
              <div className="price">
                  ${product.price}
              </div>
            </div>
            
          </div>
        </div>
    )
}
