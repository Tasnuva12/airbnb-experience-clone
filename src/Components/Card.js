import React from "react";

import Star from "../Images/Star/Star 1.png";

export default function Card(props) {
  let item=props.item;
  const imagePath = require(`../Images/${item.coverImg}`);
  let badgeText;
  if (item.openSpots === 0) {
  badgeText="SOLD OUT";
}
else {
  badgeText="ONLINE"
}
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={imagePath} className="card--image" />
      <div className="card--stats">
        <img src={Star} className="card--star" />
        <span>{item.stats.rating}.0</span>
        <span className="gray">({item.stats.reviewCount}) </span>
        <span className="gray">{item.location}</span>
      </div>
      <p className="card--title">{item.title}</p>
      <p className="para">
        <strong>From {item.price}</strong> / person
      </p>
    </div>
  );
}
