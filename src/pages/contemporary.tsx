
import Container from "@components/ui/container";
import ContomSlider from "@containers/contom-slider";
import Layout from "@components/layout/layout";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchFlashSaleProducts } from "@framework/product/get-all-flash-sale-products";
import { fetchCategories } from "@framework/category/get-all-categories";
import { fetchNewArrivalProducts } from "@framework/product/get-all-new-arrival-products";
import { fetchBrands } from "@framework/brand/get-all-brands";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryBlockIcon from "@containers/category-block-icon";


import ContBannerGrid from "@containers/cont-banner-grid";
import ProductsFlashSaleCarousel from "@containers/product-flash-sale-carousel";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import Subscription from '@components/common/subscription';


import TestimonialCarousel from "@containers/testimonial-carousel";


import Instagram from '@components/common/instagram';

import Contom from "@containers/contom";
import Image from "@containers/image";

import Imged from "@containers/imged";


import Imaging from "@containers/imaging";
import Collection from "@containers/collection";
import Ideas from "@containers/ideas";

export default function Home() {
	return (
		<>
			<Container>
				<ContomSlider />

				<CategoryBlockIcon sectionHeading="text-featured-categories" />
				<ContBannerGrid />
				<NewArrivalsProductFeed />
<Contom/>
<Image/>
<NewArrivalsProductFeed />
<Imaging/>
<ProductsFlashSaleCarousel />
<Collection/>
<Ideas/>
<TestimonialCarousel sectionHeading="text-testimonial" />
{/* <Imged/> */}
<Instagram />
<Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
{/* <Collection/> */}
{/* <Collection/> */}


{/* <Trending/> */}
				{/* <Productimage/> */}
{/* <Customer/> */}

				
				{/* <ProductsFeatured
					limit={4}
					variant="combined"
					sectionHeading="text-featured-products"
				/> */}
				
			
				{/* <BannerCard
					key={`banner--key${banner.id}`}
					banner={banner}
					href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/> */}
				{/* <BrandGridBlock
					sectionHeading="text-top-brands"
					limit={12}
					variant="6column"
				/> */}
				
				{/* <SaleBannerWithProducts
					sectionHeading="text-on-selling-products"
					categorySlug="/search"
				/> */}
				{/* <ExclusiveBlock /> */}
				{/*  */}
				
				{/* <NewArrivalsProductFeed /> */}

				
				{/* <TestimonialCarousel sectionHeading="text-testimonial" /> */}
				{/* <Spring/> */}
				{/* <SubscriptionWithBg /> */}
			</Container>
		</>
	);
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(
		[API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }],
		fetchFlashSaleProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.CATEGORIES, { limit: 10 }],
		fetchCategories
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }],
		fetchNewArrivalProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.BRANDS, { limit: 0 }],
		fetchBrands
	);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
		revalidate: 60,
	};
};


