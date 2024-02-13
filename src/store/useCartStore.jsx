// useCartStore.js
import { create } from "zustand";
import axios from 'axios'

const useCartStore = create((set) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  return {
    cart: storedCart,
    addToCart: (product) => {
      set((state) => {
        const updatedCart = [...state.cart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      });
    },
    removeFromCart: (productId) => {
      set((state) => {
        const updatedCart = state.cart.filter((item) => item._id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
      });
    },

    resolveCart: async () => {
      try {
        const resolvedCart = await axios.get(
          "https://e-commerce-b-end.vercel.app/cart/"
        );
        const resolvedResponse = resolvedCart.data;
        set({ Cart: resolvedResponse });
      } catch (error) {
        console.log("error resolving cart", error);
      }
    },
    // clearCart: () => {
    //   // Clear both the local storage and the state
    //   localStorage.removeItem('cart');
    //   set({ cart: [] });
    // },
  };
});

export default useCartStore;
