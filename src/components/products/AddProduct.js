import { useState } from "react";
const AddProduct = () => {
  const [productType, setType] = useState("book");
  const [product, setProduct] = useState({
    sku: "",
    name: "",
    price: "",
    type: "book",
    size: "",
    width: "",
    length: "",
    height: "",
    weight: "",
  });
  let markup = <h1>null</h1>;

  if (productType == "book") {
    markup = (
      <div className='book-input'>
        <label className='text-xl w-80 flex flex-col my-2' htmlFor='weight'>
          Weight(KG){" "}
          <input
            className='border border-gray-500 p-1 rounded w-60'
            type='text'
            id='weight'
            onChange={(e) => handleChange(e)}
            value={product.weight}
          />
        </label>
      </div>
    );
  } else if (productType == "DVD") {
    markup = (
      <div className='DVD-input'>
        <label className='text-xl w-80 flex flex-col my-2' htmlFor='size'>
          Size(MB){" "}
          <input
            className='border border-gray-500 p-1 rounded w-60'
            type='text'
            id='size'
            onChange={(e) => handleChange(e)}
            value={product.size}
          />
        </label>
      </div>
    );
  } else {
    markup = (
      <div className='furniture-input'>
        <label className='text-xl flex flex-col my-2' htmlFor='height'>
          Height(CM){" "}
          <input
            className='border border-gray-500 p-1 rounded w-60'
            type='text'
            id='height'
            onChange={(e) => handleChange(e)}
            value={product.height}
          />
        </label>
        <label className='text-xl w-80 flex flex-col my-2' htmlFor='width'>
          Width(CM){" "}
          <input
            className='border border-gray-500 p-1 rounded w-60'
            type='text'
            id='width'
            onChange={(e) => handleChange(e)}
            value={product.width}
          />
        </label>
        <label className='text-xl w-80 flex flex-col my-2' htmlFor='length'>
          Length(CM){" "}
          <input
            className='border border-gray-500 p-1 rounded  w-60'
            type='text'
            id='length'
            onChange={(e) => handleChange(e)}
            value={product.length}
          />
        </label>
      </div>
    );
  }

  const handleChange = (e) => {
    // e.target.value;
    // e.target.id;
    if (e.target.id == "type") {
      setType(e.target.value);
      const newProduct = {
        ...product,
        [e.target.id]: e.target.value,
        size: "",
        width: "",
        length: "",
        height: "",
        weight: "",
      };
      setProduct(newProduct);
      console.log(newProduct);
    } else {
      const newProduct = {
        ...product,
        [e.target.id]: e.target.value,
      };
      setProduct(newProduct);
    }
  };

  const handleSubmit = () => {
    console.log(product);
  };
  return (
    <div className='add-product'>
      <nav className='products-header flex justify-between p-4 items-center'>
        <h1 className='text-4xl'>Products List</h1>
        <div className='controls'>
          <button
            onClick={handleSubmit}
            className='add mx-4 bg-blue-500 text-white py-2 px-4 rounded font-bold'
          >
            Save
          </button>
          <button className='delete bg-red-600 text-white py-2 px-4 rounded font-bold'>
            Cancel
          </button>
        </div>
      </nav>
      <hr />
      <form className='p-4 flex flex-col'>
        <label className='text-xl w-80 flex justify-between my-2' htmlFor='sku'>
          SKU{""}
          <input
            className='border border-gray-500 p-1 rounded ml-2 w-60'
            type='text'
            id='sku'
            onChange={(e) => handleChange(e)}
            value={product.sku}
          />
        </label>
        <label
          className='text-xl w-80 flex justify-between my-2'
          htmlFor='name'
        >
          Name{" "}
          <input
            className='border border-gray-500 p-1 rounded ml-2 w-60'
            type='text'
            id='name'
            onChange={(e) => handleChange(e)}
            value={product.name}
          />
        </label>
        <label
          className='text-xl w-80 flex justify-between my-2'
          htmlFor='price'
        >
          Price{" "}
          <input
            className='border border-gray-500 p-1 rounded ml-2 w-60'
            type='text'
            id='price'
            onChange={(e) => handleChange(e)}
            value={product.price}
          />
        </label>
        <label
          className='text-xl w-80 flex justify-between my-2'
          htmlFor='type'
        >
          Type{" "}
          <select
            // onChange={(e) => setType(e.target.value)}
            name='type'
            id='type'
            className='border border-gray-500 w-60'
            value={productType}
            onChange={(e) => handleChange(e)}
            // value={product.sku}
          >
            <option value='book'>Book</option>
            <option value='DVD'>DVD</option>
            <option value='furniture'>Furniture</option>
          </select>
        </label>
        {markup}
      </form>
    </div>
  );
};

export default AddProduct;
