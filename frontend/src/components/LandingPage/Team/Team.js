import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardHeader, CardLink
  } from 'reactstrap';
  import './Team.css'


  const Team = (props) => {
    return (
      <div class="Team">
        <CardHeader tag='h1'>Team Members</CardHeader>
        <TeamCard 
          class="TeamCard"
          memberName="Imaad Aziz"
          memberDescription="Imaad is a sophomore at the University of Texas at Dalllas majoring in Computer Science with a minor in business analytics. When he isn't developing websites he enjoys watching basketball and playing video games. His github 
          can be found below."
          link='https://github.com/ImaadAziz'
          />
          <TeamCard 
          class="TeamCard"
          memberName="Jaden Dick"
          memberDescription="Jaden is a junior at the University of Texas at Dallas majoring in Computer Science. In his free time, Jaden enjoys cooking and playing both basketball and tennis. His future projects and repositories can be
          found in the link below."
          link='https://github.com/jadendick'

          />
           <TeamCard 
          class="TeamCard"
          memberName="Anjelica Avorque"
          memberDescription="Anjelica is a junior at the University of Texas at Dallas majoring in Computer Science. In her free time she enjoys drawing, anime, video games, and exploring new cafes! Her other projects can be found at her
          Github in the link below."
          link='https://github.com/evanjelica'

          />
           <TeamCard 
          class="TeamCard"
          memberName="Olaoluwa Babatunde"
          memberDescription="Ola is a senior at the University of Texas at Dallas majoring in Computer Science. In his downtime he enjoys playing tennis, playing volleyball, and keeping up with world news. Ola's other work and future projects can be 
          found at his Github in the link below."
          link='https://github.com/olaade97'

          />
           <TeamCard 
          class="TeamCard"
          memberName="Salmaan Afzal"
          memberDescription="Salmaan is currently a sophomore at the University of Texas at Dallas majoring in Computer Science. In his free time he enjoys playing video games and mathematics. Salmaan's future projects can be found at the
          Github link below."
          link='https://github.com/Salmaan21'

          />
          
      </div>
    );
};

const TeamCard = (props) => {
    return (
        <Card class='card-class' style={{backgroundColor:"#eee", borderColor:"#333", margin:".5%"}}>
          <CardBody>
            <CardTitle tag='h2'>{props.memberName}</CardTitle>
            <CardText class='text'>{props.memberDescription}</CardText>
            <CardLink class='link' href={props.link}>{props.link}</CardLink>
          </CardBody>
        </Card>
    );
}



export default Team;