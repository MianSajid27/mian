import SectionHeader from '@components/common/section-header';
import ProductOverlayCard from '@components/product/product-overlay-card';
import { useFeaturedProductsQuery } from '@framework/product/get-all-featured-products';
import Alert from '@components/ui/alert';
import { Catigory as banners } from '@framework/static/banner';
console.log("helo")

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  limit?: number;
  variant?: 'left' | 'center' | 'combined';
}
// const Catigory = [

//   {
//   id:1,

//     icon:"/assets/images/products/featured/1.png",
  
  
//   },
//   {
//     id:2,
  
//     icon:"/assets/images/products/featured/2.png",


  
//   },
//   {
//     id:3,
 
//     icon:"/assets/images/products/featured/3.png",
  
  
//   },
//   {
//     id:3,
//   icon:"/assets/images/products/featured/4.png",
// name:"sajid"
  
//   },


 

  
  
  
//   ]
const ProductsFeatured: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = 'mb-12 md:mb-14 xl:mb-16',
  variant = 'left',
  limit = 5,
}) => {
  // const { data, error } = useFeaturedProductsQuery({
  //   limit: limit,
  // });
  console.log(banners,'sdkajdfhaskjfhaskf')
  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />
      {/* {error ? (
        <Alert message={error?.message} />
      ) : ( */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-5 xl:gap-7">
        {banners?.map((banner:any,idx:any) => (
         
  <ProductOverlayCard
    key={`banner--key${banner?.id}`}
    product={banner}
    variant={variant}
    index={idx}
  />
          ))}
        </div>
      {/* )} */}
    </div>
  );
};

export default ProductsFeatured;
