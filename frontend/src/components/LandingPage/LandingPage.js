import React from 'react'
import Explanation from './Explanation/Explanation'
import Team from './Team/Team'
import Tools from './Tools/Tools'

function LandingPage() {
        return (
                //Use components that you import here
                <>
                        <Explanation />
                        <Tools />
                        <Team />
                </>
        )
}

export default LandingPage;
