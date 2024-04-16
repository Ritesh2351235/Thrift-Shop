import React from 'react';
import thriftShopImage from '../assets/crs_recycle_image.webp';


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Welcome to Our Thrift Shop</h2>
        <div className="flex justify-center mb-8">
          <img src={thriftShopImage} alt="Thrift Shop" className="w-full md:w-2/3 lg:w-1/2 rounded-lg shadow-md" />
        </div>
        <p className="text-lg text-gray-700 text-center mb-8">
          At Our Thrift Shop, we're committed to sustainability and reducing waste.
          Through the sale of second-hand items, we promote a greener future for our planet.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reduce, Reuse, Recycle</h3>
            <p className="text-gray-700">
              We believe in the power of reducing consumption, reusing items, and recycling materials.
              By shopping at Our Thrift Shop, you're participating in the circular economy and helping to minimize waste.
            </p>
          </div>
          <div className="p-6 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Promoting Conscious Consumption</h3>
            <p className="text-gray-700">
              Conscious consumption is at the heart of what we do.
              We curate a wide range of pre-loved items, from clothing to household goods, encouraging mindful shopping habits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
