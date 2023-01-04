import { useState } from 'react';
import CardDetail from './CardDetail';

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
            <svg
              className="w-4 h-4 text-gray-300 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1 leading-none">{date}</span>
          </div>
          <div className="flex items-center ml-auto">
            <svg
              className="w-3 h-3 text-gray-300 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-1 leading-none">{member}</span>
          </div>
        </div>
      </div>
    </>
  );
}
