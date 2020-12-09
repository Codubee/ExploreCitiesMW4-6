import React from 'react'
<<<<<<< HEAD
import Navbar from './NavBar/Navbar'
=======
import Explanation from './Explanation/Explanation'
<<<<<<< HEAD

>>>>>>> 2a3168fb9ea8c53a713da01cf39b4e5d61f6a4ec
//Import components that you create here
import Tools from './Tools/Tools'

function LandingPage(){
    return(
        //Use components that you import here
<<<<<<< HEAD
    
        <Navbar/>
       
=======
        <>
        <Explanation/>
        <Tools />
        </>
>>>>>>> 2a3168fb9ea8c53a713da01cf39b4e5d61f6a4ec
    )
=======
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
>>>>>>> 04dcc4cd946b05bae13be954060edde24a5f5488
}

export default LandingPage;
