import Card from "react-bootstrap/Card";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import "animate.css";

function Cards({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  const isIncart = cart.find((item) => item._id === product._id);

  const handleAddToCart = async () => {
    if (isIncart) {
      toast.warning("Item already exists in cart");
      return;
    }
    try {
      const response = await axios.post(
        "https://e-commerce-b-end.vercel.app/cart/",
        {
          _id: product._id,
        }
      );

      if (response.status === 200) {
        addToCart(product);
        toast.success("added To cart");
      } else {
        toast.error("could not add product to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card
      style={{ width: "18rem" }}
      className="card-parent hover:animate__animated animate__bounce"
    >
      <Link to={`product/${product?._id}`}>
        <Card.Img
          variant="top"
          src={product?.image?.secure_url}
          className="card-img"
        />
      </Link>

      <Card.Body>
        <Card.Title>
          <div className="card-div">
            <p>{product?.name}</p>
            <p>${product?.price}</p>
          </div>
        </Card.Title>
        <Card.Text className="text-center">{product?.description}</Card.Text>

        <button className="card-btn rounded bg-dark" onClick={handleAddToCart}>
          Add To Cart
        </button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
