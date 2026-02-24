import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBookingButton from '../components/MobileBookingButton';
import { REVIEWS } from '../constants';

const ReviewsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-brand-black selection:bg-brand-taupe selection:text-white bg-slate-50">
            <Header />
            <main className="pt-[110px] md:pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 border border-blue-100/50">
                        <i className="fa-brands fa-google mr-2"></i>
                        Google Reviews
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 text-slate-900">What Our Clients Say</h1>
                    <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Rated 4.7/5 on Google & Treatwell based on 1000+ reviews.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {REVIEWS.map((review) => (
                        <div
                            key={review.id}
                            className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 relative"
                        >
                            {/* Source Icon */}
                            {review.source === 'google' && (
                                <div className="absolute top-6 right-6 text-slate-300">
                                    <i className="fa-brands fa-google text-xl"></i>
                                </div>
                            )}

                            <p className="font-serif text-lg leading-relaxed text-slate-700 mb-8 pt-4">
                                "{review.text}"
                            </p>

                            <div className="flex items-center">
                                {review.avatar ? (
                                    <img
                                        src={review.avatar}
                                        alt={review.author}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center mr-4 text-slate-500 font-bold text-lg">
                                        {review.author.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                                    <p className="text-slate-500 text-xs mt-0.5">
                                        {review.role || 'Customer'}
                                        {review.date && (
                                            <span className="ml-2 text-slate-400">• {review.date}</span>
                                        )}
                                    </p>
                                </div>
                                <div className="ml-auto flex text-yellow-400 text-xs self-start mt-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <i key={i} className="fa-solid fa-star mr-1"></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="p-12 bg-white rounded-2xl shadow-sm border border-slate-100 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-serif mb-6">Leave a Review</h3>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a
                                href="https://www.google.com/search?q=hairlounge+amsterdam+reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto text-center"
                            >
                                Leave a Review
                            </a>
                            <a
                                href="https://www.google.com/search?q=hairlounge+amsterdam+reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto text-center"
                            >
                                See more reviews
                            </a>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
            <MobileBookingButton />
        </div>
    );
};

export default ReviewsPage;
