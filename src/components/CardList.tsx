import Card from './Card';
import { AddIcon } from './Icon';

interface ListType {
  title: string;
  cards: {
    id: number;
    title: string;
    date: string;
    status: string;
    member: string;
    contents: string;
  }[];
}

export default function CardList({ title, cards }: ListType) {
  return (
    <div className="flex flex-col flex-shrink-0 w-72">
      <div className="flex items-center flex-shrink-0 h-10 px-2">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
          {cards.length}
        </span>
        <button
          type="button"
          className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
        >
          <AddIcon />
        </button>
      </div>
      <div className="flex flex-col pb-2">
        {cards.map(card => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}
