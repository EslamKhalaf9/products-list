import { useState } from "react";
import AddProduct from "./components/products/AddProduct";

import ProductList from "./components/products/ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      id: "sdfas",
      title: "harry potter",
      price: 10,
      weight: 1,
      size: null,
      dimensions: null,
    },
    {
      id: "dfsfd",
      title: "head first oop",
      price: 23,
      weight: 1.5,
      size: null,
      dimensions: null,
    },
    {
      id: "fsaeg",
      title: "the song of ice and fire",
      price: 10,
      weight: 25,
      size: null,
      dimensions: null,
    },
    {
      id: "asdsfe",
      title: "the wheel of time",
      price: 10,
      weight: 25,
      size: null,
      dimensions: null,
    },
  ]);
  const [deleteList, setDeleteList] = useState([]);

  const updateDeleteList = (id) => {
    let index = deleteList.indexOf(id);
    if (index != -1) {
      //item exists so it needs to be removed from the list
      let list = [...deleteList];
      list.splice(index, 1);
      setDeleteList(list);
    } else {
      //item doesn't exist so simply push it to the list
      setDeleteList([...deleteList, id]);
      // console.log(deleteList);
    }
  };

  const handleMassiveDelete = () => {
    //first make sure that the list of products that will be deleted isn't empty
    if (deleteList.length) {
      //take a copy of the product state
      let newProducts = [...products];

      //loop through the delete list and delete one py one
      deleteList.forEach((id) => {
        newProducts = newProducts.filter((prod) => prod.id !== id);
      });
      setProducts(newProducts);
    }
  };
  return (
    <div className='App'>
      {/* <ProductList
        products={products}
        updateDeleteList={updateDeleteList}
        onMassiveDelete={handleMassiveDelete}
      /> */}
      <AddProduct />
    </div>
  );
}

export default App;
