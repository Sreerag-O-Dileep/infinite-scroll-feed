import React, { useState, useEffect } from "react";
import { getList } from "../../api/list-data";
import { CardItem } from "../card-item/card-item";
import "./card-list.css";
import { CardSkeleton } from "../card-item/card-item-skelton";

interface Props {}

const CardList: React.FC<Props> = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageBottom, setPageBottom] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const list = await getList(pageIndex);
    if (!list.error) {
      let newDataAdded = data.concat(list.nodes);
      setData(newDataAdded);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom =
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      e.currentTarget.clientHeight;
    if (bottom) {
      setPageBottom(true);
      setPageIndex(pageIndex + 1);
    }
  };

  const cardLists = (response: any[]) => {
    return response.map((item) => <CardItem data={item} />);
  };

  useEffect(() => {
    fetchData();
  }, [pageIndex]);

  return (
    <div className="container">
      <div className="card-section" onScroll={handleScroll}>
        {cardLists(data)}
        {pageBottom && <CardSkeleton />}
      </div>
    </div>
  );
};

export { CardList };
