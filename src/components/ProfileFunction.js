import { useState } from "react";

const ProfileFunction = (props) => {


    const [count, setcount] = useState(1);
    return (
        <>
            <h2>Profile Function componenet</h2>
            <h3>{props.name}</h3>
            <h3>{count}</h3>
            <button onClick={() => {setcount(10)}}
            >SetState</button>
        </>
    )
}

export default ProfileFunction;