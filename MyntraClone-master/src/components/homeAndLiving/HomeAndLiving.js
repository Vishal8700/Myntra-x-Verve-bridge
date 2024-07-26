import React from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import './HomeAndLiving.css'; // Import CSS file

function HomeAndLiving() {
  return (
    <div className="home-and-living">
      <img
        className="home-and-living__banner-img"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/6/8/eff01060-f706-468d-b97c-95cdf43174f91528443826867-Desktop-Home-Banner.jpg"
        alt="banner"
      />
      <Typography variant="h3" className="home-and-living__welcome-message">
        NICE TO SEE YOU HERE, COME ON IN!
      </Typography>
      <div className="home-and-living__product-grid">
        <Card className="home-and-living__product-card">
          <CardMedia
            component="img"
            height="500"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563660020-bed.jpg"
            alt="Bed"
          />
        </Card>
        <Card className="home-and-living__product-card">
          <CardMedia
            component="img"
            height="500"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563782565-furnishings.jpg"
            alt="Furnishings"
          />
        </Card>
        <Card className="home-and-living__product-card">
          <CardMedia
            component="img"
            height="500"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563810789-art-n-decor.jpg"
            alt="Art and Decor"
          />
        </Card>
        <Card className="home-and-living__product-card">
          <CardMedia
            component="img"
            height="500"
            image="https://assets.myntassets.com/f_webp,w_350,c_limit,fl_progressive,dpr_2.0/assets/images/banners/2018/2/2/11517563866590-lamps.jpg"
            alt="Lamps"
          />
        </Card>
      </div>
    </div>
  );
}

export default HomeAndLiving;
