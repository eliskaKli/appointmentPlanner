import React from "react";

export const Tile = (props) => {
  // tady si nejsem jistá, jestli mi to rovnou vytáhne potřebná data z objektu
  const object = Object.values(props);

  const info = object.map((value, i) => {
    let className;
    if (i === 0) {
      className = "tile-title";
    } else {
      className = "tile";
    }
    return (
      <p key={i} className={className}>
        {value}
      </p>
    );
  })

  return (
    <div className="tile-container">
     {info}
    </div>
  );
};
