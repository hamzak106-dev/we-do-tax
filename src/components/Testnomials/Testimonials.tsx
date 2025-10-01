"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "@/styles/slick-custom.css";

// Mock data for testimonials
const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    text: "WeDoTaxes has been a game-changer for my business. Their expertise in tax planning saved me thousands last year. The team is professional, responsive, and truly cares about their clients.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    text: "I&apos;ve worked with many tax professionals, but WeDoTaxes stands out. Their innovative approach to tax strategy and attention to detail is unmatched. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
    text: "As a freelancer, tax season used to be stressful. WeDoTaxes made it simple and straightforward. Their team guided me through every step with patience and expertise.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Real Estate Investor",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    text: "The tax strategies provided by WeDoTaxes have been invaluable for my real estate investments. Their knowledge of tax laws and dedication to client success is impressive.",
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl text-lg mx-auto">
            Don&apos;t just take our word for it - hear from some of our
            satisfied clients about their experience with WeDoTaxes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="testimonials-slider"
        >
          <style jsx global>{`
            .testimonials-slider .slick-dots {
              bottom: -40px;
            }
            .testimonials-slider .slick-dots li button:before {
              color: #ffc107;
            }
            .testimonials-slider .slick-dots li.slick-active button:before {
              color: #ffc107;
            }
            .testimonials-slider .slick-prev,
            .testimonials-slider .slick-next {
              z-index: 1;
            }
            .testimonials-slider .slick-prev {
              left: -25px;
            }
            .testimonials-slider .slick-next {
              right: -25px;
            }
            .testimonials-slider .slick-prev:before,
            .testimonials-slider .slick-next:before {
              color: #ffc107;
            }
          `}</style>
          <Slider {...settings}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-lg shadow-lg h-full"
                >
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                  <FaQuoteLeft className="text-[#0B3D91] w-6 h-6 mb-4" />
                  <p className="text-gray-600 text-lg italic">
                    {testimonial.text}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
