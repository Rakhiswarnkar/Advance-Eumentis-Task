import React from "react";
import { Icon } from "antd";
 
class Delete extends React.Component{
    render() {
        const { id, handleClickDelete } = this.props;
        return(
            <div>
                <Icon onClick={()=>handleClickDelete(id)} type="delete" theme="filled" />
            </div>
        );
    }
}

export default Delete;