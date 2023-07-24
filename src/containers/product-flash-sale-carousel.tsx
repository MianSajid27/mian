import Carousel from '@components/ui/carousel/carousel';
import ProductCard from '@components/product/product-card';
import SectionHeader from '@components/common/section-header';
import ProductCardGridLoader from '@components/ui/loaders/product-card-grid-loader';
import { useFlashSaleProductsQuery } from '@framework/product/get-all-flash-sale-products';
import Alert from '@components/ui/alert';
import { SwiperSlide } from 'swiper/react';
import dynamic from 'next/dynamic';
const Countdown = dynamic(() => import('react-countdown'), { ssr: false });

interface ProductsProps {
  sectionHeading?: string;
  className?: string;
  date?: any;
}

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    // Render a completed state
    return <span>Time Over!</span>;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center space-s-1.5 md:space-s-2.5">
        <div className="text-heading text-10px md:text-xs text-center uppercase">
          <span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
            {days}
          </span>
          days
        </div>
        <div className="text-heading text-10px md:text-xs text-center uppercase">
          <span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
            {hours}
          </span>
          hours
        </div>
        <div className="text-heading text-10px md:text-xs text-center uppercase">
          <span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
            {minutes}
          </span>
          mins
        </div>
        <div className="text-heading text-10px md:text-xs text-center uppercase">
          <span className="bg-heading rounded-md text-white text-xs md:text-sm w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mb-1">
            {seconds}
          </span>
          secs
        </div>
      </div>
    );
  }
};

