import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  let SingleProductData = ([singProd, setSingleProd] = useState({
    flag: false,
    data: "",
  }));
  let { id } = useParams();
  useEffect(() => {
    async function xyz() {
      let data = await fetch(`https://dummyjson.com/products/${id}`);
      let mydata = await data.json();
      setSingleProd({ flag: true, data: mydata });
    }
    xyz();
  }, []);
  console.log(singProd.data.images);
  return (
    <div>
      <h1>This is Single Product...</h1>
      {singProd.flag && (
        <div className="single-product-main">
          <div className="single-product-left">
            <div className="single-product-left-left">
              {singProd.data.images.map((element) => {
                return <img src={element}></img>;
              })}
            </div>
            <img src={singProd.data.thumbnail} alt="xyz"></img>
          </div>
          <div className="single-product-right">
            <h1>{singProd.data.title}</h1>
            <h2>${singProd.data.price}/-</h2>
            <p>{singProd.data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
