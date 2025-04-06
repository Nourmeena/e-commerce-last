import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  },[]);
  return (
    <div>
      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
          )}
          {data.map((product) => (
              <div key={product.id}>
                <img src={product.image} />
                <h5>{product.title}</h5>
                <h6>{product.price}</h6>
                <h6>{product.description}</h6>
                <h5>{product.category}</h5>
              </div>
          ))}
    </div>
  );
};

export default Products;
