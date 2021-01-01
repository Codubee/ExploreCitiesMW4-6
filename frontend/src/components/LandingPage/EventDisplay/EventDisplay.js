import React from 'react'
import axios from 'axios'
import './EventDisplay.css'
import { Container, Row, Col } from 'reactstrap'


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
        <div>
            <h1>Nearby Things To Do</h1>
            <Container className="event-list">
                    {this.state.events.map((data)=>{
                        return (
                            <div class="event-item">
                                <img src={data.image_url}/>
                                <div class="event-item-data">
                                    <h1>{data.name}  {data.price}  <a href={data.url} target="_blank">Link</a></h1>
                                    
                                    <h3>
                                        {data.categories.reduce((combined,cat) => {
                                            return {"title":combined.title + ", " + cat.title}
                                        }).title}
                                    </h3>
                                    <span>{data.rating} Stars</span>
                                </div>
                            </div>
                        )
                    })}
            </Container>
        </div>
        )
    }
}

export default EventDisplay