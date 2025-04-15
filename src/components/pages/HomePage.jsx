import React from 'react';
import HeroSection from '../sections/sections-home/HeroSectionHome';
import HowItWorksSection from '../sections/sections-home/HowItWorksSection';
import PackageBuilderSection from '../sections/sections-home/PackageBuilderSection';
import PickupBoardSection from '../sections/sections-home/PickupBoardSection';
import TestimonialsSection from '../sections/sections-home/TestimonialsSection';
import GallerySection from '../sections/sections-home/GallerySection';
import  { useState } from 'react';
import UpdatesSection from '../sections/sections-home/UpdateSection';


//test api timonials
const TestimonialsSectionFromUI = [
  {
    name: 'רונית כהן',
    role: 'מנהלת משאבי אנוש',
    image: '/images/ronit.png',
    rating: 5,
    text: 'חווית שירות נהדרת! ממליצה בחום.',
  },
  {
    name: 'דני לוי',
    role: 'מפקד מילואים',
    image: '/images/danny.png',
    rating: 4,
    text: 'עשו לנו חיים קלים. שירות אדיב ומהיר.',
  },
  {
    name: 'אורית ישראלי',
    role: 'סמנכ״לית תפעול',
    image: '/images/orit.png',
    rating: 5,
    text: 'הצוות פשוט אלופים. הלוואי שכל ספק היה כזה.',
  },
  {
    name: 'גיא ברוך',
    role: 'מנהל מערכות מידע',
    image: '/images/guy.png',
    rating: 5,
    text: 'מערכת נוחה, קלה לתפעול והכי חשוב – שקט תפעולי מלא!',
  },
];
//test api pro
const items = [
  {
    title: 'חבילת חופשה 1',
    link: '/product/1',
    img: 'https://via.placeholder.com/350x300',
  },
  {
    title: 'חבילת חופשה 2',
    link: '/product/2',
    img: 'https://via.placeholder.com/350x300',
  },
  {
    title: 'חבילת חופשה 3',
    link: '/product/3',
    img: 'https://via.placeholder.com/350x300',
  },
  {
    title: 'חבילת חופשה 4',
    link: '/product/4',
    img: 'https://via.placeholder.com/350x300',
  },
  {
    title: 'חבילת חופשה 5',
    link: '/product/5',
    img: 'https://via.placeholder.com/350x300',
  },
];


const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <PackageBuilderSection  items={items}
      startIndex={startIndex}
      onNext={() => setStartIndex((prev) => Math.min(prev + 1, items.length - 4))}
      onPrev={() => setStartIndex((prev) => Math.max(prev - 1, 0))}/>
      <PickupBoardSection />
      <TestimonialsSection Testimonials={TestimonialsSectionFromUI} />
      <GallerySection/>
      <UpdatesSection
  items={[
    {
      img: '/images/news1.jpg',
      title: 'מבצע חדש למילואימניקים',
      description: 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית...',
    },
    {
      img: '/images/news2.jpg',
      title: 'אירוע סגור לחברי הקהילה',
      description: 'אירוע ייחודי שיתקיים בתל אביב עבור משפחות הלוחמים.',
    },
    {
      img: '/images/news3.jpg',
      title: 'פתיחת מחזור הרשמה חדש',
      description: 'ההרשמה למחזור הבא של "פק"ל חופש" נפתחה כעת.',
    },
  ]}
/>


    </>
  );
};

export default Home;
