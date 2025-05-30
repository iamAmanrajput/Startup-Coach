import React from "react";
import { Target, Rocket, LineChart, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E1F5FE] px-4 py-1 rounded-full mb-4">
            <p className="text-custom-skyBlue font-medium text-sm">About Us</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-custom-navyBlue mb-4">
            Empowering Indian Startups
          </h2>
          <p className="text-[#333333] text-lg">
            India's first platform dedicated to helping early-stage startups
            overcome critical challenges between seed and Series A funding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              icon: <Target size={32} className="text-custom-skyBlue" />,
              title: "Expert Guidance",
              description:
                "Personalized mentoring from industry veterans with proven track records.",
            },
            {
              icon: <LineChart size={32} className="text-custom-skyBlue" />,
              title: "AI-Powered Insights",
              description:
                "Data-driven recommendations for strategic decision-making and growth.",
            },
            {
              icon: <Users size={32} className="text-custom-skyBlue" />,
              title: "Startup Community",
              description:
                "Connect with fellow founders and learn from their experiences.",
            },
            {
              icon: <Rocket size={32} className="text-custom-skyBlue" />,
              title: "Scale Successfully",
              description:
                "Comprehensive support across product, marketing, and finance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-[#E1F5FE] rounded-lg flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-custom-navyBlue mb-3">
                {item.title}
              </h3>
              <p className="text-[#333333]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-block bg-[#E8F5E9] px-4 py-1 rounded-full mb-2">
              <p className="text-[#2E7D32] font-medium text-sm">Our Vision</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-custom-navyBlue mb-4">
              Building India's Future
            </h3>
            <p className="text-[#333333] mb-6">
              To build a thriving startup ecosystem in India where innovative
              ideas are transformed into successful businesses.
            </p>
            <div className="inline-block bg-[#E8F5E9] px-4 py-1 rounded-full mb-2">
              <p className="text-[#2E7D32] font-medium text-sm">Our Mission</p>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-custom-navyBlue mb-4">
              Empowering Founders
            </h3>
            <p className="text-[#333333]">
              To equip startup founders with the right tools, strategies, and
              resources for sustainable growth — reducing failure rates and
              fostering entrepreneurial success.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-custom-navyBlue/10 to-custom-skyBlue/10 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-[#F5F7FF] rounded-lg">
                  <h4 className="text-3xl font-bold text-custom-skyBlue mb-2">
                    500+
                  </h4>
                  <p className="text-custom-navyBlue">Startups Guided</p>
                </div>
                <div className="text-center p-4 bg-[#F5F7FF] rounded-lg">
                  <h4 className="text-3xl font-bold text-custom-skyBlue mb-2">
                    ₹100Cr+
                  </h4>
                  <p className="text-custom-navyBlue">Funding Raised</p>
                </div>
                <div className="text-center p-4 bg-[#F5F7FF] rounded-lg">
                  <h4 className="text-3xl font-bold text-custom-skyBlue mb-2">
                    50+
                  </h4>
                  <p className="text-custom-navyBlue">Expert Mentors</p>
                </div>
                <div className="text-center p-4 bg-[#F5F7FF] rounded-lg">
                  <h4 className="text-3xl font-bold text-custom-skyBlue mb-2">
                    90%
                  </h4>
                  <p className="text-custom-navyBlue">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
