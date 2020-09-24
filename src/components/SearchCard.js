import { Card } from "antd";
import React from "react";

import GoogleMaps from "./GoogleMaps";

export const SearchCard = ({ lat, lng, data }) => {
  const value = data.data.candidates[0];
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={value.name} bordered={false} style={{ width: 300 }}>
        <p>
          {value.opening_hours.open_now ? (
            <p style={{ color: "#449D44" }}>It is open now</p>
          ) : (
            <p style={{ color: "#8f0808" }}>It isn't open right now</p>
          )}
        </p>
        <p>{value.formatted_address}</p>
        <p>{value.rating}</p>
      </Card>
      <GoogleMaps lat={lat} lng={lng} />
    </div>
  );
};
