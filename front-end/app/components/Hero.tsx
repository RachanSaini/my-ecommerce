const HeroSection = () => {
    return (
      <div className="bg-gradient-to-r rom-[#7A5C44] to-[#D3A87C] py-20">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-bold font-bold text-[#7A5C44] hover:text-[#D3A87C] transition duration-300 ease-in-out mb-4">Welcome to KindKloset</h1>
          <p className="text-lg text-[#7A5C44] mb-8">Discover sustainable products from eco-friendly brands.</p>
          <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;