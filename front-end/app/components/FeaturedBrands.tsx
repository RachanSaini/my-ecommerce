import Carousel from '../common/Crousel';

const featuredBrands = [
  { id: 1, image: '/images/nike.jpg', title: 'Nike' },
  { id: 2, image: '/images/adidas.jpg', title: 'Adidas' },
  { id: 3, image: '/images/zara.jpg', title: 'Zara' },
  { id: 4, image: '/images/hm.jpg', title: 'H&M' },
  { id: 5, image: '/images/levis.jpg', title: 'Levi’s' },
];

const FeaturedBrands = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Top Brands</h2>
      <Carousel items={featuredBrands} />
    </div>
  );
};

export default FeaturedBrands;