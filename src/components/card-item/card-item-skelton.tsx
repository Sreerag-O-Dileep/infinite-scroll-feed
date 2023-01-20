import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./card-item.css";

const CardSkeleton: React.FC = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <Skeleton className="card-img" />
        </div>
        <div className="grid-item text-section">
          <p className="title">
            <Skeleton count={3} />
          </p>
          <p className="date">
            <Skeleton count={1} />
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <Skeleton className="card-img" />
        </div>
        <div className="grid-item text-section">
          <p className="title">
            <Skeleton count={3} />
          </p>
          <p className="date">
            <Skeleton count={1} />
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <Skeleton className="card-img" />
        </div>
        <div className="grid-item text-section">
          <p className="title">
            <Skeleton count={3} />
          </p>
          <p className="date">
            <Skeleton count={1} />
          </p>
        </div>
      </div>
    </>
  );
};

export { CardSkeleton };
