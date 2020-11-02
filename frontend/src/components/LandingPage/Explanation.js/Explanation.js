import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

function Explanation(){
const Explanation = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Explanation</h1>
        <p className="lead">The concept of this application is to create a application that houses a variety of recipes for the user </p>
        <hr className="my-2" />
        <p>The general purpose of this application as follows: </p>
        <p>Suppose you have ingridents in your in your home but don't know what to make with them. That's where our application comes in handy. The user will enter the ingridents into the application and the application will display a list of recipes that can be made with just those ingridents. </p>

        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
}

export default Explanation;
