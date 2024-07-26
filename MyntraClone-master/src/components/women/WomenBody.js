import React from 'react';
import all_product from '../assets/all_product';
import {imgWomenOfferArr} from '../body/imgUrl'


function WomenBody() {
  const womenProducts = all_product.filter(product => product.category === 'women');

  return (
    <div className='women-body'>
      <img
        className='banner-image'
        src='https://th.bing.com/th/id/R.e2fae4e49ec18f2bbaa59f1f65a61d41?rik=pUOdckD40d9LRA&riu=http%3a%2f%2fnehabendre.com%2fbanner%2fWomen%27s-Day+00-01-01.jpg&ehk=9MtIWP%2bvP3i%2fte9aNmiyk665HisUyguxBXgIcil28RE%3d&risl=&pid=ImgRaw&r=0'
        alt='banner'
      />

      <img
        className='offer-image'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        alt='offer'
      />

      <div className='product-grid'>
        {womenProducts.map(product => (
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

      <img
        className='offer-image'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
        alt='offer'
      />

    <div className='col-12 p-2'>
      {imgWomenOfferArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>
    <br/>

    </div>
    


  );
}

export default WomenBody;