import React, { useEffect, useState } from "react";

const jobCategories = [
  { id: 1, title: "Software Engineer", description: "Develop and maintain software solutions.", image: "https://jobboard.websitelayout.net/img/content/job-categorie-03.jpg" },
  { id: 2, title: "Data Scientist", description: "Analyze data to help inform business decisions.", image:  "https://jobboard.websitelayout.net/img/content/job-categorie-04.jpg" },
  { id: 3, title: "Product Manager", description: "Oversee product development and strategy.", image: "https://jobboard.websitelayout.net/img/content/job-categorie-01.jpg" },
  { id: 4, title: "UI/UX Designer", description: "Design user-friendly and visually appealing interfaces.", image: "https://jobboard.websitelayout.net/img/content/job-categorie-02.jpg" },
  { id: 5, title: "Digital Marketer", description: "Plan and execute digital marketing campaigns.", image: "https://jobboard.websitelayout.net/img/content/job-categorie-06.jpg" },
  { id: 6, title: "DevOps Engineer", description: "Manage and improve development and operations workflows.", image: "https://jobboard.websitelayout.net/img/content/job-categorie-05.jpg" },
];

const JobCategory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (jobCategories.length-2)); // Loop back to start
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <div className="overflow-hidden relative w-full py-10">
      <h1 className="px-5 py-5 text-2xl font-bold text-center">Top Trending Categories</h1>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {jobCategories.map((category) => (
          <div key={category.id} className=" w-1/3 flex-shrink-0 p-4">
            <div className=" custom-card relative rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-60 object-cover"
              />
              <div className="overlay">
              <div className="text-center text-white">
                <h2 >
                  {category.title}
                </h2>
                <p >
                  {category.description}
                </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
