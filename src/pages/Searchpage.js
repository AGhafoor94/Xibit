import React from "react";

import Search from "antd/lib/input/Search";

export const Searchpage = () => (
  <div>
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={(value) => console.log(value)}
    />
  </div>
);
