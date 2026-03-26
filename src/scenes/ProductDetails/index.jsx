
import Details from './Details';
import Image from './Image';
import Info from './Info';
import {
  KeyboardArrowRight,
} from '@mui/icons-material';
import Reviews from './Reviews';
import RelatedProducts from './Related';

/**
 * ProductDetails Page
 * 
 * The main layout for the product details view. Assembles the Image gallery, Info, Details, Reviews, and Related products sections.
 */
const ProductDetails = () => {

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-8">
        {/* Breadcrumbs */}
        <div className="flex max-w-full overflow-x-auto items-center text-sm text-gray-400 mb-10 space-x-2 font-medium">
          <span className="cursor-pointer hover:text-black transition-colors">Home</span>
          <KeyboardArrowRight fontSize="small" />
          <span className="cursor-pointer hover:text-black transition-colors">Catalog</span>
          <KeyboardArrowRight fontSize="small" />
          <span className="cursor-pointer hover:text-black transition-colors">Smartphones</span>
          <KeyboardArrowRight fontSize="small" />
          <span className="cursor-pointer hover:text-black transition-colors">Apple</span>
          <KeyboardArrowRight fontSize="small" />
          <span className="text-black">iPhone 14 Pro Max</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <Image />
          <Info />
        </div>
      </div>

      <Details />
      <Reviews />
      <RelatedProducts />

    </div>
  );
};

export default ProductDetails;
