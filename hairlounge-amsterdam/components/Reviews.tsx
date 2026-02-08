import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-brand-sand" id="reviews">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">WHAT OUR CLIENTS SAY</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex text-brand-black text-sm">
              {[1,2,3,4,5].map((star) => (
                <i key={star} className="fa-solid fa-star"></i>
              ))}
            </div>
            <span className="text-xs font-bold tracking-wider">4.9/5.0 ON GOOGLE</span>
          </div>
          <p className="text-brand-dark/70 text-sm max-w-lg mx-auto">
            We care deeply about how our clients feel both during their visit and after they leave.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
              <div className="mb-6">
                <div className="flex text-brand-taupe text-xs mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-brand-dark font-serif italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-auto">
                <p className="text-xs font-bold tracking-widest uppercase text-brand-black">
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-xs font-bold border-b border-brand-black pb-1 hover:text-brand-taupe hover:border-brand-taupe transition-colors uppercase tracking-widest">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;