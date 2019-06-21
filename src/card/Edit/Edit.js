import React from "react";
import { Modal, Form, Input, Icon } from "antd";

const Edit = Form.create({ name: 'form_in_modal' })(

    class extends React.Component {
        state={
            visibleModal: false
        }

        handleClickEdit = () => {
            this.setState({ visibleModal: true });
        }

        handleCancel = () => {
            this.setState({
                visibleModal: false,
            });
        };

        handleSubmit = (e, key) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    this.props.update_user(key, values);
                }
            });
            this.setState({ visibleModal: false });
        };

        render() {
            const { name, email, phone, website, id } = this.props;
            const { getFieldDecorator } = this.props.form;
            return (
                <div>
                    <Icon type="edit" onClick={this.handleClickEdit} />
                    <Modal
                        visible={this.state.visibleModal}
                        title="Edit User Information"
                        onCancel={this.handleCancel}
                        onOk={(e)=>this.handleSubmit(e, id)}
                    >
                        <Form layout="vertical">
                            <Form.Item label="name">
                                {getFieldDecorator('name', { initialValue: name,
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="email">
                                {getFieldDecorator('email', { initialValue: email,
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="phone">
                                {getFieldDecorator('phone', { initialValue: [phone],
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="website">
                                {getFieldDecorator('website', { initialValue: website,
                                    rules: [{ required: true, message: 'Please input the title of collection!' }],
                                })(<Input />)}
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            );
        }
    }
);

export default Edit;