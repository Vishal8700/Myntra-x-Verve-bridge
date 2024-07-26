import React from 'react';
import all_product from '../assets/all_product';
// import './MenBody.css'; // Import the separate CSS file
import {offerImg } from '../body/imgUrl'
import men_banner from '../assets/banner_mens.png';


function MenBody() {
  // Filter products for the 'men' category
  const menProducts = all_product.filter(product => product.category === 'men');

  return (
    <div className='men-body'>
      
      <img
        className='banner-image'
        src={men_banner}
        alt='banner'
      />

      {/* Offer Image */}
      <img
        className='offer-image'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        alt='offer'
      />

      {/* Products Display */}
      <div className='product-grid'>
        {menProducts.map(product => (
          <div key={product.id} className='product-card'>
            <img
              src={product.image}
              className='product-image'
              alt={product.name}
            />
            <div className='product-details'>
              <h5>{product.name}</h5>
              <p>
                <span className='old-price'><s>${product.old_price}</s></span> ${product.new_price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Another Offer Image */}
      <img
        className='offer-image'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
        alt='offer'
      />

      <div className='col-12 p-2'>
        {offerImg.map(val => (
          <img key={val.img} src={val.img} className='col-2' alt='offer' />
        ))}
      </div>
      
    </div>
  );
}

export default MenBody;
