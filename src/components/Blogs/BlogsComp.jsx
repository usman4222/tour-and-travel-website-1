import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/Website images/student-visa-bg.jpg";
import Img2 from "../../assets/Website images/visit visa.jpg";
import Img3 from "../../assets/Website images/Hajj umrah.jpg";
import ServiceGrid from "./ServiceGrid";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Study Visa",
    description: "We offer comprehensive study visa services for aspiring students looking to pursue their education worldwide. Our expert team is dedicated to guiding you through the entire application process, ensuring a smooth and successful journey to your dream academic destination. Whether you're aiming for universities in the USA, UK, Canada, Australia, or any other country, we are here to make your study abroad dreams a reality.",
  },
  {
    id: 1,
    image: Img2,
    title: "Visit Visa",
    description: "We offer comprehensive visit visa services for travelers looking to explore destinations worldwide. Our expert team is dedicated to guiding you through the entire application process, ensuring a smooth and successful journey to your dream destination. Whether you're planning to visit the USA, UK, Canada, Australia, or any other country, we are here to make your travel dreams a reality.",
  },
  {
    id: 1,
    image: Img3,
    title: "Hajj / Umrah",
    description: "Embark on a spiritually enriching journey with our specialized Hajj and Umrah services. Our dedicated team ensures a seamless and fulfilling pilgrimage experience, guiding you through every step of your sacred journey. With meticulous planning and attention to detail, we strive to make your Hajj and Umrah pilgrimage a truly unforgettable experience.",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10 mb-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
        <ServiceGrid />
      </div>
    </>
  );
};

export default BlogsComp;
