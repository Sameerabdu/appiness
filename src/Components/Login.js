import React, { Component } from "react";
import "./Login.css";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import { setUserList } from "../redux/action";
import { connect } from "react-redux";
import UserList from "../JsonFiles/UserList.json";
const Login = (props) => {
  const onFinish = (values) => {
    if (
      values.username === "hruday@gmail.com" &&
      values.password === "hruday123"
    ) {
      props.history.push("/Dashboard");
      props.updateUsers(UserList.user);
    } else {
      alert("Something Went Wrng");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const mystyle = {
    width: "50%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "100px 0px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={mystyle}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapDispatchToProps = {
  updateUsers: setUserList,
};

export default connect(null, mapDispatchToProps)(Login);
