import React from 'react'
import Explanation from './Explanation/Explanation'

//Import components that you create here
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
