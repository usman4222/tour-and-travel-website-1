import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/Website images/hunza-valley.jpg";
import Img2 from "../../assets/Website images/skardu.jpg";
import Img3 from "../../assets//Website images/Muree.jpg";
import Img4 from "../../assets/Website images/Sawat.jpg";
import Img5 from "../../assets/Website images/Neelum.jpg";
import Img6 from "../../assets/Website images/Naran.jpg";       

const PlacesData = [
  {
    img: Img1,
    title: "Hunza / Gilgit",
    location: "Gilgit-Baltistan",
    description: "Hunza Valley is a stunning place in Pakistan with beautiful mountains, clear rivers, and friendly people.",
    price: 13500,
    type: "3 Days Package  ",
  },
  {
    img: Img2,
    title: "Skardu",
    location: "Skardu",
    description: "Skardu is a beautiful place in Pakistan known for its towering mountains, clear lakes, and warm hospitality.",
    price: 13500,
    type: "3 Days Package  ",
  },
  {
    img: Img3,
    title: "Galyat",
    location: "Khyber Pakhtunkhwa",
    description: "Galyat is a delightful region in Pakistan, offering refreshing mountain air, scenic views, and lush forests.",
    price: 6200,
    type: "3 Days Package  ",
  },
  {
    img: Img4,
    title: "Sawat / Kalaam",
    location: "Khyber Pakhtunkhwa",
    description: "Swat Valley is a picturesque destination in Pakistan, renowned for its lush green valleys and crystal-clear rivers. ",
    price: 13500,
    type: "3 Days Package  ",
  },
  {
    img: Img5,
    title: "Neelum / Kail",
    location: "Kashmir",
    description: "Neelum Valley, including Kail, is a hidden gem in Pakistan, boasting enchanting landscapes, and a rich cultural.",
    price: 13500,
    type: "3 Days Package  ",
  },
  {
    img: Img6,
    title: "Naran / Kaghan",
    location: "Khyber Pakhtunkhwa",
    description: "Naran and Kaghan are captivating destinations in Pakistan, offering majestic mountains, and refreshing air.",
    price: 6200,
    type: "3 Days Package  ",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10 mb-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Top Destinations to Explore in Pakistan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
