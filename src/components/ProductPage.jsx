import React from "react";
import { data } from "./data";
import Counter from "./shared/Counter";
import { CartContext } from './context/CartContext'
import { formatCurrency } from "../function/function";


const ProductCard = () => {
  const { addToCart } = React.useContext(CartContext);

  const [image, setImage] = React.useState(data.images[0].src);
  const [quantity, setQuantity] = React.useState(0);

  const handleAddCart = () => {
    if (quantity === 0) {
      alert("Please select quantity");
      return;
    }
    addToCart({
      product: {
        id: data.productId,
        name: data.slogan,
        price: data.price,
        image: data.images[0].src,
        quantity: quantity,
      },
    });
  };



  const handleImageChange = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className="md:flex md:max-w-5xl m-auto my-8 justify-between items-center">
      <div className="image-section w-full md:max-w-[445px]">
        <div className="main-image rounded">
          <img src={image} alt="main" className="rounded" />
        </div>
        <div className="thumbnails  p-6 md:p-0  flex flex-wrap justify-between mt-[32px]">
          {data.images.map((item) => {
            return (
              <img
                src={item.src}
                alt={item.alt}
                key={item.id}
                onClick={(e) => handleImageChange(e)}
                className="w-[88px] h-[88px] m-2 rounded hover:opacity-70 cursor-pointer"
              />
            );
          })}
        </div>
      </div>
      <div className="info-section md:max-w-[445px] p-6 md:p-0  justify-center md:justify-between items-center">
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
        <div className="price md:my-[12px] flex items-center justify-between">
          <p className="text-[#000000] text-[32px] font-bold">{formatCurrency(data.price)}</p>
          <p className="text-[gray] line-through">{formatCurrency(data.totalPrice)}</p>
        </div>
        <div className="add-cart flex flex-col sm:flex-row sm:justify-between items-center gap-4 my-4 ">
          <div className="counter bg-[#F6F8FD] border-slate-200 border-[1px] w-full ">
            <Counter setQuantity={setQuantity} size="sm" />
          </div>
          <div className="add-to-cart w-full">
            <button
              className="bg-[orange] text-[#FFFFFF] text-[14px] font-medium w-full md:w-[260px] h-[50px] rounded hover:bg-[darkorange]"
              onClick={() => handleAddCart()}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
