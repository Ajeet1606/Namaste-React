import { createContext } from "react";

const UserContext = createContext({
    name: "",
    email: "",
    password: "",
    isLoggedIn: false
});

export default UserContext;
