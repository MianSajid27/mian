import BrandCard from '@components/common/brand-card';
import SectionHeader from '@components/common/section-header';
import BrandCardLoader from '@components/ui/loaders/brand-card-loader';
import { useBrandsQuery } from '@framework/brand/get-all-brands';
import Alert from '@components/ui/alert';
const Categories = [

	{
	id:1,
	slug:1,
  background_image: {
   
	   
		
	  original:'/assets/images/brands/grid/fusion-bg.jpg',
   
		width: 1770,
		height: 780,
	
  
  },
  image: { 
		original:   "/assets/images/brands/grid/fusion.png",
	 
		  width: 1770,
		  height: 780,
	},
 
  
	},
	{
	  id:2,
	  slug:2,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/sholy-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	  image: { 
		original:   "/assets/images/brands/grid/sholy.png",
	 
		  width: 1770,
		  height: 780,
	},
	
	
	},
	{
	  id:3,
	  slug:3,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/tyrant-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	image: {
   
	   
		
		original:   "/assets/images/brands/grid/tyrant.png",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	// name:"Roadster Women Round Neck",
	// description:"Fendi began life in 1925 as a fur and le..."
	
	},
	{
	  id:3,
	  slug:3,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/fashadil-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	  image: {
   
	   
		
		original:   "/assets/images/brands/grid/fashadil.png",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le..."
	
	},
	{
	  id:3,
	  slug:3,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/clothingegy-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	  image: {
   
	   
		
		original:   "/assets/images/brands/grid/clothingegy.png",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le..."
	
	},
	{
	  id:3,
	  slug:3,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/shosio-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	  image: {
   
	   
		
		original:   "/assets/images/brands/grid/shosio.png",
	 
		  width: 1770,
		  height: 780,
	  
  
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le..."
	
	},
	{
	  id:3,
	  slug:3,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/club-shoes-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	  image: {
   
	   
		
		original:   "/assets/images/brands/grid/club-shoes.png",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le..."
	
	},
	{
	  id:3,
	  slug:3,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/pop-clothing-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	  image: {
   
	   
		
		original:   "/assets/images/brands/grid/pop-clothing.png",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le..."
	
	},
	{
	  id:1,
	  slug:1,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/hoppister-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
	  image: {
	 
		 
		  
		original:   "/assets/images/brands/grid/hoppister.png",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le..."
	  
	  },
	  {
		id:1,
		slug:1,
    background_image: {
   
	   
		
      original:'/assets/images/brands/grid/shovia-bg.jpg',
     
      width: 1770,
      height: 780,
    
    
    },
		image: {
	   
		   
			
		  original:   "/assets/images/brands/grid/shovia.png",
	   
			width: 1770,
			height: 780,
		
	  
	  },
	  name:"Roadster Women Round Neck",
	  description:"Fendi began life in 1925 as a fur and le..."
		
		},
    {
      id:1,
      slug:1,
      background_image: {
     
       
      
        original:'/assets/images/brands/grid/shoozly-bg.jpg',
       
        width: 1770,
        height: 780,
      
      
      },
      image: {
       
         
        
        original:   "/assets/images/brands/grid/shoozly.png",
       
        width: 1770,
        height: 780,
      
      
      },
      name:"Roadster Women Round Neck",
      description:"Fendi began life in 1925 as a fur and le..."
      
      },
      {
        id:1,
        slug:1,
        background_image: {
       
         
        
          original:'/assets/images/brands/grid/blaze-fashion-bg.jpg',
         
          width: 1770,
          height: 780,
        
        
        },
        image: {
         
           
          
          original:   "/assets/images/brands/grid/blaze-fashion.png",
         
          width: 1770,
          height: 780,
        
        
        },
        name:"Roadster Women Round Neck",
        description:"Fendi began life in 1925 as a fur and le..."
        
        },
	
	]
interface BrandProps {
  sectionHeading: string;
  className?: string;
  limit?: number;
  variant?: '6column' | '4column';
}

const BrandGridBlock: React.FC<BrandProps> = ({
  className = 'mb-12 md:mb-14 xl:mb-16',
  sectionHeading,
  variant = '4column',
  limit = 16,
}) => {
  const { data, isLoading, error } = useBrandsQuery({
    limit: limit,
  });
  const brands = data?.brandsGrid;
  const columnClasses =
    variant === '4column'
      ? 'grid-cols-2 sm:grid-cols-4'
      : 'grid-cols-2 sm:grid-cols-4 2xl:grid-cols-6';

      console.log(Categories,"dsfghjkk")
  return (
    <div className={className}>
      <SectionHeader sectionHeading={sectionHeading} />
      {/* {error ? (
        <Alert message={error?.message} />
      ) : ( */}
        <div
          className={`grid ${columnClasses} gap-2.5 md:gap-3 lg:gap-5 xl:gap-7`}
        >
          {isLoading
            ? Array.from({ length: limit }).map((_, idx) => (
                <BrandCardLoader key={idx} uniqueKey={`top-brand-${idx}`} />
              ))
            :  Categories
                ?.slice(0, limit)
                .map(( Categories) => (
                  <BrandCard key={`Categories--key${ Categories.id}`} brand={Categories} />
                ))}
        </div>
      {/* )} */}
    </div>
  );
};

export default BrandGridBlock;
