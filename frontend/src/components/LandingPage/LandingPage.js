import React from 'react'
import Explanation from './Explanation/Explanation'
import Team from './Team/Team'
import Tools from './Tools/Tools'
import Features from './Features/Features'

function LandingPage() {
        return (
                //Use components that you import here
                <>
                        <Explanation />
                        <Features />
                        <Tools />
                        <Team />
                </>
        )
}

export default LandingPage;
