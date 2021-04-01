import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Autosuggest from "react-bootstrap-autosuggest";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../backend/frontend/src/action/productActions";
import Loader from "../../../backend/frontend/src/components/Loader";
import Message from "../../../backend/frontend/src/components/Message";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const [datalist, setDatalist] = useState([]);
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    if (products.length === 0) {
      dispatch(listProducts());
    } else {
      products.map((product) => setDatalist(...datalist, product.name));
    }
  }, [dispatch, products, datalist]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Autosuggest datalist={datalist} placeholder="Name prefix" />
      )}
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5 mt-2"
      ></Form.Control>
      <Button type="submit" variant="primary" className="p-2 mt-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
