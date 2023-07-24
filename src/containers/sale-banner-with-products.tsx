import BannerCard from '@components/common/banner-card';
import SectionHeader from '@components/common/section-header';
import ProductCard from '@components/product/product-card';
import ProductCardListSmallLoader from '@components/ui/loaders/product-card-small-list-loader';
import { useOnSellingProductsQuery } from '@framework/product/get-all-on-selling-products';
import { saleBannerWithProducts as banner } from '@framework/static/banner';
import Alert from '@components/ui/alert';
import { ROUTES } from '@utils/routes';
const Categories = [

	{
	id:1,
	slug:1,
  
  image: { 
		original:   "/assets/images/category/kid.jpg",
	 
		  width: 1770,
		  height: 780,
	},
  name:"Maniac Red Boys",
	description:"Sporty essentials, these...",
  price:15.00
 
  
	},
	{
	  id:2,
	  slug:2,
   
	  image: { 
		original:   "/assets/images/category/sell2.webp",
	 
		  width: 1770,
		  height: 780,
	},
  name:"H&M Global Desi",
	description:"Blue solid woven regul...",
  price:30.00
	
	
	},
	{
	  id:3,
	  slug:3,
   
	image: {
   
	   
		
		original:   "/assets/images/category/sell3.webp",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"NIKE Shoes",
	description:"NIKE 2020 Black White...",
  price:50.00
	
	},
	{
	  id:3,
	  slug:3,
   
	  image: {
   
	   
		
		original:   "/assets/images/category/sell4.webp",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Polarised Wayfa..",
	description:"This item is only excha...",
  price:20.00
	
	},
	
	
	
	]
interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  variant?: 'default' | 'reverse';
}

const SaleBannerWithProducts: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  variant = 'default',
  className = 'mb-12 md:mb-14 xl:mb-16',
}) => {
  const { data, isLoading, error } = useOnSellingProductsQuery({
    limit: 10,
  });

  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />
      {/* {error ? (
        <Alert message={error?.message} />
      ) : ( */}
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-3 md:gap-6 lg:gap-5 xl:gap-7">
          {variant === 'reverse' ? (
            <BannerCard
              banner={banner[1]}
              href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
              effectActive={true}
            />
          ) : (
            <BannerCard
              banner={banner[0]}
              href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
              effectActive={true}
            />
          )}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3 md:gap-5 xl:gap-7 ${
              variant === 'reverse' ? 'row-span-full' : ''
            }`}
          >
            {isLoading
              ? Array.from({ length: 4 }).map((_, idx) => (
                  <ProductCardListSmallLoader
                    key={idx}
                    uniqueKey={`on-selling-${idx}`}
                  />
                ))
              :Categories 
                  ?.slice(0, 4)
                  .map((Categories) => (
                    <ProductCard
                      key={`Categories--key${Categories.id}`}
                      product={Categories}
                      imgWidth={176}
                      imgHeight={176}
                      variant="listSmall"
                    />
                  ))}
          </div>
        </div>
      {/* // )} */}
    </div>
  );
};

export default SaleBannerWithProducts;
