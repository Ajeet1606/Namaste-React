import { useSelector } from "react-redux";

const UpdateCartOnUserChange = () => {

    //subscribe to user slice to get his respective cart from firebase, is rendered whenever user is changed
    const user = useSelector((store) => store.user);

    //we've to fetch the cart details of this user then update cart slice.
    

    return (
        <>
        </>
    )
}

export default UpdateCartOnUserChange;