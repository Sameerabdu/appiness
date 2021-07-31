import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import "./dashboard.css";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
    };
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.history.push("");
    }
  }

  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {this.props?.users.map((list) => {
            return (
              <Col span={8} style={{ marginBottom: 10 }}>
                <Card title={list.name} bordered={false}>
                  <p>id={list.id}</p>
                  <p>Age={list.age}</p>
                  <p>Gender={list.gender}</p>
                  <p>Email={list.email}</p>
                  <p>Phone No={list.phoneNo}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Dashboard);
