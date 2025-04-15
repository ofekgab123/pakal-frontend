import React from 'react';
import BlogHeroSection from '../sections/sections-blog/BlogHeroSection';
import ReviewsSection from '../sections/ReviewSection';
import OrderHeroSecetion from '../sections/OrderHeroSecetion';



const OrderPage = () => {
    return (
<>
<OrderHeroSecetion  vacations={[
  
    {
        id: 1,
        title: 'וילה בגליל העליון',
        img: '/free-contact-bg.jpg',
        area: 'צפון',
        eligible: true,
        breakfastIncluded: true,
        hasPool: true,
        category: 'חופשות',
        rating: 4.7,
        reviews: 123,
        price: 1200
    }
      ,{
      id: 2,
      title: 'וילה בשחר ',
      img: '/Firekro.png',
      area: 'דרום',
      eligible: true,
      breakfastIncluded: true,
      hasPool: false,
      category: 'חופשות',
      rating: 4.7,
      reviews: 123,
      price: 1200
    },

  ]}/>
</>
    )}
  export default OrderPage;
  