import React from 'react';
import "../style.scss";
import { Card, Icon } from 'antd';
import Like from "./Like/Like";
import Edit from "./Edit/Edit";
import Delete from "./Delete/Delete";

const Cardcomp = (props) => {
    const { id, name, email, phone, website, image } = props;

    return (
        <div className="card-container" style={{ margin: "15px" }}>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<div
                    style={{ background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img alt="example" src={image} />
                </div>}
                actions={[<Like />, <Edit {...props} />, <Delete {...props} />]}
            >
                <div>
                    <h3>{name}</h3>
                    <div><Icon type="mail" />{" "}{email}</div>
                    <div><Icon type="phone" />{" "}{phone}</div>
                    <div><Icon type="global" />{" "}{website}</div>
                </div>
            </Card>
        </div>
    )
}

export default Cardcomp;