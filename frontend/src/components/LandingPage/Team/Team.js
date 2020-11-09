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
            <CardTitle tag="h1">Team</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Subtitle</CardSubtitle>
            <CardText>Member Description</CardText>
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