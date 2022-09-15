import React from "react";
import { Card, Container, Button,Col,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getUser } from "../../adapter/api/userApi"; 
import { useNavigate } from "react-router-dom";
import Paginations from "../../component/paginations";
import "./my-sass.scss";
import Navbars from "../../component/navbar";

function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);


  const [number, setNumber] = useState(1);
  const [skip, setSkip] = useState(0);
  const [postPerPage] = useState(5);
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = user.slice(firstPost, lastPost);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(user.length / postPerPage); i++) {
    pageNumber.push(i);
  }
  const ChangePage = (pageNumber) => {
    setSkip(skip + currentPost);
    setNumber(pageNumber);
  };

  useEffect(() => {
  
    getUser(number).then(res => setUser(res.data.data)).finally(setLoading(false))

  }, [number]);

  return (
    <Container>
      <Navbars />
        <Row lg={12}>
      {isLoading ? <p>loading ... </p> :  user.map((el,index) => {
        return (
          
          <Col lg={4} className="mt-3" key={index}>
            <Card style={{ width: "14rem" }} className="h-100">
              <Card.Img variant="top" src={el.avatar} />
              <Card.Body>
                <Card.Title>{el.first_name}</Card.Title>
                <Card.Text>
                  {el.email}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate(`/user/${el.id}`)} >see profile</Button>
              </Card.Body>
            </Card>
          </Col>
      
        );
      })}
      <div className="d-flex justify-content-center mt-5">
      
      <Paginations
                number={number}
                setNumber={(e) => setNumber(e)}
                pageNumber={pageNumber}
                ChangePage={(e) => ChangePage(e)}
              />
      </div>
      </Row>

    </Container>
  );
}

export default Home;
