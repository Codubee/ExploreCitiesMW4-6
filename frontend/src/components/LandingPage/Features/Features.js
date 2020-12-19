import React from 'react'
import FeaturesCard from './FeaturesCard'
import './Features.css'

function Features()
{
    return(
        <div className = "featuresPage">
            <h1 id = "header">App Features</h1>
            <div className = "features">
                <FeaturesCard
                    CardTitle = "Explore nearby cities!"
                    CardText = "Find cities near you to go on adventures!"
                    Button = "Explore now!"
                />
                <FeaturesCard
                    CardTitle = "Enjoy the local cuisine!"
                    CardText = "Want to know where the best resturants are at?"
                    Button = "Explore now!"
                />
                <FeaturesCard
                    CardTitle = "Find cool things to do!"
                    CardText = "Want to go to a museum? Or maybe an art gallery? What about a historical monument?"
                    Button = "Explore now!"
                />
            </div>
        </div>
    )
}

export default Features;