import React from 'react'
import ToolCard from './ToolCard'
import './Tools.css'

function Tools() 
{
    return (
    <div className="toolsPage">
        <h1 id="header">Tools We Used</h1>
        <div className="tools">

            <ToolCard
                title="Reactstrap"
                link="https://reactstrap.github.io/"
                description="We use Reactstrap to allow for simple Bootstrap component creations."
            />
            <ToolCard
                title="Jira"
                link="https://www.atlassian.com/software/jira"
                description="We use Jira as our project management software to track issues and organize sprints for our development"
            />
            <ToolCard
                title="Uber API"
                link="https://developer.uber.com/"
                description="The Uer API is used to give users the option of easily booking a ride to their destination."
            />
            <ToolCard
                title="Yelp API"
                link="https://www.yelp.com/developers"
                description="The Yelp API gives users easy access to reviews and feedback on potential destinations."
            />
        </div>
    </div>
    )
}

export default Tools;