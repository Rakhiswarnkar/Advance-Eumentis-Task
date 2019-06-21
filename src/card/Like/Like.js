import React from "react";
import { Icon } from "antd";
 
class Like extends React.Component{
    state={
        themeIcon: "outlined"
    }

    handleClickLike = () =>{
        if(this.state.themeIcon === "outlined"){
            this.setState({ themeIcon: "filled" })
        }
        else{
            this.setState({ themeIcon: "outlined" })
        }
    }

    render() {
        return(
            <div>
                <Icon style={{ color: "red" }} onClick={this.handleClickLike} type="heart" theme={this.state.themeIcon}  />
            </div>
        );
    }
}

export default Like;