import React from "react";
import { ArrowRight, Target, Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute top-40 -right-20 w-72 h-72 bg-custom-skyBlue opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-16 w-96 h-96 bg-custom-navyBlue opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="inline-block bg-[#E1F5FE] px-4 py-1 rounded-full mb-6 animate-fadeIn">
                <p className="text-custom-skyBlue font-medium text-sm flex items-center">
                  India's First Startup Coaching Platform
                  <Target className="ml-2 w-4 h-4" />
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-navyBlue leading-tight mb-6 animate-slideUp">
                Transform Your <br />
                <span className="text-custom-skyBlue">Startup Vision</span> Into
                Reality
              </h1>
              <p className="text-[#333333] text-lg md:text-xl mb-8 opacity-90 animate-slideUp animation-delay-150">
                Expert guidance and AI-powered insights to help you scale from
                seed to Series A. Join India's most comprehensive startup
                coaching platform.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-slideUp animation-delay-300">
                <button className="bg-custom-navyBlue text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0D1B69] transition-all transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer">
                  Start Your Journey
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <button className="bg-white text-custom-navyBlue px-6 py-3 rounded-lg font-medium border border-custom-navyBlue hover:bg-[#F5F7FF] transition-all cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-fadeIn animation-delay-500">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-custom-navyBlue/20 to-custom-skyBlue/20 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="bg-[#F5F7FF] aspect-video w-full max-w-md rounded-lg overflow-hidden flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-custom-skyBlue rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Rocket className="text-white w-10 h-10" />
                    </div>
                    <h3 className="text-custom-navyBlue text-xl font-bold mb-2">
                      Ready to Scale?
                    </h3>
                    <p className="text-[#333333]">
                      Join 500+ startups already growing with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-custom-navyBlue text-sm mb-2">Explore More</p>
        <div className="w-6 h-10 border-2 border-custom-navyBlue rounded-full flex justify-center">
          <div className="w-1 h-2 bg-custom-navyBlue rounded-full mt-2 animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
