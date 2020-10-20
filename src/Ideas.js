import React from 'react';
 const Idea = ({ideaList, updateVotes}) => {
    return(
    <div>
        <ul>
            {ideaList.map((ideas) => (
                <li>
                <span>{ideas?.name}</span>
                <span> votes:{ideas?.votes}</span> 
                <button onClick={()=>updateVotes(ideas?.name, 'add')}>+</button>
                <button onClick={()=>updateVotes(ideas?.name, 'minus')}>-</button>
                </li>
            ))}
        </ul>			
    </div>
    );
}
export default Idea;