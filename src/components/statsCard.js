import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Progress,
  MDBIcon
} from "mdbreact";
import "./css/statsCard.css";
class StatsCard extends React.Component {
  render() {
    const { label } = this.props;
    return (
      <Card style={{ width: "16rem" }} className="statsCard">
        <CardBody>
          <div className="square">
            <MDBIcon icon="gg-circle" className="icon" />
          </div>
          <span id="num">123</span>
          <Progress value={70} class="progress" />
          <div className="cardTitle">{label}</div>
        </CardBody>
      </Card>
    );
  }
}

export default StatsCard;
