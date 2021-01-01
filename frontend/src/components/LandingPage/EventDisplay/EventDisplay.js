import React from 'react'
import axios from 'axios'
import './EventDisplay.css'
import { Row, Col, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'


class EventDisplay extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { 
            zip : 75080,
            events : []
        }
        this.callEventApi = this.callEventApi.bind(this)
    }

    componentDidMount() 
    {
        this.callEventApi()
    }

    callEventApi()
    {
        axios.get("/yelpGetThingsToDo?zip="+this.state.zip)
            .then((response) => {
                this.setState({
                    events : response.data.businesses
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    render()
    {
        return (
        <div class="event-display-container">
            <h1>Nearby Things To Do</h1>
            <Row className="events-display">
                {this.state.events.map((data)=>{
                    return (
                        <Col md="12" lg="6" xl="4">
                            <Card className="event-item" onClick={()=>{window.open(data.url, "_blank")}}>
                                <img src={data.image_url} />
                                <CardBody className="event-item-data">
                                    <CardTitle tag="h2" target="_blank">{data.name} </CardTitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">
                                        {data.price}  {data.categories.reduce((combined,cat) => { return {"title":combined.title+", "+cat.title} }).title}
                                    </CardSubtitle>
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

export default EventDisplay