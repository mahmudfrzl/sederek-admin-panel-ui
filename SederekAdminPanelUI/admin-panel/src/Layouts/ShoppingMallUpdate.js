import axios from "axios";
import React, { useEffect, useState } from "react";

export const updateShoppingMall = async (id, categories, setCategories) => {
    await axios.put(`http://localhost:8080/api/shoppingMall/update?id=${id}`,categories)
    .then((response)=>{
        setCategories(response.data)
    }).catch(console.error)
}

const ShoppingMallUpdate = () => {
    const [categories, setCategories] = useState();

    

    return (
        <div>
            
        </div>
    )
}

export default ShoppingMallUpdate
