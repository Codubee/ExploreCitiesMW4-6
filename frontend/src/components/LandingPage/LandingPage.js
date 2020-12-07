import React from 'react'
import Explanation from './Explanation/Explanation'

//Import components that you create here
import Navbar from './NavBar/Navbar'

function LandingPage(){
    return(
        //Use components that you import here
        <div>
        <Navbar/>
        <Explanation/>
        </div>
         
    )
}

export default LandingPage;