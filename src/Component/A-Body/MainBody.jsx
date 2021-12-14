import React from "react";
import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainBody.css";
const MainBody = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="img1" src="Assets/antho.jpg" alt="First slide" />
            <Carousel.Caption>
              <h3 className="opening">
                THINK OF INFRASTRUCTURE THINK OF NAGUR INFRA
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img1" src="Assets/axel.jpg" alt="Second slide" />

            <Carousel.Caption>
              <h3>THINK OF INFRASTRUCTURE THINK NAGUR INFRA</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img1" src="Assets/lenst.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>THINK OF INFRASTRUCTURE THINK NAGUR INFRA</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img1" src="Assets/joseph.jpg" alt="Third slide" />

            <Carousel.Caption>
              <h3>THINK OF INFRASTRUCTURE THINK NAGUR INFRA</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />

      <p className="PRA">
        
        N&I Infrastructure Development Projects (NAGUR INFRA PVT.LTD.) model of
        development in India, which involves the development of infrastructure
        projects by Central and State Governments.
      </p>
      <hr />
      <br />
      <Card className="card" style={{ width: "22rem" }}>
        <Card.Img variant="top" src="Assets/water-tank.jpg" />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <h4> Developing Landmark Infrastructure</h4>
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MainBody;
