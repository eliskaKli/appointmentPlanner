import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  const tiles = props.object.map((info, i) => <Tile info={info} key={i} />);

  return (
    <div>
      {tiles}
    </div>
  );
};
