//Load react-bootstrap package
import { Card } from "react-bootstrap";

const CardComponent = ({ title, text, img }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img style={{ height: "200px" }} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
