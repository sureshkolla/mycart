import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      console.log(response.data.data)
      const ProductsInfo = response.data.data;
      setProducts(ProductsInfo);
      setFilteredProducts(ProductsInfo);
      const uniqueCategories = [...new Set(ProductsInfo.map((product) => product.category))];
      setCategories(["All", ...uniqueCategories]);
    }).catch(()=>{
      console.log(1)
    })
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category, sortOrder);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    filterProducts(selectedCategory, order);
  };

  const filterProducts = (category, order) => {
    let filtered = [...products];
    if (category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (order === "asc") {
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    setFilteredProducts(filtered);
  };
  const PriceStyle = (price) => {
     
    return (
        <p className="pricetag"><sup>DB</sup>  </p>
    )}
  return (
      <div  style={{minHeight:window.innerHeight}}>
        <div className="border-top-bottom">
        <Row className="justify-content-between m-0 row app-container ms-auto me-auto"> 
            <Col sm={3} md={2} className=" mt-2" >
                {/* <Form.Select
                onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
                {categories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
                </Form.Select> */}
            </Col>
            <Col sm={3} md={2} className=" mt-2" >
                {/* <Form.Select onChange={(e) => handleSortOrderChange(e.target.value)} value={sortOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </Form.Select> */}
            </Col>
        </Row>
        </div>
      <div className="mt-5 app-container">        
        <Row>
         {filteredProducts.map((product, index) => (
            <Col sm={6} lg={4}>
                 <div className="card-top"><h3 className="mb-0">So Strong, So light So Pro</h3></div>
                <Card className="managetab-panel">  
                    <Card.Body>
                        <p className="mb-0">{product.First_name}</p>
                        <Card.Title>{product.last_name}</Card.Title>
                        <Card.Img  src={product.avatar} alt={product.last_name}  />
                        <Card.Text>   
                            <p className="mb-0">Starting from</p>   
                            {PriceStyle(product.id)}     
                        </Card.Text>
                        <button key={index} className="theme-button">{product.cta}</button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>        
      </div>    
      <div className="app-container m-auto purpul-bg px-5 my-5 border-radius-4 row justify-content-between">
            <Col md={6} className="text-start"><h2 className="mb-0">Important to Know</h2><p>The Must-know legal bits and details about this service</p></Col>
            <Col md={6} className="text-end">
                <Dropdown className="mt-3">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
      </div>
    </div>
  );
};

export default Products;
