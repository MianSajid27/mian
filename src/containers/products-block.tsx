import React from "react";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { Product } from "@framework/types";
import Alert from "@components/ui/alert";
// const Categories = [

// 	{
// 	id:1,
// 	slug:1,
// 	image: {
   
	   
		
// 	  original:   "/assets/images/Arrival/1.webp",
   
// 		width: 1770,
// 		height: 780,
	
  
//   },
// 	  name:"Roadster Women Round Neck",
// 	  description:"Fendi began life in 1925 as a fur and le...",
// 	  price:18.59
// 	},
// 	{
// 	  id:2,
// 	  slug:2,
// 	  image: { 
// 		original:   "/assets/images/Arrival/2.webp",
	 
// 		  width: 1770,
// 		  height: 780,
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	
// 	},
// 	{
// 	  id:3,
// 	  slug:3,
// 	  image: {
   
	   
		
// 		original:   "/assets/images/Arrival/3.webp",
	 
// 		  width: 1770,
// 		  height: 780,
	  
	
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	
// 	},
// 	{
// 	  id:3,
// 	  slug:3,
// 	  image: {
   
	   
		
// 		original:   "/assets/images/Arrival/4.webp",
	 
// 		  width: 1770,
// 		  height: 780,
	  
	
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	
// 	},
// 	{
// 	  id:3,
// 	  slug:3,
// 	  image: {
   
	   
		
// 		original:   "/assets/images/Arrival/5.webp",
	 
// 		  width: 1770,
// 		  height: 780,
	  
	
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	
// 	},
// 	{
// 	  id:3,
// 	  slug:3,
	 
// 	  image: {
   
	   
		
// 		original:   "/assets/images/Arrival/6.webp",
	 
// 		  width: 1770,
// 		  height: 780,
	  
  
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	
// 	},
// 	{
// 	  id:3,
// 	  slug:3,
// 	  image: {
   
	   
		
// 		original:   "/assets/images/Arrival/7.webp",
	 
// 		  width: 1770,
// 		  height: 780,
	  
	
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	
// 	},
// 	{
// 	  id:3,
// 	  slug:3,
// 	  image: {
   
	   
		
// 		original:   "/assets/images/Arrival/8.webp",
	 
// 		  width: 1770,
// 		  height: 780,
	  
	
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	
// 	},
// 	{
// 	  id:1,
// 	  slug:1,
// 	  image: {
	 
		 
		  
// 		original:   "/assets/images/Arrival/9.webp",
	 
// 		  width: 1770,
// 		  height: 780,
	  
	
// 	},
// 	name:"Roadster Women Round Neck",
// 	description:"Fendi began life in 1925 as a fur and le...",
// 	price:18.59
	  
// 	  },
// 	  {
// 		id:1,
// 		slug:1,
// 		image: {
	   
		   
			
// 		  original:   "/assets/images/Arrival/10.webp",
	   
// 			width: 1770,
// 			height: 780,
		
	  
// 	  },
// 	  name:"Roadster Women Round Neck",
// 	  description:"Fendi began life in 1925 as a fur and le...",
// 	  price:18.59
		
// 		},
	
// 	]

const Categoriess = [

	{
	id:1,
	slug:1,
	image: {
   
	   
		
	  original:   "/assets/images/Contom/new/1.webp",
   
		width: 1770,
		height: 780,
	
  
  },
	  name:"Roadster Women Round Neck",
	  description:"Fendi began life in 1925 as a fur and le...",
	  price:18.59
	},
	{
	  id:2,
	  slug:2,
	  image: { 
		original:   "/assets/images/Contom/new/2.webp",
	 
		  width: 1770,
		  height: 780,
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le...",
	price:18.59
	
	},
	{
	  id:3,
	  slug:3,
	  image: {
   
	   
		
		original:   "/assets/images/Contom/new/3.webp",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le...",
	price:18.59
	
	},
	{
	  id:3,
	  slug:3,
	  image: {
   
	   
		
		original:   "/assets/images/Contom/new/4.webp",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le...",
	price:18.59
	
	},
	{
	  id:3,
	  slug:3,
	  image: {
   
	   
		
		original:   "/assets/images/Contom/new/5.webp",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le...",
	price:18.59
	
	},
	{
	  id:3,
	  slug:3,
	 
	  image: {
   
	   
		
		original:   "/assets/images/Contom/new/6.webp",
	 
		  width: 1770,
		  height: 780,
	  
  
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le...",
	price:18.59
	
	},
	{
	  id:3,
	  slug:3,
	  image: {
   
	   
		
		original:   "/assets/images/Contom/new/7.webp",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le...",
	price:18.59
	
	},
	{
	  id:3,
	  slug:3,
	  image: {
   
	   
		
		original:   "/assets/images/Contom/new/8.webp",
	 
		  width: 1770,
		  height: 780,
	  
	
	},
	name:"Roadster Women Round Neck",
	description:"Fendi began life in 1925 as a fur and le...",
	price:18.59
	
	},
	// {
	//   id:1,
	//   slug:1,
	//   image: {
	 
		 
		  
	// 	original:   "/assets/images/Arrival/9.webp",
	 
	// 	  width: 1770,
	// 	  height: 780,
	  
	
	// },
	// name:"Roadster Women Round Neck",
	// description:"Fendi began life in 1925 as a fur and le...",
	// price:18.59
	  
	//   },
	//   {
	// 	id:1,
	// 	slug:1,
	// 	image: {
	   
		   
			
	// 	  original:   "/assets/images/Arrival/10.webp",
	   
	// 		width: 1770,
	// 		height: 780,
		
	  
	//   },
	//   name:"Roadster Women Round Neck",
	//   description:"Fendi began life in 1925 as a fur and le...",
	//   price:18.59
		
	// 	},
	
	]
interface ProductsProps {
	sectionHeading: string;
	categorySlug?: string;
	className?: string;
	products?: Product[];
	loading: boolean;
	error?: string;
	uniqueKey?: string;
}

const ProductsBlock: React.FC<ProductsProps> = ({
	sectionHeading,
	categorySlug,
	className = "mb-9 md:mb-9 lg:mb-10 xl:mb-12",
	products,
	loading,
	error,
	uniqueKey,
}) => {
	return (
		<div className={className}>
			<SectionHeader
				sectionHeading={sectionHeading}
				categorySlug={categorySlug}
			/>

			{/* {error ? (
				<Alert message={error} />
			) : ( */}
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
					{loading && !products?.length ? (
						<ProductFeedLoader limit={10} uniqueKey={uniqueKey} />
					) : (
						Categoriess?.map((Categoriess,idx:any) => (
							<ProductCard
								key={`Categoriess--key${Categoriess.id}`}
								product={Categoriess}
								imgWidth={340}
								imgHeight={440}
								index={idx}
								variant="grid"

							/>
						))
					)}
				</div>
			{/* )} */}
		</div>
	);
};

export default ProductsBlock;
