import React from 'react';
import { ShoppingBag, Star, Truck, Shield } from 'lucide-react';

export default function StorePage() {
  const products = [
    {
      name: "Official Home Jersey 2024",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1580087433295-ab2600c1030e",
      category: "Jerseys"
    },
    {
      name: "Training Kit",
      price: 64.99,
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111",
      category: "Training Wear"
    },
    {
      name: "Premier League Scarf",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c",
      category: "Accessories"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Official Store</h1>

        {/* Featured Product */}
        <div className="mb-16">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974"
              alt="Featured Product"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="bg-orange-600 text-sm px-3 py-1 rounded-full mb-4 inline-block">New Arrival</span>
              <h2 className="text-3xl font-bold mb-2">2024 Season Collection</h2>
              <p className="mb-4">Get ready for the new season with our latest collection</p>
              <button className="bg-white text-orange-600 px-6 py-2 rounded-full hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <CategoryCard name="Jerseys" count={12} />
            <CategoryCard name="Training Wear" count={8} />
            <CategoryCard name="Accessories" count={15} />
            <CategoryCard name="Equipment" count={10} />
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>

        {/* Store Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Truck className="w-8 h-8" />}
              title="Free Shipping"
              description="On orders over $100"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Secure Payment"
              description="100% secure checkout"
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Quality Guarantee"
              description="Official licensed products"
            />
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive updates about new products and special offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function CategoryCard({ name, count }) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 transition cursor-pointer">
      <h3 className="font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{count} items</p>
    </div>
  );
}

function ProductCard({ name, price, image, category }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <span className="absolute top-4 left-4 bg-orange-600 text-white text-sm px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-orange-600">${price}</span>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition flex items-center">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg">
      <div className="text-orange-600">{icon}</div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}