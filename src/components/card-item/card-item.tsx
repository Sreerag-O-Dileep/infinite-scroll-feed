import React from "react";
import "./card-item.css";

interface Props {
  data: {
    node: {
      ImageStyle_thumbnail: string;
      title: string;
      last_update: number;
    };
  };
}

const CardItem: React.FC<Props> = ({ data }) => {
  const dateFromTimestamp = (timestamp: number) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let dateFormat = new Date(timestamp * 1000);
    let currentOffset = dateFormat.getTimezoneOffset();
    let ISTOffset = 330; // IST offset UTC +5:30
    let ISTTime = new Date(
      dateFormat.getTime() + (ISTOffset + currentOffset) * 60000
    );
    let hours = ISTTime.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    let ampm = hours >= 12 ? "PM" : "AM";
    return (
      months[ISTTime.getMonth()] +
      " " +
      ISTTime.getDate() +
      "," +
      ISTTime.getFullYear() +
      " " +
      ((hours < 10 ? "0" : "") + hours) +
      ":" +
      ((ISTTime.getMinutes() < 10 ? "0" : "") + ISTTime.getMinutes()) +
      " " +
      ampm +
      " IST"
    );
  };

  return (
    <div className="grid-container">
      <div className="grid-item">
        <img className="card-img" src={data.node.ImageStyle_thumbnail} />
      </div>
      <div className="grid-item text-section">
        <p className="title">{data.node.title}</p>
        <p className="date">{dateFromTimestamp(data.node.last_update)}</p>
      </div>
    </div>
  );
};

export { CardItem };
