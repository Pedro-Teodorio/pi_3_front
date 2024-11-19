import { useContext } from "react";
import ContextShopCart from "../contexts/ContextShopCart";

export const useShopCart = () => useContext(ContextShopCart)