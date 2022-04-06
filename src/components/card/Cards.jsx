import React from 'react'
import Card from 'react-bootstrap/Card';
import './cards.css';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'

const Cards = ({item}) => {

  // console.log(item);
  return (
    <>
      <Card >
        <Card.Img variant="top" src={item.image} style={{ width: '300px'}}/>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{item.title}</ListGroupItem>
          <ListGroupItem>Rating: {item.rating.rate}</ListGroupItem>
          <ListGroupItem>Price:{item.price}</ListGroupItem>
        </ListGroup>
      </Card>
    </>
  )
}

export default Cards;