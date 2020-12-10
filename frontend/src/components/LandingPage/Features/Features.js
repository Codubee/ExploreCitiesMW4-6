import React from 'react'
import FeaturesCard from './FeaturesCard'
import './Features.css'

function Features()
{
    return
    (
        <div className = "featuresPage">
            <h1 id = "header">App Features</h1>
            <div className = "features">
                <FeaturesCard
                    CardImg = "Stock photo"
                    CardTitle = "Explore nearby cities!"
                    CardText = "Description"
                    Button = "Explore now!"
                />
                <FeaturesCard
                    CardImg = "Stock photo"
                    CardTitle = "Enjoy the local cuisine!"
                    CardText = "Want to know where the best resturants are at?"
                    Button = "Explore now!"
                />
                <FeaturesCard
                    CardImg = "Stock photo"
                    CardTitle = "Find cool things to do!"
                    CardText = "Want to go to a museum? Or maybe an art gallery? What about a historical monument?"
                    Button = "Explore now!"
                />
            </div>
        </div>
    )
}

export default Features;