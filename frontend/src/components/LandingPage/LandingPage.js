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
                        <Tools />
                        <Features />
                        <Team />
                </>
        )
}

export default LandingPage;
