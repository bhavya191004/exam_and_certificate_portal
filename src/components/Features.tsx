import { Map, Shield, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Map,
    title: "Curated Destinations",
    description: "Hand-picked locations ensuring unforgettable experiences"
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description: "100% secure payment and booking protection"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for worry-free travel"
  },
  {
    icon: Heart,
    title: "Best Price Guarantee",
    description: "We match any better price you find elsewhere"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}