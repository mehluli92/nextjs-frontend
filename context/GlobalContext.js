import { useRouter } from "next/navigation";
import { createContext, useState } from "react"

export const GlobalContext = createContext(null);
/**
 * 
 * @param {*} param0 
 * @returns 
 * Use context for showing the following information: 
 * cart contents, number of cart contents, authentication data
 */
export const Global = ({ children }) => {
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
      };
    
    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
      };
    
    const clearCart = () => {
        setCart([]);
      };

    const router = useRouter
    
    return <GlobalContext.Provider
            value ={{
                cart, 
                addToCart, 
                removeFromCart, 
                clearCart,
                user,
                setUser
                }}
        >
            { children }
           </GlobalContext.Provider>
}