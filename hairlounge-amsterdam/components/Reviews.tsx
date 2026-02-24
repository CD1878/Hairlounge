import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  // Use first 3 reviews for the static display
  const featuredReviews = REVIEWS.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-brand-white" id="reviews">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-brand-black">What Clients Say</h2>

        {/* Desktop: 3 Static Blocks */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-20">
          {featuredReviews.map((review) => (
            <div key={review.id} className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-sm text-left flex flex-col h-full border border-gray-50 hover:-translate-y-1 transition-transform duration-300 relative">

              {/* Top Row: Stars & Quote */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex text-brand-taupe text-[10px] tracking-widest">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star mr-1"></i>
                  ))}
                </div>
                <i className="fa-solid fa-quote-right text-4xl text-gray-100"></i>
              </div>

              {/* Review Text */}
              <p className="font-serif text-xl text-brand-black italic leading-relaxed mb-8 flex-grow">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-100 mb-6"></div>

              {/* Author */}
              <div className="flex items-center">
                {review.avatar && (
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover mr-4 grayscale"
                  />
                )}
                <div>
                  <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-black mb-1">{review.author}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Swiper Carousel */}
        <div className="md:hidden mb-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {REVIEWS.slice(0, 5).map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-white p-8 shadow-soft rounded-sm text-left flex flex-col h-full border border-gray-50">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex text-brand-taupe text-[10px] tracking-widest">
                      {[...Array(review.rating)].map((_, i) => <i key={i} className="fa-solid fa-star mr-1"></i>)}
                    </div>
                    <i className="fa-solid fa-quote-right text-3xl text-gray-100"></i>
                  </div>
                  <p className="font-serif text-lg text-brand-black italic leading-relaxed mb-6 flex-grow">"{review.text}"</p>
                  <div className="w-full h-px bg-gray-100 mb-4"></div>
                  <div className="flex items-center">
                    {review.avatar && <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full object-cover mr-3 grayscale" />}
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brand-black mb-1">{review.author}</h4>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400">Google Review</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <a
          href="/reviews"
          className="inline-block font-bold border-b border-brand-black pb-1 text-xs tracking-[0.3em] uppercase hover:text-brand-taupe hover:border-brand-taupe transition-all duration-300"
        >
          Read All Reviews
        </a>
      </div>
    </section>
  );
};

export default Reviews;