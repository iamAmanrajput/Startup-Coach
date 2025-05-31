import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "react-hot-toast";
import axios from "axios";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/suscribe`,
        { name, email }
      );
      if (response?.data?.success) {
        toast.success(response?.data?.message || "Thank you for subscribing!", {
          style: {
            border: "1px solid #1a237e",
            padding: "16px",
            color: "#03a9f4",
          },
        });
        setSubmitted(true);
      } else {
        toast.error(response?.data?.message || "An Unexpected Error", {
          style: {
            border: "1px solid #1a237e",
            padding: "16px",
            color: "#03a9f4",
          },
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "An Unexpected Error", {
        style: {
          border: "1px solid #1a237e",
          padding: "16px",
          color: "#03a9f4",
        },
      });
    }
  };

  return (
    <section
      id="newsletter"
      className="py-24 bg-gradient-to-b from-white to-[#F5F7FF]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Left Side */}
            <div className="w-full md:w-1/2 bg-[#1A237E] p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Community
              </h2>
              <p className="mb-8 opacity-90 text-lg leading-relaxed">
                Get exclusive access to startup resources, mentorship
                opportunities, and success stories from the Indian startup
                ecosystem.
              </p>

              {[
                "Expert insights and growth strategies",
                "Priority access to mentorship sessions",
                "Exclusive founder networking events",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#03A9F4] flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                  <p className="text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 p-8 md:p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A237E] mb-4">
                    Start Your Growth Journey
                  </h3>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#333333] font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03A9F4] transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#333333] font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03A9F4] transition"
                      placeholder="Enter your email"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#03A9F4] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#0288D1] transition flex items-center justify-center"
                  >
                    Join Now
                    <Send size={18} className="ml-2" />
                  </button>

                  <p className="text-xs text-gray-500 mt-3">
                    By joining, you agree to our Privacy Policy and consent to
                    receive updates from StartupCoaching.in.
                  </p>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-16 h-16 bg-[#E1F5FE] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#03A9F4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A237E] mb-3">
                    Welcome Aboard!
                  </h3>
                  <p className="text-[#333333] mb-6">
                    You're now part of India's fastest-growing startup
                    community.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#03A9F4] hover:text-[#0288D1] font-medium transition"
                  >
                    Register another email
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
