import React from "react";
import StatsCard from "/src/components/statsCard.js";
import { Card, Badge, CardTitle } from "mdbreact";
import "./css/statsPage.css";
class StatsPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div
            className="status "
            style={{
              textAlign: "right",
              marginTop: "20px",
              padding: "10px",
              width: "97%",
              margin: "20px"
            }}
          >
            <div className="text-left">
              <span className="h5">Facility Assignment Service</span>
              <span
                style={{
                  fontSize: "12px",
                  marginLeft: "10px",
                  color: "rgb(117, 114, 114)",
                  fontWeight: "bold"
                }}
              >
                Arunkumar V K
              </span>
              <div className="text-right d-inline">
                <Badge
                  className="pull-right"
                  pill
                  style={{
                    fontSize: "15px"
                  }}
                >
                  In-Progress
                </Badge>
              </div>
            </div>
          </div>

          <div class="row" style={{ margin: "0", marginTop: "10px" }}>
            <div class="col-3">
              <StatsCard label="Total Tasks Created" />
            </div>
            <div class="col-3">
              <StatsCard label="Open Tasks" />
            </div>
            <div class="col-3">
              <StatsCard label="Open Tickets" />
            </div>
            <div class="col-3">
              <StatsCard label="Total Effort Spent" />
            </div>
          </div>
          <div
            className="container  associated-users"
            style={{ padding: "5px" }}
          >
            <div className="row">
              <div className="col-2">
                <div className="head  d-inline h6">Associated Users</div>
              </div>
              <div className="col-8 d-inline">
                <ul>
                  <li className="tag">
                    <Badge className="pill" title="Lead Developer">
                      Rajesh S
                    </Badge>
                  </li>
                  <li className="tag">
                    <Badge className="pill">Sowmiya V</Badge>
                  </li>
                  <li className="tag">
                    <Badge className="pill">Prasanth P</Badge>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container " style={{ padding: "12px" }}>
            <div class="h5">Project Summary</div>
            <p style={{ fontStyle: "italic", fontSize: "13px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default StatsPage;
