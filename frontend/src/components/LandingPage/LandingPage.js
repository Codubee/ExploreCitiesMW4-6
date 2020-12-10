import React from 'react'
//Import components that you create here
import Explanation from './Explanation/Explanation'
import Team from './Team/Team'
import Features from './Features/Features'
import Tools from './Tools/Tools'

function LandingPage(){
    return(
        //Use components that you import here
        <>
            <Explanation />
            <Tools />
            <Features />
            <Team />
        </>
    )
}

export default LandingPage;