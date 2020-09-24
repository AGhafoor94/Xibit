import { Card } from "antd";
import React from "react";

import GoogleMaps from "./GoogleMaps";

export const SearchCard = ({ lat, lng }) => {
  console.log(lat);
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <GoogleMaps lat={lat} lng={lng} />
    </div>
  );
};
