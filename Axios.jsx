import React from "react";
import axios from "axios";


class Axios extends React.Component {
    state = { 
        users:[]
     } 
    render() { 
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount(){
        axios.get("https://fakestoreapi.com/products/7").then((response)=>{
                    this.setState({users:response.data})
                    console.log(this.state.users)
                    console.log("Data Fetched!")
                    
                }).catch((err)=>{
                    console.log("Data not fetch")
                })
    }
}
 
export default Axios;