import { useState } from 'react';

import CardDetail from './CardDetail';
import { DateIcon, PersonIcon } from './Icon';

interface CardType {
  card: {
    id: number;
    title: string;
    date: string;
    status: string;
    member: string;
    contents: string;
  };
}

export default function Card({ card }: CardType) {
  const { title, date, member } = card;

  const [cardDetailVisible, setCardDetailVisible] = useState(false);

  const showCardDetail = () => setCardDetailVisible(true);
  const hideCardDetail = () => setCardDetailVisible(false);

  return (
    <>
      {cardDetailVisible && (
        <CardDetail card={card} hideFunction={hideCardDetail} />
      )}
      <div
        className="relative flex flex-col items-start p-4 mt-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
        draggable="true"
        role="presentation"
        onClick={showCardDetail}
      >
        <h4 className="text-sm font-medium">{title}</h4>
        <div className="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
          <div className="flex items-center">
            <DateIcon />
            <span className="ml-1 leading-none">{date}</span>
          </div>
          <div className="flex items-center ml-auto">
            <PersonIcon />
            <span className="ml-1 leading-none">{member}</span>
          </div>
        </div>
      </div>
    </>
  );
}
