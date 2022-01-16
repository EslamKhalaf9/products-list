import { useState } from "react";
const Product = ({ product, updateDeleteList }) => {
  const [selected, setSelected] = useState(false);
  let color = "";
  const handleClick = (e) => {
    const { id } = e.target;
    updateDeleteList(id);
    setSelected(!selected);
  };
  selected ? (color = "bg-red-500 text-white line-through") : (color = "");
  return (
    <div className={"product border m-3 p-2 shadow " + color}>
      <input
        onChange={(e) => handleClick(e)}
        className='align-self-start'
        type='checkbox'
        name='check'
        id={product.id}
      />
      <div className='info h-5/6 justify-between  flex flex-col items-center text-center'>
        <span className='id text-xl'>id: {product.id}</span>
        <span className='title text-xl'>{product.title}</span>
        <span className='price text-xl'>${product.price}</span>
        <span className='weight text-xl'>{product.weight}kg</span>
      </div>
    </div>
  );
};

export default Product;
