import React from 'react';
import all_product from '../assets/all_product';
import './KidsBody.css'; // Import the separate CSS file
import { imgKidsArr } from '../body/imgUrl'

function KidsBody() {
  // Filter products for the 'kids' category
  const kidsProducts = all_product.filter(product => product.category === 'kid');

  return (
    <div className='kids-body'>
      {/* Banner Image */}
      <img
        className='banner-image'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/12/7/bc993d6c-2cf7-4c5d-b20c-d8cddff8caee1638869622654-Cutecumber_Desk_Banner.jpg'
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
        {kidsProducts.map(product => (
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
        {imgKidsArr.map(val => (
          <img src={val.img} className='col-2' alt='shradda' />
        ))}
      </div>
      <br/>
    </div>
  );
}

export default KidsBody;
