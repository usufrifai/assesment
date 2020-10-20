import React, {useState} from 'react';
import Ideas from './Ideas';

const Main = () => {
   const [ideas, changeVotes]= useState([{name:'ModerOffice', votes:0}, {name:'Offsite', votes:0}]);
   const updateVotes = (name, action) => {
   const updatedIdeas = ideas.map((idea) => {
        if(idea.name === name){
            idea.votes = action === "add" ? idea.votes+1 : idea.votes-1
        }
        return idea;
    } );
   changeVotes(updatedIdeas);
   }
    return (
         <Ideas
           ideaList={ideas}
           updateVotes= {updateVotes}
         />
    );
}
export default Main;
