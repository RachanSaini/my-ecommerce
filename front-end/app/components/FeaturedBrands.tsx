import Carousel from '../common/Crousel';

const featuredBrands = [
  { id: 1, image: 'https://images.unsplash.com/photo-1506755590263-e4efbf8d4ab8', title: 'Nike' },
  { id: 2, image: 'https://images.unsplash.com/photo-1607454792743-82b289d8c3c4', title: 'Adidas' },
  { id: 3, image: 'https://images.unsplash.com/photo-1534081337792-7bdfb6fe66e6', title: 'Zara' },
  { id: 4, image: 'https://images.unsplash.com/photo-1567781777-4ed372f06de3', title: 'H&M' },
  { id: 5, image: 'https://images.unsplash.com/photo-1542826684-d4e170b5ed30', title: 'Levi’s' },
];

const FeaturedBrands = () => {
  return (
    <div className="py-8 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Top Featured Brands</h2>
      <Carousel items={featuredBrands} slidesPerView={4} spaceBetween={20} autoplayDelay={3000} />
    </div>
  );
};

export default FeaturedBrands;
