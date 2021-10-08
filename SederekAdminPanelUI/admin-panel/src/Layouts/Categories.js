import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams} from "react-router-dom";
import { Button, Icon, Table } from "semantic-ui-react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getAllShoppingCentre = async () => {
    await axios
      .get("http://localhost:8080/api/shoppingMall/getAll")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteShoppingMall = async(id)=>{

    await axios.delete(`http://localhost:8080/api/shoppingMall/delete?id=${id}`)
    .then(()=>{
      setCategories(categories.filter(category=> category.id !==id))
    })
}

  const updateShoppingMall = async(id, categoryName)=>{
      await axios.put(`http://localhost:8080/api/shoppingMall/update?id=${id}`,{ name: categoryName })
      .then((response)=>{
        const newCategories = [...categories]
        const newCategoryIndex = newCategories.findIndex((newCategory) => newCategory.id === id)
        newCategories[newCategoryIndex].name = response.data.name
        setCategories(newCategories)
      }).catch(console.error)
  }

  useEffect(() => {
    getAllShoppingCentre();
  }, []);


  return (
    <div>
      <div fixed="top">
      <Button inverted color="blue" as={Link} to ={'/add'}>
        <Icon name="add square" /> Add
      </Button>
      </div>
      <Table fluid celled inverted selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Logo</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="edit" />
              Actions
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body >
          {categories.map((category) => (
            <Table.Row key={category.id}>
              <Table.Cell>IMAGE</Table.Cell>
              <Table.Cell>
                <span style={{ marginRight: '15px' }}>{category.name}</span>
                <input value={category.inputText ?? ''} onChange={(e) => {
                  const newCategories = [...categories]
                  const newCategoryIndex = newCategories.findIndex((newCategory) => newCategory.id === category.id)
                  newCategories[newCategoryIndex].inputText = e.target.value
                  setCategories(newCategories)
                }} style={{ borderRadius: '20px', outline: 0 }} /></Table.Cell>
              <Table.Cell textAlign="right">Approved</Table.Cell>
              <Table.Cell >
                <Button  onClick={()=> updateShoppingMall(category.id,category.inputText)} inverted color="orange">
                  <Icon name="edit" /> Edit
                </Button>
                <Button onClick={()=> deleteShoppingMall(category.id)} inverted color="red">
                  <Icon name="delete" /> Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>    
      </Table>
    </div>
  );
};

export default Categories;
