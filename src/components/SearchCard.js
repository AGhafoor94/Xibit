import { Card } from "antd";
import React from "react";

import GoogleMaps from "./GoogleMaps";

export const SearchCard = ({ lat, lng, data }) => {
  console.log(data);
  const value = data.data.candidates[0];
  return (
    <div className="site-card-border-less-wrapper">
      <Card title={value.name} bordered={false} style={{ width: 300 }}>
        <p>
          {value.opening_hours.open_now ? (
            <p>It is open now</p>
          ) : (
            <p>It isn't open right now</p>
          )}
        </p>
        <p>{value.formatted_address}</p>
        <p>{value.rating}</p>
      </Card>
      <GoogleMaps lat={lat} lng={lng} />
    </div>
  );
};
