import { useState } from 'react';
import './hello.css';
// Main code


const Hello = () => {
    let [light, setlight] = useState(true);
    return ( <
        div className = { light ? "dark" : "light" } >
        <
        b className = "size" > { light ? " light " : " dark " }
        this shit up < /b> <
        br / > < br / >
        <
        button onClick = {
            () => setlight(!light) }
        className = "click" > clicked < /button> <
        /div>
    )
}
export default Hello;