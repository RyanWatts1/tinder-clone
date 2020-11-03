import React, { useCallback, useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Ryan Gosling',
            url: ''
        },
        {
            name: 'Steve Jobs',
            url: ''
        }

    ]);
// or you could say "const people = [];"

//Bad 
// const people =[];
//people.push('sonny', 'ryan')

//Good (push to an array in React)
//setPeople([...people, 'sonny', 'Ryan'])

/* what does "..." mean from above? is means keep what ever
was in the state before and people aka Sonny or Ryan to it*/

/*currently at 1:10:05 dealing with TinderCards, 
if there is an issue go back to the start of Tinder Cards */
    return (
        <div>
            <h1> Tinder Cards</h1>
            {people.map((perosn) => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up', 'down']}

                >
                    <div 
                    style={{ backgroundImage: 'url(${peron.url})'}} 
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );
};

export default TinderCards;