import React from 'react';
import BlogHeroSection from '../sections/sections-blog/BlogHeroSection';
import ReviewsSection from '../sections/ReviewSection';


const BlogPage = () => {
    return (
<>
  <BlogHeroSection/>
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
  export default BlogPage;
  