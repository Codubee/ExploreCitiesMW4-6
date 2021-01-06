import React from 'react'
import axios from 'axios'
import {Card,CardBody,CardTitle,CardText, Row, Col} from "reactstrap"

class RestaurantDisplay extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            zip : 75040,
            restaurants : []
        }
        this.callRestaurantsApi = this.callRestaurantsApi.bind(this)
    }

    componentDidMount()
    {
        this.callRestaurantsApi()
    }

    callRestaurantsApi(){
        axios.get("/getRestaurant?zip="+this.state.zip)
            .then((response) => {
                console.log(response)
                this.setState({
                    restaurants : response.data.businesses
                })
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div class = "display-restaurants-container">
                <h1> Restaurants Nearby</h1>
                <Row className="restaurant-display">
                {this.state.restaurants.map((data) => {
                    return(
                    <Col md="12" lg="6" xl="4">
                    <Card> 
                        <CardBody> 
                            <CardTitle tag="h5"> Title </CardTitle>
                            <CardText>
                                ID: {data.id}
                                Alias: {data.alias}
                                Name: {data.name}
                            </CardText>
                        </CardBody>
                    
                    </Card>
                    </Col>
                    )
                    })}
                </Row>
            </div>
        )
    }
}

export default RestaurantDisplay;