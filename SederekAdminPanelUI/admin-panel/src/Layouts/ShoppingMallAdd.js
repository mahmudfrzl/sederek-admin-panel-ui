import axios from 'axios'
import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'



const ShoppingMallAdd = () => {

    const [shoppingData,setShoppingData] =useState([{name:''}])
    
    const onInputChange = (e) => {
        setShoppingData({ ...shoppingData, [e.target.name]: e.target.value });
      };

  

    const addShoppingData = async(event)=>{
        event.preventDefault();
        await axios.post('http://localhost:8080/api/shoppingMall/save',shoppingData)
        .then((response)=>{
            setShoppingData(response.data)
        })
    }



    return (

        <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name'
          value = {shoppingData.name}
          name = "name"
          onChange={onInputChange}
          />

        </Form.Field>

        <Button inverted color ="green" onClick={addShoppingData} type='submit'>Add</Button>
      </Form>
    )
}

export default ShoppingMallAdd
