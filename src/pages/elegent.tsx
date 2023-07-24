
// import BannerCard from "@components/common/banner-card";
// import Container from "@components/ui/container";
// import BrandBlock from "@containers/brand-block";
// import CategoryBlock from "@containers/category-block";
// import CategoryGridBlock from "@containers/category-grid-block";
// import Layout from "@components/layout/layout";
// import BannerWithProducts from "@containers/banner-with-products";
// import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
// import Divider from "@components/ui/divider";
// import DownloadApps from "@components/common/download-apps";
// import Support from "@components/common/support";
// import Instagram from "@components/common/instagram";
// import ProductsFlashSaleBlock from "@containers/product-flash-sale-block";
// import ProductsFeatured from "@containers/products-featured";
// import BannerSliderBlock from "@containers/banner-slider-block";
// import ExclusiveBlock from "@containers/exclusive-block";
// import HeroWithCategoryFlash from "@containers/hero-with-category-flash";
// import Subscription from "@components/common/subscription";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { ROUTES } from "@utils/routes";
// import { homeFourBanner as banner } from "@framework/static/banner";
// import { GetStaticProps } from "next";

// export default function Home() {
// 	return (
// 		<>
// 			<Container>
// 				<HeroWithCategoryFlash />
// 			</Container>
// 			<BannerSliderBlock />
// 			<Container>
// 				<CategoryBlock sectionHeading="text-shop-by-category" />
// 				<BannerWithProducts
// 					sectionHeading="text-on-selling-products"
// 					categorySlug="/search"
// 					variant="reverse"
// 				/>
// 				<BannerCard
// 					banner={banner[0]}
// 					href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
// 					className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
// 				/>
// 				<ProductsFeatured
// 					sectionHeading="text-featured-products"
// 					variant="center"
// 				/>
// 				<BannerCard
// 					banner={banner[1]}
// 					href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
// 					className="mb-11 md:mb-12 lg:mb-14 2xl:mb-16"
// 				/>
// 				<ProductsFlashSaleBlock date={"2023-03-01T01:02:03"} />
// 				<BrandBlock sectionHeading="text-top-brands" />
// 				<ExclusiveBlock />
// 				<NewArrivalsProductFeed />
// 				<BannerCard
// 					banner={banner[2]}
// 					href={`${ROUTES.COLLECTIONS}/${banner[2].slug}`}
// 					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
// 				/>
// 				<CategoryGridBlock sectionHeading="text-featured-categories" />
// 				<DownloadApps />
// 				<Support />
// 				<Instagram />
// 				<Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" />
// 			</Container>
// 			<Divider className="mb-0" />
// 		</>
// 	);
// }

// Home.Layout = Layout;

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale!, [
// 				"common",
// 				"forms",
// 				"menu",
// 				"footer",
// 			])),
// 		},
// 	};
// };

import Container from "@components/ui/container";
import CustomSlider from "@containers/custom-slider";

import Layout from "@components/layout/layout";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchFlashSaleProducts } from "@framework/product/get-all-flash-sale-products";
import { fetchCategories } from "@framework/category/get-all-categories";
import { fetchNewArrivalProducts } from "@framework/product/get-all-new-arrival-products";
import { fetchBrands } from "@framework/brand/get-all-brands";
import ProductsFeatured from "@containers/products-featured";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryBlockIcon from "@containers/category-block-icon";
import { ROUTES } from "@utils/routes";
import { homeSixCoupons as banner } from "@framework/static/banner";
import SaleBannerGrid from "@containers/sale-banner-grid";
import ProductsFlashSaleCarousel from "@containers/product-flash-sale-carousel";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
import BannerCard from "@components/common/banner-card";
import SaleBannerWithProducts from "@containers/sale-banner-with-products";
import BrandGridBlock from "@containers/brand-grid-block";
import TestimonialCarousel from "@containers/testimonial-carousel";
import SubscriptionWithBg from "@components/common/subscription-with-bg";
import ExclusiveBlock from '@containers/exclusive-block';
import Customer from "@containers/customer";
import Spring from '@containers/spring';

export default function Home() {
	return (
		<>
			<Container>
				<CustomSlider />
				<SaleBannerGrid />
				{/* <Productimage/> */}
{/* <Customer/> */}

				<CategoryBlockIcon sectionHeading="text-featured-categories" />
				<ProductsFeatured
					limit={4}
					variant="combined"
					sectionHeading="text-featured-products"
				/>
				<ProductsFlashSaleCarousel />
				<BannerCard
					key={`banner--key${banner.id}`}
					banner={banner}
					href={`${ROUTES.COLLECTIONS}/${banner.slug}`}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/>
				<BrandGridBlock
					sectionHeading="text-top-brands"
					limit={12}
					variant="6column"
				/>
				
				<SaleBannerWithProducts
					sectionHeading="text-on-selling-products"
					categorySlug="/search"
				/>
				<ExclusiveBlock />
				{/*  */}
				
				<NewArrivalsProductFeed />

				
				<TestimonialCarousel sectionHeading="text-testimonial" />
				<Spring/>
				<SubscriptionWithBg />
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


