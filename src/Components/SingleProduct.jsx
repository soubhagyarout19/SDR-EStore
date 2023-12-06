import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../Redux/cartSlice";

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

  const dispatch = useDispatch();
  function addItemHandler(arg){
    dispatch(addItem(arg))
  }
  return (
    <div>
      {singProd.flag && (
        <div className="single-product-main">
          <div className="single-product-left">
            <div className="single-product-left-left">
              {singProd.data.images.map((element,index) => {
                return <img key={index} src={element}></img>;
              })}
            </div>
            <img src={singProd.data.thumbnail} alt="xyz"></img>
          </div>
          <div className="single-product-right">
            <h1>{singProd.data.title}</h1>
            <h2>${singProd.data.price}/-</h2>
            <p>{singProd.data.description}</p>
            <button>-</button>
            {}
            <button onClick={()=>addItemHandler(singProd)}>+</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
