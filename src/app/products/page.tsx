const getProducts = async () => {
  const response = await fetch(
    "https://6712b69c6c5f5ced66247492.mockapi.io/my-todos/Products"
  );
  return await response.json();
};

const Products = async () => {
  const data = await getProducts();
  console.log(data, "DATAATATA");
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
