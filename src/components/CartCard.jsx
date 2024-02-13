import React from "react";
import Card from "react-bootstrap/Card";
import { RiDeleteBinLine } from "react-icons/ri";
import axios from "axios";
import { toast } from "react-toastify";
import useCartStore from "../store/useCartStore";

function CartCard({ item }) {
  const { removeFromCart, resolveCart } = useCartStore();

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await axios.delete(
        `https://e-commerce-b-end.vercel.app/product/${productId}`
      );

      if (response.status === 200) {
        removeFromCart(productId);
        toast.success("Item removed from cart");

        const resolvedCart = await axios.get(
          "https://e-commerce-b-end.vercel.app/cart/"
        );
        const resolvedResponse = resolvedCart.data;
        console.log(resolvedResponse);
        resolveCart(resolvedResponse);
      } else {
        toast.error("Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("An error occurred while removing item from cart");
    }
  };

  return (
    <Card style={{ width: "18rem" }} className="container">
      <Card.Body>
        <Card.Title>
          <img className="card-img" src={item?.image?.secure_url} alt="" />
        </Card.Title>
        <Card.Text className="bg-dark text-white p-2 rounded">
          <div className="d-flex justify-content-between ">
            <div>
              <RiDeleteBinLine
                onClick={() => handleRemoveFromCart(item._id)}
                className="delete-btn"
                size={24}
              />
            </div>
            <div className="fw-bold">${item?.price}</div>
            <div className="fw-bold">{item.name}</div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
