import React  from 'react'
import './Rooms.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import i1 from '../../assets/Card-1.jpg'
import i2 from '../../assets/Card-2.jpg'
import i3 from '../../assets/Card-3.jpg'
import i4 from '../../assets/Card-4.jpg'
export default function Rooms() {
  const cardStyle = {
    margin: '10px', 
  }
 
  return (
    <>
      <h1 className="custom-text">Rooms</h1>
      <CardGroup >
        <Card style={cardStyle}>
          <Card.Img variant="top"
            src={i1}
            style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Card.Title>Executive Room</Card.Title><br></br>

            <button className="custom-button">Know More</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle} >
          <Card.Img variant="top" src={i2} style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Card.Title>Royal Room</Card.Title><br></br>

            <button className="custom-button">Know More</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={i4} style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Card.Title>Deluxe Room</Card.Title><br></br>

            <button className="custom-button">Know More</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 10 mins ago</small>
          </Card.Footer>
        </Card>
        <Card style={cardStyle}>
          <Card.Img variant="top" src={i3}  style={{ width: "100%", height: "400px" }} />
          <Card.Body>
            <Card.Title>Premium Room</Card.Title><br></br>

            <button className="custom-button">Know More</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 10 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}
