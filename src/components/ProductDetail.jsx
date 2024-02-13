import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Row,Col} from 'react-bootstrap'

function ProductDetaill() {
  const [productDetail, setProductDetail] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchproductDetail = async () => {
      try {
        const response = await axios.get(
          `https://e-commerce-b-end.vercel.app/product/${id}`
        );

       setProductDetail([response.data.product]);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          console.error("Validation Error:", error.response.data.validationErr);
        } else {
          console.error("Error:", error.message);
        }
      }
    };

    fetchproductDetail();
  }, [id]);

  return (
    
    <div className="container">
    <Row className ="container">
      {productDetail.map((item)=>(
        <div key={item._id}>
          <Col xs={12} md={4} >
           <img src={item?.image.secure_url} alt="" style={{width:"200px"}} />
          </Col>
          <Col xs={12} md={8}>
            <h2>{item?.price}</h2>
          
          </Col>
        </div>
      ))}
     
      </Row>
  </div>);
}

export default ProductDetaill;
