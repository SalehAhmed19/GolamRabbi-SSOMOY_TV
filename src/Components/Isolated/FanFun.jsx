import React from "react";
import FanFunLeft from "./FanFunLeft";
import gr1 from "../../assets/images/people.png";
import gr2 from "../../assets/images/gr1.jpg";
import gr3 from "../../assets/images/gr2.jpg";
import gr4 from "../../assets/images/gr3.jpg";
import gr5 from "../../assets/images/gr4.jpg";
import gr6 from "../../assets/images/gr5.jpg";
import { Fade, Zoom } from "react-reveal";
import { ImageList, ImageListItem } from "@mui/material";

function FanFun() {
  // const images = [
  //   { _id: 1, img: people },
  //   { _id: 2, img: people },
  //   { _id: 3, img: people },
  //   { _id: 4, img: people },
  // ];
  const itemData = [
    {
      img: gr3,
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: gr2,
      title: "Burger",
    },
    {
      img: gr3,
      title: "Camera",
    },
    {
      img: gr4,
      title: "Coffee",
      cols: 2,
    },
    {
      img: gr5,
      title: "Hats",
      cols: 2,
    },
    {
      img: gr6,
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: gr2,
      title: "Basketball",
    },
    {
      img: gr4,
      title: "Fern",
    },
    // {
    //   img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    //   title: "Mushrooms",
    //   rows: 2,
    //   cols: 2,
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    //   title: "Tomato basil",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    //   title: "Sea star",
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    //   title: "Bike",
    //   cols: 2,
    // },
  ];
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  return (
    <div className="py-14 lg:px-24">
      <Fade down>
        <h1 className="text-primary text-center text-4xl font-bold">
          ফান উইথ ফ্যান
        </h1>
      </Fade>
      <div className="flex flex-col lg:flex-row my-20 mx-5">
        <Fade left>
          <FanFunLeft />
        </Fade>
        <div className="flex justify-end w-full">
          <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            {itemData.map((item) => (
              <ImageListItem
                key={item.img}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  {...srcset(item.img, 121, item.rows, item.cols)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  );
}

export default FanFun;
