import React from "react";
import { Newspaper, ExternalLink } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      date: "March 15, 2024",
      title: "Indian Startup Ecosystem Shows Strong Growth in Q1 2024",
      description:
        "The Indian startup ecosystem has shown remarkable resilience and growth in the first quarter of 2024, with investments reaching new heights.",
      url: "#",
    },
    {
      id: 2,
      date: "March 14, 2024",
      title: "Government Announces New Startup India Seed Fund Scheme",
      description:
        "A new initiative worth ₹945 crore has been announced to provide financial assistance to startups for proof of concept, prototype development, and more.",
      url: "#",
    },
    {
      id: 3,
      date: "March 13, 2024",
      title: "Top 10 Indian Startups to Watch in 2024",
      description:
        "These emerging startups are revolutionizing various sectors with innovative solutions and strong growth potential.",
      url: "#",
    },
  ];

  // useEffect(() => {
  //   const getData = async () => {
  //     const apiKey = import.meta.env.VITE_API_KEY;
  //     const url = https://newsapi.org/v2/everything?q=startup&pageSize=3&language=en&sortBy=publishedAt&apiKey=${apiKey};
  //     try {
  //       const response = await axios.get(url);
  //       const articles = response.data.articles;

  //       const formattedArticles = articles.map((article, index) => ({
  //         id: index + 1,
  //         date: new Date(article.publishedAt).toLocaleDateString("en-IN", {
  //           year: "numeric",
  //           month: "long",
  //           day: "numeric",
  //         }),
  //         title: article.title,
  //         description: article.description || "No description available.",
  //         url: article.url,
  //       }));

  //       setNewsItem(formattedArticles);
  //     } catch (error) {
  //       console.log(error?.response?.data?.message || "Internal Server Error");
  //       toast.error(error?.response?.data?.message || "Internal Server Error");
  //     }
  //   };

  //   getData();
  // }, []);

  return (
    <section id="news" className="py-16 md:py-24 bg-[#F5F7FF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E1F5FE] px-4 py-1 rounded-full mb-4">
            <p className="text-custom-skyBlue font-medium text-sm flex items-center">
              Latest Updates
              <Newspaper className="ml-2 w-4 h-4" />
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-custom-navyBlue mb-4">
            Startup News
          </h2>
          <p className="text-custom-black text-lg">
            Stay updated with the latest trends and insights from the Indian
            startup ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                <span className="text-custom-skyBlue text-sm font-medium">
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-custom-navyBlue mb-3">
                {item.title}
              </h3>
              <p className="text-custom-black mb-4 line-clamp-3">
                {item.description}
              </p>
              <a
                href={item.url}
                className="inline-flex items-center text-custom-skyBlue hover:text-[#0288D1] font-medium transition-colors"
              >
                Read More
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
