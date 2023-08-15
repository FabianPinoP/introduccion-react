import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          veniam nobis quod laborum repellendus porro dolores similique,
          perferendis dolor distinctio veritatis quaerat enim minus. Ducimus
          autem reiciendis ullam facere suscipit?
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Cards;
