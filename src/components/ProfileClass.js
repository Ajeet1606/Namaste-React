import React from 'react';

class ProfileClass extends React.Component {

    //step 1 of execution
    constructor(props){
        super(props);
        //create state here.
        this.state = {
            count: 1,
            count2: 2,
        }
        console.log("Constructor called");
        
    }

    //step 3 of execution
    componentDidMount(){
        //API calls here.
        console.log("componentDidMount called");
    }

    //step 2 of execution
    render(){
        console.log("render");
        return(
            <div>
                <h2>Profile Component in Class</h2>
                <h3>{this.props.name}</h3>
                <h3>{this.state.count}</h3>

                <button onClick={() => {
                    this.setState({
                        count: 10
                    })
                }
                }>SetState</button>
            </div>
        )
    }
}

export default ProfileClass