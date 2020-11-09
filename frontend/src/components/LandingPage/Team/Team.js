import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader
  } from 'reactstrap';
  import './Team.css'

  const Team = (props) => {
    return (
        <div>
        <CardHeader tag='h1'>Team</CardHeader>
        <Card>
          <CardImg/>
          <CardBody>
            <CardTitle tag="h1">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
};

const TeamCard = (props) => {
    return (
        <Card>
            
        </Card>
    );
}



export default Team;