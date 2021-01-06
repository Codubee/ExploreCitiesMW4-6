import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './Explanation.css';

function Explanation(){
 
  return (
    <div className ="page">
      <Jumbotron>
        <h1 className="display-3" >Explanation</h1>
        <p className="lead">The concept of this application is to create a application that allows user to explore cities within a radius of their choosing   </p>
        <hr className="my-2" />
        <p>The general purpose of this application as follows: </p>
        <dl>
          <dt>Suppose you wanted to take a trip and you didn't know where to go or what to do. With our application, you'd be able to enter the zip code of where you'd like to go and what will be returned will be the following: </dt>
             <dd> -Cities in and around that area</dd> 
             <dd> -Yelp results regarding that area</dd>
             <dd> -Flights data regarding that area</dd>
             <dd> -Uber results regarding that area</dd>
             <dd> -Eventbrite results regarding that area</dd> 
        </dl>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};


export default Explanation;
