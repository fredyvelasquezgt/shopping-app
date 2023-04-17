import React from 'react';

interface GreeterProps  {
    person: string,
}

function Greeter({person}:GreeterProps): JSX.Element {
    return <h1>hello, {person}</h1>
}

// const Greeter: React.FC = () => {
//     return <h1>hello</h1>
// }


export default Greeter;