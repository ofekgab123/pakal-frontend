import React from 'react';
import ProductHeroSection from '../sections/sections-product/ProductHeroSection';
import ProductFAQ from '../sections/sections-product/ProductFAQSection';
import ReviewsSection from '../sections/ReviewSection';

const ProductPage = () => {
    return (
<>
  <ProductHeroSection/>
  <ProductFAQ title="תכונות ודגשים"
  collapses={[
    {
      image: '/watercolour-4817390_960_720.jpg',
      title: 'וילה בגליל העליון',
      description: 'בריכה, נוף, ג׳קוזי',
      details: 'וילה יוקרתית עם בריכה פרטית וג׳קוזי...',
      fullImage: '/watercolour-4817390_960_720.jpg',
    },
    {
      image: '/free-contact-bg.jpg',
      title: 'ספא מפנק',
      description: 'עיסוי וטיפול זוגי',
      details: 'חבילת עיסוי מושלמת עם ג׳קוזי וטיפול זוגי...',
      fullImage: '/free-contact-bg.jpg',
    },
  ]}
/>   
<ReviewsSection title="ביקורות על השירות"
  reviews={[
    {
      avatar: 'Firekro.png',
      name: 'רות כהן',
      rating: 5,
      text: 'חוויה מדהימה, השירות היה מצוין והחדרים נקיים ונעימים.',
    },
    {
      avatar: '/madison.png',
      name: 'יוסי לוי',
      rating: 4,
      text: 'המקום היה מקסים, אבל האוכל יכול להיות יותר טוב.',
    },

  ]} />
</>
    )}
  export default ProductPage;
  