import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "AJ",
    email: "aj@gmail.com",
  },
});

export default UserContext;
