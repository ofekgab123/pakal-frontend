PackageBuilderSection

items: [
  { title: string, link: string, img: string }
]
startIndex: number
onNext: function
onPrev: function


use:
<PackageBuilderSection
  items={[
    { title: 'חבילה 1', link: '/p1', img: '/images/1.jpg' },
    { title: 'חבילה 2', link: '/p2', img: '/images/2.jpg' },
    ...
  ]}
  startIndex={index}
  onNext={() => setIndex(i => i + 1)}
  onPrev={() => setIndex(i => i - 1)}
/>








Slider

logos: [string], // רשימת URL של תמונות
imageHeight?: number
imageWidth?: number | string

use:
<PartnersSlider
  logos={[
    '/logo1.png',
    '/logo2.png',
    ...
  ]}
  imageHeight={60}
  imageWidth="auto"
/>







UpdatesSection

items: [
  { img: string, title: string, description: string }
]
title?: string
subtitle?: string

use:
<UpdatesSection
  title="עדכונים אחרונים"
  subtitle="חדשות ועדכונים"
  items={[
    {
      img: '/news1.jpg',
      title: 'מבצע חדש',
      description: 'החל ממחר ניתן להזמין...',
    },
    ...
  ]}
/>





ProductPAge-ProductFAQ


featureGroups: [
  { label: string, available: boolean }
]

collapses: [
  {
    image: string,          // תמונה עגולה להצגה לפני הפתיחה
    title: string,          // כותרת קצרה של הפריט
    description: string,    // תיאור קצר לפני פתיחה
    details: string,        // תוכן מלא שמופיע לאחר פתיחה
    fullImage?: string      // תמונה נלווית (בגדול) שמופיעה בתוך הקולאפס (לא חובה)
  }
]

title?: string             // כותרת של הסקשן כולו


use:
<ProductFAQ
  title="תכונות ודגשים"
  featureGroups={[
    { label: 'Wi-Fi חינם', available: true },
    { label: 'חניה', available: false },
    { label: 'בריכה פרטית', available: true },
  ]}
  collapses={[
    {
      image: '/villa-thumb.jpg',
      title: 'וילה בגליל העליון',
      description: 'בריכה, נוף, ג׳קוזי',
      details: 'וילה יוקרתית עם בריכה פרטית וג׳קוזי...',
      fullImage: '/villa-full.jpg',
    },
    {
      image: '/spa-thumb.jpg',
      title: 'ספא מפנק',
      description: 'עיסוי וטיפול זוגי',
      details: 'חבילת עיסוי מושלמת עם ג׳קוזי וטיפול זוגי...',
      fullImage: '/spa-full.jpg',
    },
  ]}
/>





<ReviewsSection
  title="ביקורות על השירות"
  reviews={[
    {
      avatar: '/avatars/user1.jpg',
      name: 'רות כהן',
      rating: 5,
      text: 'חוויה מדהימה, השירות היה מצוין והחדרים נקיים ונעימים.',
    },
    {
      avatar: '/avatars/user2.jpg',
      name: 'יוסי לוי',
      rating: 4,
      text: 'המקום היה מקסים, אבל האוכל יכול להיות יותר טוב.',
    },
    ...
  ]}
/>




order

<OrderHeroSecetion
  vacations={[
    {
      id: 1,
      title: 'וילה בגליל העליון',
      img: '/villa.jpg',
      area: 'צפון',
      eligible: true,
      breakfastIncluded: true,
      hasPool: true,
      category: 'חופשות',
      rating: 4.7,
      reviews: 123,
      price: 1200
    },
    // ...עוד חופשות
  ]}
/>



payment: {
  cardName: string,           // שם בעל הכרטיס
  cardNumber: string,         // מספר כרטיס (מוסתר לפני שליחה/מוצפן)
  expiry: string,             // תוקף MM/YY
  cvv: string                 // קוד אימות
}








npm i 
localhost:3000