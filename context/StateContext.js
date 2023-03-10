import React, { createContext, useContext, useState, useEffect } from 'reaact'
import { toast } from 'react-hot-toast'

const Context = createContext();

export const StateContext = ({ children }) =>{
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
}