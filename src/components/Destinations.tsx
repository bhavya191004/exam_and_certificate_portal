import { MapPin } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Experience the magical sunsets and white-washed buildings",
    price: "From $899"
  },
  {
    id: 2,
    title: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Explore tropical beaches and ancient temples",
    price: "From $799"
  },
  {
    id: 3,
    title: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    description: "Adventure through breathtaking mountain landscapes",
    price: "From $1099"
  },
  {
    id: 4,
    title: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    description: "Paradise on Earth with crystal clear waters",
    price: "From $1299"
  },
  {
    id: 5,
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc",
    description: "Immerse yourself in Japanese culture and modernity",
    price: "From $999"
  },
  {
    id: 6,
    title: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    description: "Explore ancient Incan ruins and mountain trails",
    price: "From $1199"
  }
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600">Explore our most sought-after vacation spots</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <p className="text-primary-600 font-semibold">{dest.price}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <h3 className="ml-2 text-xl font-semibold text-gray-900">{dest.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <button className="w-full bg-primary-50 text-primary-700 py-2 rounded-lg hover:bg-primary-100 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}