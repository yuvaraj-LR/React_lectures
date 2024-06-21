import React from "react";

// Complete this Component
const ListItem = ({ data }) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: data.bgColor,
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        margin: '5px 0'
      }}
    >
      <img src={data.icon} alt={data.name} style={{ height: 20, width: 20, marginRight: 10 }} />
      <a href={data.link} target="_blank" rel="noopener noreferrer">{data.name}</a>
    </div>
  );
};

export default ListItem;
