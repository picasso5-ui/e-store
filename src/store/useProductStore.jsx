import { create } from "zustand";
import { toast } from "react-toastify";

const useProductStore = create((set) => ({
  products: [],
  totalItems: [],
  totalAmount: 0,
  isLoading: false,
  error: null,

  getAllProducts: async () => {
    set((state) => ({ ...state, isLoading: true }));

    try {
      const response = await fetch(
        "https://e-commerce-b-end.vercel.app/product/"
      );
      const data = await response.json();

      set((state) => ({ ...state, products: data, error: null }));
    } catch (error) {
      toast.error(`Error: ${error}`);
      set((state) => ({ ...state, error }));
    } finally {
      set((state) => ({ ...state, isLoading: false }));
    }
  },

 
}));

export default useProductStore;
