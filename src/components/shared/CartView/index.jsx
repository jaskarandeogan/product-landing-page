import React from "react";
import { CartContext } from "../../context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "../../../function/function";

const CartView = ({ addCart }) => {
  const { cart, removeFromCart } = React.useContext(CartContext);
  console.log(cart);

  function handleDelete(id) {

    console.log(id);
    removeFromCart(id);
  }

  const CartBody = () => {
    return (
      <>
        <div className="flex justify-between items-center p-6">
          <div className="">
            <img
              src={cart[0].product?.image}
              alt="product"
              className="w-20 h-20 object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-[#69707D]">{cart[0].product?.name}</span>
            <div>
              <span className="text-sm text-[#69707D]">
                {formatCurrency(cart[0].product?.price)} x{" "}
              </span>
              <span className="text-sm text-[#69707D]">{cart[0].product?.quantity}</span>
              <span className="text-sm font-semibold">
                {" "}
                {formatCurrency(cart[0].product?.price * cart[0].product?.quantity)}
              </span>
            </div>
          </div>
          <button className=" text-center text-lg py-3 text-[#69707D] font-semibold " onClick={()=> handleDelete(cart[0].product?.id)}>
            <TrashIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="py-3 px-6">
          <button className="bg-[#FF7E1B] text-center text-lg py-3 text-white font-semibold rounded-md w-full">
            Checkout
          </button>
        </div>
      </>
    );
  };

  const EmptyCart = () => {
    return (
      <div className="flex flex-col justify-center items-center py-10">
        <span className="text-[#69707D] text-sm font-semibold py-3">
          Your cart is empty
        </span>
      </div>
    );
 
}


  return (
    <div className="flex flex-col min-w-[22.5rem] ">
      <h4 className="border-b-[1px]  px-6 py-3 border-[#E4E9F2]">
        <span className="text-sm font-semibold  ">Cart</span>
      </h4>
      {
        cart.length > 0 ? <CartBody /> : <EmptyCart />
      }

    </div>
  );
};

export default CartView;
