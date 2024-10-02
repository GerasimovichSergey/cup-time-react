import { createContext, useContext, useState } from 'react';


const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
    const [orderDetails, setOrderDetails] = useState({
        name: '',
        phone: '',
        address: '',
        payment: 'cash',
    });

    const updateOrderDetails = (field, value) => {
        setOrderDetails((prevDetails) => {
            return {
                ...prevDetails,
                [field]: value,
            }
        });
    };

    const resetOrderDetails = () => {
        setOrderDetails({
            name: '',
            phone: '',
            address: '',
            payment: 'cash',
        })
    };

    return <OrderContext.Provider value={{ orderDetails, updateOrderDetails, resetOrderDetails }}>
        {children}
    </OrderContext.Provider>
};


export const useOrder = () => useContext(OrderContext);