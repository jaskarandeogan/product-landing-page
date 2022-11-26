import React from "react";
import { data } from "./data";
import Counter from "./Counter";

const ProductCard = () => {
  
  const [image, setImage] = React.useState(data.images[0].src);

  const handleImageChange = (e) => {
    setImage(e.target.src);
  }

  return (
    <div className="flex max-w-5xl m-auto my-8 justify-between items-center">
      <div className="image-section max-w-[445px]">
        <div className="main-image rounded">
          <img src={image} alt="main" className="rounded" />
        </div>
        <div className="thumbnails  flex justify-between mt-[32px]">
          {data.images.map((item,) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={item.id}
                onClick={(e) => handleImageChange(e)}
                className="w-[88px] h-[88px] rounded hover:opacity-70 cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      <div className="info-section max-w-[445px] justify-between items-center">
        <div className="company">
          <h3 className="text-[orange] text-[14px] font-medium">
            {data.company}
          </h3>
        </div>
        <h1 className="text-[#000000] text-[44px] leading-tight font-bold my-[16px]">
          {data.slogan}
        </h1>
        <div className="description">
          <p className="text-[gray] text-[14px] font-medium my-[12px]">
            {data.description}
          </p>
        </div>
        <div className="price my-[12px]">
          <p className="text-[#000000] text-[32px] font-bold">${data.price} <span className="text-[orange] bg-[lightorange] p-2 text-[16px]">-{(data.price*100)/data.totalPrice}%</span></p>
          <p className="text-[gray] line-through">${data.totalPrice}</p>
        </div>
        <div className="add-cart flex justify-between items-center">
          <div className="counter bg-[#F6F8FD]">
            <Counter />
          </div>
          <div className="add-to-cart">
            <button className="bg-[orange] text-[#FFFFFF] text-[14px] font-medium w-[260px] h-[50px] rounded hover:bg-[darkorange]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
