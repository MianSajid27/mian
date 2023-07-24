import IconCard from '@components/common/icon-card';
import SectionHeader from '@components/common/section-header';
import Carousel from '@components/ui/carousel/carousel';
import CardIconLoader from '@components/ui/loaders/card-icon-loader';
import { useCategoriesQuery } from '@framework/category/get-all-categories';
import { ROUTES } from '@utils/routes';
import Alert from '@components/ui/alert';
import { SwiperSlide } from 'swiper/react';
// import bags from "/assets/images/category/bags.jpg";
// import man from "../../pwa.png";
// import kid from "../../pwa.png";
interface CategoriesProps {
  sectionHeading: string;
  className?: string;
}

const breakpoints = {
  '1720': {
    slidesPerView: 7,
    spaceBetween: 20,
  },
  '1400': {
    slidesPerView: 7,
    spaceBetween: 28,
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 28,
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
const Categories = [

{
id:1,
slug:1,
  icon:"/assets/images/category/icons/bags.png",
  name:"Bags"

},
{
  id:2,
  slug:2,
  icon:"/assets/images/category/icons/man.png",
  name:"Man"

},
{
  id:3,
  slug:3,
  icon:"/assets/images/category/icons/kids.png",
  name:"Kids"

},
{
  id:3,
  slug:3,
  icon:"/assets/images/category/icons/sneakers.png",
  name:"sneakers"

},
{
  id:3,
  slug:3,
  icon:"/assets/images/category/icons/watch.png",
  name:"Watch"

},
{
  id:3,
  slug:3,
  icon:"/assets/images/category/icons/woman.png",
  name:"Woman"

},
{
  id:3,
  slug:3,
  icon:"/assets/images/category/icons/sunglass.png",
  name:"Sunglass"

},
{
  id:3,
  slug:3,
  icon:"/assets/images/category/icons/sports.png",
  name:"Sports"

},



]
const CategoryBlockIcon: React.FC<CategoriesProps> = ({
  className = 'mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0',
  sectionHeading,
}) => {
  // const { data, isLoading, error } = useCategoriesQuery({
  //   limit: 10,
  // });

  return (
    <div className={className}>
  
      <SectionHeader sectionHeading={sectionHeading} />
      {/* {error ? (
        <Alert message={error?.message} />
      ) :
       ( */}
        <Carousel
          autoplay={true}
          breakpoints={breakpoints}
          buttonClassName="-mt-2 md:-mt-2"
        >
          { !Categories 
            ? Array.from({ length: 10 }).map((_, idx) => {
                return (
                  <SwiperSlide key={`card-rounded-${idx}`}>
                    <CardIconLoader uniqueKey={`card-rounded-${idx}`} />
                  </SwiperSlide>
                );
              })
            : Categories.map((category) => (
                <SwiperSlide key={`category--key-${category.id}`}>
                  <IconCard
                    item={category}
                    href={`${ROUTES.CATEGORY}/${category.slug}`}
                    effectActive={true}
                  />
                </SwiperSlide>
              ))}
        </Carousel>
      {/* )} */}
    </div>
  );
};

export default CategoryBlockIcon;
