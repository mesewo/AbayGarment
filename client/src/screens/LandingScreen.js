import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LandingScreen = () => {
  const features = [
    {
      icon: "🌊",
      title: "Abay Inspired",
      text: "Designs reflecting the flow and majesty of the Blue Nile"
    },
    {
      icon: "🧵",
      title: "Authentic Craftsmanship",
      text: "Handmade with traditional Ethiopian techniques"
    },
    {
      icon: "🌱",
      title: "Sustainable Materials",
      text: "Eco-friendly fabrics that honor our environment"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-abay-blue to-abay-green text-white">
      {/* Navigation Bar */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* <div className="text-2xl font-bold">AbayGarment</div> */}
        <div className="flex space-x-6">
          {/* <Link to="/login" className="hover:text-abay-gold transition">Login</Link> */}
          {/* <Link to="/register" className="bg-abay-gold hover:bg-yellow-700 px-4 py-2 rounded-full transition">Register</Link> */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen-80">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 7000 }}
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          {[
            {
              id: 1,
              title: "Ethiopian Heritage Collection",
              subtitle: "Inspired by the mighty Abay River",
              image: "https://t3.ftcdn.net/jpg/01/38/82/16/240_F_138821639_q9ajwSBjEX31OybUuTFJsdNKjP1ANPW4.jpg",
              cta: "Explore Collection"
            },
            {
              id: 2,
              title: "Premium Quality Fabrics",
              subtitle: "As enduring as the Nile",
              image: "https://t3.ftcdn.net/jpg/13/49/25/48/240_F_1349254849_sYr9lbcqD6BIfqKs62cfdPLc7UgZCjgr.jpg",
              cta: "Shop Now"
            },
            {
              id: 3,
              title: "Premium Quality Fabrics",
              subtitle: "As enduring as the Nile",
              image: "https://t4.ftcdn.net/jpg/12/98/24/79/240_F_1298247901_L2mni8z0WH9QKjwVdpKaiABCKMeDX85Q.jpg",
              cta: "Shop Now"
            }
          ].map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-8 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                <Link 
                  to="/products" 
                  className="bg-abay-gold hover:bg-yellow-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
                >
                  {slide.cta}
                </Link>
              </div>
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose AbayGarment?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:backdrop-blur-md transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-abay-gold text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Abay Garment?</h2>
        <div className="flex justify-center gap-4">
          <Link 
            to="/login" 
            className="bg-white text-abay-blue hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-abay-blue py-8 text-center">
        <p>&copy; {new Date().getFullYear()} AbayGarment - Inspired by the Blue Nile</p>
      </footer>
    </div>
  );
};

export default LandingScreen;