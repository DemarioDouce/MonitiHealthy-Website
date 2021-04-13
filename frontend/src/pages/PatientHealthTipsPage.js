import React from "react";
//Component
import FooterComponent from "../res/components/FooterComponent";
//Load react-bootstrap package
import { Container, Accordion, Card } from "react-bootstrap";
//Load @material-ui/core package
import { Button } from "@material-ui/core";
//Load react-router-dom package
import { Link } from "react-router-dom";

const PatientHealthTipsPage = () => {
  return (
    <>
      <Container>
        <div className="text-center">
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              margin: "auto",
              width: "50vw",
              height: "50vh",
            }}
          >
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Eat a Variety of Foods
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    For good health, we need more than 40 different nutrients,
                    and no single food can supply them all. It is not about a
                    single meal, it is about a balanced food choice over time
                    that will make a difference!
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Base your diet on plenty of foods rich in carbohydrates
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    About half the calories in our diet should come from foods
                    rich in carbohydrates, such as cereals, rice, pasta,
                    potatoes, and bread. It is a good idea to include at least
                    one of these at every meal. Wholegrain foods, like
                    wholegrain bread, pasta, and cereals, will increase our
                    fibre intake.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Replace saturated with unsaturated fat
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Fats are important for good health and proper functioning of
                    the body. However, too much of it can negatively affect our
                    weight and cardiovascular health. Different kinds of fats
                    have different health effects, and some of these tips could
                    help us keep the balance right.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Enjoy plenty of fruits and vegetables
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Fruits and vegetables are among the most important foods for
                    giving us enough vitamins, minerals and fibre. We should try
                    to eat at least 5 servings a day. For example, a glass of
                    fresh fruit juice at breakfast, perhaps an apple and a piece
                    of watermelon as snacks, and a good portion of different
                    vegetables at each meal.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    Reduce salt and sugar intake
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    A high salt intake can result in high blood pressure, and
                    increase the risk of cardiovascular disease. There are
                    different ways to reduce salt in the diet.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Link to="/patient-dashboard" style={{ textDecoration: "none" }}>
              <p style={{ margin: "20px" }}>Go Back</p>
            </Link>
            <FooterComponent color="black" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default PatientHealthTipsPage;
