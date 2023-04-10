import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./ProfileFunction";

const About = () => {
    return (
        <>
            <h1>Hey It's the About section of my Food Studio App. 🚀🚀</h1>
            {/* {<ProfileClass name = {"ajeet"}/>}
            {<ProfileFunction name = {"ajeet"}/>} */}
            <Outlet/>
        </>
    )
}

export default About;