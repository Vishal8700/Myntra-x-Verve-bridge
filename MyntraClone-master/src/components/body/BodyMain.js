import React, { useState, useEffect } from 'react';
import { brandImg, imgArr, offerImg } from './imgUrl';
import Timer from './Timer';
import { useLocation } from 'react-router-dom';
import './BodyMain.css';

function BodyMain() {
  const location = useLocation();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
      setTimeout(() => {
        setMessage('');
      }, 3000); // Hide message after 3 seconds
    }
  }, [location.state]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    'https://www.bandhanbank.com/sites/default/files/2021-04/Bandhan_Myntra_Offer_Banner_02.jpg',
    'https://freekaamaal.com/images/store_desc_images/1511867204.jpg',
    'https://checknshop.in/wp-content/uploads/2021/10/myntra-sale.jpg',
    'https://www.aachho.com/cdn/shop/files/banner-1_1400x.png?v=1702707769',
    'https://www.oneweindia.com/cdn/shop/files/1_affb8b91-b59f-4ac3-8414-8fca5a248aa5.png?v=1704438271&width=1100'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className='body-main'>
      <Timer />

      {message && (
        <div className='popup-message'>
          <p>{message}</p>
        </div>
      )}

      {/* Image Slider */}
      <div className='slider'>
        <img
          src={banners[currentIndex]}
          alt='banner'
          className='slider-img'
        />
      </div>

      {/* Offer Images */}
      <img
        className='offer-img'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        alt='offer'
      />

      <div className='img-grid'>
        {imgArr.map((val, index) => (
          <img key={index} src={val.img} className='img-grid-item' alt='carousel' />
        ))}
      </div>

      <img
        className='offer-img'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
        alt='offer'
      />

      <div className='img-grid'>
        {offerImg.map((val, index) => (
          <img key={index} src={val.img} className='img-grid-item' alt='offer' />
        ))}
      </div>

      <img
        className='offer-img'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        alt='offer'
      />

      <div className='img-grid'>
        {imgArr.map((val, index) => (
          <img key={index} src={val.img} className='img-grid-item' alt='carousel' />
        ))}
      </div>

      <img
        className='offer-img'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/3e80c999-94aa-4b59-befb-e49a33c474991646993148082-Most-Loved-Brands.jpg'
        alt='offer'
      />

      <div className='img-grid'>
        {brandImg.map((val, index) => (
          <img key={index} src={val.img} className='img-grid-item' alt='brand' />
        ))}
      </div>
    </div>
  );
}

export default BodyMain;
