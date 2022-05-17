import { mockData } from "../../shared/mockData/mockData";
import { Card } from "../Card/Card";
import './Cards.css'

export interface MockDataItemType {
  description: string;
  img: string;
}

export const Cards = () => {
  return (
    <div className="cards">
      {mockData.map((card) => (
          <Card description={card.description} img={card.img}/>
      ))}
    </div>
  );
};

