import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <hr />
                <div className='section'>
                    <p className='section-title'>ONLINE SHOPPING</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Home & Living</p>
                    <p>Beauty</p>
                </div>

                <div className='section'>
                    <p className='section-title'>USEFUL LINKS</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>T&C</p>
                    <p>Terms of Use</p>
                    <p>Track Order</p>
                    <p>Shipping</p>
                   
                </div>
                <div className='section'>
                <p className='section-title'>SERVICES</p>

                <p>Cancellation</p>
                    <p>Return</p>
                    <p>Whitehat</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                    <p>Site Map</p>

                </div>

                <div className='section'>
                    <p className='section-title'>EXPERIENCE MYNTRA APP ON MOBILE</p>
                    <div className='app-links'>
                        <a href='https://play.google.com/store/apps/details?id=com.myntra.android&hl=en_IN&gl=US'>
                            <img
                                src='https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png'
                                alt='Google Play'
                            />
                        </a>
                        <a href='https://apps.apple.com/in/developer/myntra-com/id784440582'>
                            <img
                                src='https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png'
                                alt='Apple Store'
                            />
                        </a>
                    </div>
                    <p className='section-title' style={{ marginTop: '20px' }}>KEEP IN TOUCH</p>
                    <div className='social-links'>
                        <a href='https://www.facebook.com/myntra/'>
                            <FacebookIcon style={{ fontSize: '35px' }} />
                        </a>
                        <a href='https://twitter.com/myntra?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'>
                            <TwitterIcon style={{ fontSize: '35px' }} />
                        </a>
                        <a href='https://www.youtube.com/channel/UCMlJjMRSKaUQhXQ_9XjCGpg'>
                            <YouTubeIcon style={{ fontSize: '35px' }} />
                        </a>
                        <a href='https://www.instagram.com/myntra/?hl=en'>
                            <InstagramIcon style={{ fontSize: '35px' }} />
                        </a>
                    </div>
                </div>

                <div className='section guarantee'>
                    <div className='mb-3'>
                        <img
                            src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png'
                            alt='Original'
                        />
                        <p><b>100% ORIGINAL</b> guarantee for all products at myntra.com</p>
                    </div>
                    <div>
                        <img
                            src='https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png'
                            alt='Return within 30 days'
                        />
                        <p><b>Return within 30 days</b> of receiving your order</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default Footer;
