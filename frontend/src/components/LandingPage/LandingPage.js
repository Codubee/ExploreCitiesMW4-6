import React from 'react'
import Explanation from './Explanation/Explanation'
import RestaurantDisplay from './RestaurantDisplay/RestaurantDisplay'

//Import components that you create here
import Tools from './Tools/Tools'

function LandingPage(){
    return(
        //Use components that you import here
        <>
        <Explanation/>
        <Tools />
        <RestaurantDisplay />
        </>
    )
}

export default LandingPage;
