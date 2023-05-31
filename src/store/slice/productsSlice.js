import { createSlice } from "@reduxjs/toolkit";

const getPrice = ({ newPrice }) => +newPrice;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    load(state, { payload }) {
      state.list = payload.map((item) => ({
        ...item,
        show: true,
        newPrice: item.discont_price ? item.discont_price : item.price,
        show_priceTo: true,
        show_priceFrom: true,
        show_sale: true,
        show_category: true,
      }));
    },
    searchFilter(state, { payload }) {
      state.list = state.list.map((item) => ({
        ...item,
        show: item.title.toLowerCase().startsWith(payload.toLowerCase()),
      }));
    },
    resetFilter(state) {
      state.list = state.list.map((item) => ({
        ...item,
        show: true,
        show_sale: true,
        show_category: true,
      }));
    },
    sortFilter(state, { payload }) {
      state.list = [...state.list].sort(
        (a, b) => (payload === 1 ? 1 : -1) * (getPrice(a) - getPrice(b))
      );
    },
    filterByPriceFrom(state, { payload }) {
      if (payload !== 0) {
        state.list = state.list.map((item) => ({
          ...item,
          show_priceFrom: +item.newPrice >= payload,
        }));
      } else {
        state.list = state.list.map((item) => ({
          ...item,
          show_priceFrom: true,
        }));
      }
    },
    filterByPriceTo(state, { payload }) {
      if (payload !== 0) {
        state.list = state.list.map((item) => ({
          ...item,
          show_priceTo: +item.newPrice <= payload,
        }));
      } else {
        state.list = state.list.map((item) => ({
          ...item,
          show_priceTo: true,
        }));
      }
    },
    filterByCategory(state, { payload }) {
      state.list = state.list.map((item) => ({
        ...item,
        show_category: +item.categoryId === +payload,
      }));
    },
    showSale(state) {
      state.list = state.list.map((item) => ({
        ...item,
        show_sale: item.discont_price ? true : false,
      }));
    },
  },
});
export const {
  load,
  searchFilter,
  resetFilter,
  sortFilter,
  filterByPriceFrom,
  filterByPriceTo,
  filterByCategory,
  showSale,
} = productsSlice.actions;
export default productsSlice.reducer;
