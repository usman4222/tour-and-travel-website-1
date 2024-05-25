import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Hunza / Gilgit",
    location: "Gilgit-Baltistan",
    description: "Hunza Valley is a stunning place in Pakistan with beautiful mountains, clear rivers, and friendly people.",
    price: 6700,
    type: "Tourism",
  },
  {
    img: Img2,
    title: "Skardu",
    location: "Skardu",
    description: "Skardu is a beautiful place in Pakistan known for its towering mountains, clear lakes, and warm hospitality.",
    price: 6700,
    type: "Tourism",
  },
  {
    img: Img3,
    title: "Fairy Meadows",
    location: "Gilgit-Baltistan",
    description: "Fairy Meadows is a magical spot in Pakistan, offering stunning views of Nanga Parbat and a serene atmosphere.",
    price: 6200,
    type: "Tourism",
  },
  {
    img: Img4,
    title: "Sawat / Kalaam",
    location: "Khyber Pakhtunkhwa",
    description: "Swat Valley is a picturesque destination in Pakistan, renowned for its lush green valleys and crystal-clear rivers. ",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Neelum / Kail",
    location: "Kashmir",
    description: "Kashmir is a mesmerizing region in Pakistan, famed for its breathtaking landscapes, serene lakes, and vibrant culture.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Naran / Kaghan",
    location: "Khyber Pakhtunkhwa",
    description: "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
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
