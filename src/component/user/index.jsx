import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../adapter/api/userApi";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./user.scss";
function User() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getUserById(id).then((res) => setUser(res.data.data));
  }, [id]);
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user?.avatar} />
        <Card.Body>
          <Card.Title>first Name : {user?.first_name}</Card.Title>
          <Card.Title>last_name : {user?.last_name}</Card.Title>
          <Card.Text>
           email :  {user?.email}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/user')}>Back</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default User;
