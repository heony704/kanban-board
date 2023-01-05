import useModal from '../hooks/useModal';

import Card from './Card';
import NewCard from './NewCard';
import { AddIcon } from './Icon';

interface CardListType {
  title: string;
  cards: Issue[];
}

export default function CardList({ title, cards }: CardListType) {
  const [newCardVisible, showNewCard, hideNewCard] = useModal();

  return (
    <div className="flex flex-col flex-shrink-0 w-72">
      {newCardVisible && (
        <NewCard cardListStatus={cards[0].status} hideFunction={hideNewCard} />
      )}
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          {cards.length}
        </span>
        <button
          type="button"
          onClick={showNewCard}
          className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
        >
          <AddIcon />
        </button>
      </div>
      <div className="flex flex-col pb-2">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
