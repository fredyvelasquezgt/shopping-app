import React from 'react';

function Greeter(props:{person: string}): JSX.Element {
    return <h1>hello, {props.person}</h1>
}

// const Greeter: React.FC = () => {
//     return <h1>hello</h1>
// }


export default Greeter;