const breakpoints = {
  '1720': {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  '1400': {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  '1025': {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  '768': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '500 ': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '0': {
    slidesPerView: 3,
    spaceBetween: 12,
  },
};
// const Categories = [

//   {
//   id:1,
//   slug:1,
//   image: {
 
     
      
//     original:   "/assets/images/products/p-10-m.png",
 
//       width: 1770,
//       height: 780,
  

// },
//     name:"NIKE Shoes",
//     description:"NIKE 2020 Black White is a clean and....",
//     price:15.00,
//   },
//   {
//     id:2,
//     slug:2,
//     image: { 
//       original:   "/assets/images/products/p-12-m.png",
   
//         width: 1770,
//         height: 780,
//   },
//     name:"Wayfarer Sunglasses",
//     description:"Our optical engineer developed the..",
//     price:18.00,
    
  
//   },
//   {
//     id:3,
//     slug:3,
//     image: {
 
     
      
//       original:   "/assets/images/products/p-14-m.png",
   
//         width: 1770,
//         height: 780,
    
  
//   },
//     name:"Hermes Cartlon London",
//     description:"  Off-White self-striped knitted midi A",
//     price:15.00,
//   },
//   {
//     id:3,
//     slug:3,
//     image: {
 
     
      
//       original:   "/assets/images/products/p-16-m.png",
   
//         width: 1770,
//         height: 780,
    
  
//   },
//     name:"Armani Wide-Leg Trousers",
//     description:"Monochrome elegance. Made with a....",
//     price:12.00,
//   },
//   {
//     id:3,
//     slug:3,
//     image: {
 
     
      
//       original:   "/assets/images/products/p-24-m.png",
   
//         width: 1770,
//         height: 780,
    
  
//   },
//     name:"NIKE Shoes",
//     description:"NIKE 2020 Black White is a clean and....",
//     price:15.00,
//   },
//   {
//     id:3,
//     slug:3,
   
//     image: {
 
     
      
//       original:   "/assets/images/products/p-8.png",
   
//         width: 1770,
//         height: 780,
    

//   },
//     name:"Gucci Cartlon UK",
//     description:"Knitted midi A-line dress,...",
//     price:14.99,
//   },
//   {
//     id:3,
//     slug:3,
//     image: {
 
     
      
//       original:   "/assets/images/products/p-30-m.png",
   
//         width: 1770,
//         height: 780,
    
  
//   },
//     name:"Tissot Classic",
//     description: "The new-model Submariner now fea",
//     price:600.00,
//   },
//   {
//     id:3,
//     slug:3,
//     image: {
 
     
      
//       original:   "/assets/images/products/p-25-m.png",
   
//         width: 1770,
//         height: 780,
    
  
//   },
//     name:"Wayfarer Sunglasses",
//     description:"Our optical engineer developed the..",
//     price:15.00,
  
//   },
//   {
//     id:1,
//     slug:1,
//     image: {
   
       
        
//       original:   "/assets/images/products/p-3-m.png",
   
//         width: 1770,
//         height: 780,
    
  
//   },
//       name:"NIKE Shoes",
//       description:"NIKE 2020 Black White is a clean and....",
//       price:15.00,
//     },
  
  
//   ]
const Categories = [

  {
  id:1,
  slug:1,
  image: {
 
     
      
    original:   "/assets/images/chawk/1.webp",
 
      width: 1770,
      height: 780,
  

},
    name:"NIKE Shoes",
    description:"NIKE 2020 Black White is a clean and....",
    price:15.00,
  },
  {
    id:2,
    slug:2,
    image: { 
      original:   "/assets/images/contom/new/1.webp",
   
        width: 1770,
        height: 780,
  },
    name:"Wayfarer Sunglasses",
    description:"Our optical engineer developed the..",
    price:18.00,
    
  
  },
 
  {
    id:3,
    slug:3,
    image: {
 
     
      
      original:   "/assets/images/contom/new/2.webp",
   
        width: 1770,
        height: 780,
    
  
  },
    name:"Armani Wide-Leg Trousers",
    description:"Monochrome elegance. Made with a....",
    price:12.00,
  },
  {
    id:3,
    slug:3,
    image: {
 
     
      
      original:   "/assets/images/contom/new/3.webp",
   
        width: 1770,
        height: 780,
    
  
  },
    name:"NIKE Shoes",
    description:"NIKE 2020 Black White is a clean and....",
    price:15.00,
  },
  {
    id:3,
    slug:3,
   
    image: {
 
     
      
      original:   "/assets/images/contom/new/4.webp",
   
        width: 1770,
        height: 780,
    

  },
    name:"Gucci Cartlon UK",
    description:"Knitted midi A-line dress,...",
    price:14.99,
  },
  {
    id:3,
    slug:3,
    image: {
 
     
      
      original:   "/assets/images/contom/new/5.webp",
   
        width: 1770,
        height: 780,
    
  
  },
    name:"Tissot Classic",
    description: "The new-model Submariner now fea",
    price:600.00,
  },
  {
    id:3,
    slug:3,
    image: {
 
     
      
      original:   "/assets/images/contom/new/6.webp",
   
        width: 1770,
        height: 780,
    
  
  },
    name:"Wayfarer Sunglasses",
    description:"Our optical engineer developed the..",
    price:15.00,
  
  },
  {
    id:1,
    slug:1,
    image: {
   
       
        
      original:   "/assets/images/contom/new/7.webp",
   
        width: 1770,
        height: 780,
    
  
  },
      name:"NIKE Shoes",
      description:"NIKE 2020 Black White is a clean and....",
      price:15.00,
    },
  
  
  ]
const ProductsFlashSaleCarousel: React.FC<ProductsProps> = ({
  sectionHeading = 'text-flash-sale',
  className = 'mb-12 md:mb-14 xl:mb-16',
  date,
}) => {
  // const { data, isLoading, error } = useFlashSaleProductsQuery({
  //   limit: 10,
  // });
  console.log(Categories,'sdkajdfhaskjfhaskf')
  return (
    <div className={`${className} pt-5 md:pt-6 lg:pt-7 pb-5 lg:pb-7s  `}>
      <div className="flex justify-between items-center flex-wrap mb-5 md:mb-6">
        <SectionHeader sectionHeading={sectionHeading} className="mb-0" />
        {date && (
          <Countdown date={date} intervalDelay={1000} renderer={renderer} />
        )}
      </div>
      {/* {error ? (
        <Alert message={error?.message} />
      ) : ( */}
        <Carousel
          autoplay={true}
          breakpoints={breakpoints}
          buttonClassName="-mt-2 sm:-mt-[5.5rem] md:-mt-28"
        >
          {Categories?.productFlashSellGridTwo?.length
            ? Array.from({ length: 10 }).map((_, idx) => (
                <ProductCardGridLoader
                  key={idx}
                  uniqueKey={`flash-sale-${idx}`}
                />
              ))
            : Categories?.map((Categories,idx:any) => (
                <SwiperSlide key={`Categories--key-${Categories.id}`}>
                  <ProductCard
                    product={Categories}
                    imgWidth={324}
                    imgHeight={324}
                    index={idx}
                    variant="gridSlim"
                  />
                </SwiperSlide>
              ))}
        </Carousel>
      {/* )} */}
    </div>
  );
};

export default ProductsFlashSaleCarousel;
// import IconCard from '@components/common/icon-card';
// import SectionHeader from '@components/common/section-header';
// import Carousel from '@components/ui/carousel/carousel';
// import CardIconLoader from '@components/ui/loaders/card-icon-loader';
// import { useCategoriesQuery } from '@framework/category/get-all-categories';
// import { ROUTES } from '@utils/routes';
// import Alert from '@components/ui/alert';
// import { SwiperSlide } from 'swiper/react';
// // import bags from "/assets/images/category/bags.jpg";
// // import man from "../../pwa.png";
// // import kid from "../../pwa.png";
// interface CategoriesProps {
//   sectionHeading: string;
//   className?: string;
// }

// const breakpoints = {
//   '1720': {
//     slidesPerView: 7,
//     spaceBetween: 20,
//   },
//   '1400': {
//     slidesPerView: 7,
//     spaceBetween: 28,
//   },
//   '1025': {
//     slidesPerView: 6,
//     spaceBetween: 28,
//   },
//   '768': {
//     slidesPerView: 4,
//     spaceBetween: 20,
//   },
//   '500 ': {
//     slidesPerView: 4,
//     spaceBetween: 20,
//   },
//   '0': {
//     slidesPerView: 3,
//     spaceBetween: 12,
//   },
// };
// const Categories = [

// {
// id:1,
// slug:1,
//   icon:"/assets/images/products/p-1.png",
 

// },
// {
//   id:2,
//   slug:2,
//   icon:"/assets/images/products/p-2.png"
 

// },
// {
//   id:3,
//   slug:3,
//   icon:"/assets/images/products/p-3.png",


// },
// {
//   id:3,
//   slug:3,
//   icon:"/assets/images/products/p-4.png",


// },
// {
//   id:3,
//   slug:3,
//   icon:"/assets/images/products/p-5.png",


// },
// {
//   id:3,
//   slug:3,
//   icon:"/assets/images/products/p-6.png",


// },
// {
//   id:3,
//   slug:3,
//   icon:"/assets/images/products/p-7.png",


// },
// {
//   id:3,
//   slug:3,
//   icon:"/assets/images/products/p-8.png",


// },



// ]
// const CategoryBlockIcon: React.FC<CategoriesProps> = ({
//   className = 'mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0',
//   sectionHeading,
// }) => {
//   // const { data, isLoading, error } = useCategoriesQuery({
//   //   limit: 10,
//   // });

//   return (
//     <div className={className}>
  
//       <SectionHeader sectionHeading={sectionHeading} />
//       {/* {error ? (
//         <Alert message={error?.message} />
//       ) :
//        ( */}
//         <Carousel
//           autoplay={true}
//           breakpoints={breakpoints}
//           buttonClassName="-mt-2 md:-mt-2"
//         >
//           { !Categories 
//             ? Array.from({ length: 10 }).map((_, idx) => {
//                 return (
//                   <SwiperSlide key={`card-rounded-${idx}`}>
//                     <CardIconLoader uniqueKey={`card-rounded-${idx}`} />
//                   </SwiperSlide>
//                 );
//               })
//             : Categories.map((category) => (
//                 <SwiperSlide key={`category--key-${category.id}`}>
//                   <IconCard
//                     item={category}
//                     href={`${ROUTES.CATEGORY}/${category.slug}`}
//                     effectActive={true}
//                   />
//                 </SwiperSlide>
//               ))}
//         </Carousel>
//       {/* )} */}
//     </div>
//   );
// };

// export default CategoryBlockIcon;
