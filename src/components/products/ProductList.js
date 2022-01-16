import Product from "./Product";

const ProductList = ({ products, updateDeleteList, onMassiveDelete }) => {
  return (
    <div className='products-list'>
      <nav className='products-header flex justify-between p-4 items-center'>
        <h1 className='text-4xl'>Products List</h1>
        <div className='controls'>
          <button className='add mx-4 bg-blue-500 text-white py-2 px-4 rounded font-bold'>
            Add
          </button>
          <button
            onClick={onMassiveDelete}
            className='delete bg-red-600 text-white py-2 px-4 rounded font-bold'
          >
            Mass Delete
          </button>
        </div>
      </nav>
      <hr />
      <div className='list m-4 grid grid-cols-4 justify-around mx-auto w-11/12'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            updateDeleteList={updateDeleteList}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
