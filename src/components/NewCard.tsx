import useObjectState from '../hooks/useObjectState';

import { ExitIcon } from './Icon';

interface CardDetailType {
  cardListStatus: string;
  hideFunction: () => void;
}

export default function NewCard({
  cardListStatus,
  hideFunction,
}: CardDetailType) {
  const emptyCard = {
    title: '',
    contents: '',
    status: [cardListStatus],
    member: '',
  };

  const [cardDetail, changeCardDetail] = useObjectState(emptyCard);
  const { title, contents, status, member } = cardDetail;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-stone-800/60 overflow-y-auto">
      <div className="relative max-w-2xl m-auto mt-20 bg-white rounded-lg shadow">
        <button
          type="button"
          onClick={hideFunction}
          className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        >
          <ExitIcon />
        </button>
        <div className="px-6 py-6">
          <form className="space-y-2" action="#">
            <input
              type="text"
              value={title}
              onChange={e => changeCardDetail('title', e.target.value)}
              className="text-2xl font-medium w-11/12 bg-gray-100 text-gray-900 rounded-lg p-1 border border-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none">
                Date
              </span>
              <input
                type="datetime-local"
                className="font-light bg-gray-100 text-gray-900 rounded-lg border border-white p-1 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
              />
            </div>
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none">
                Status
              </span>
              <select
                defaultValue={cardListStatus}
                value={status}
                onChange={e => changeCardDetail('status', e.target.value)}
                className="w-40 font-light bg-gray-100 text-gray-900 rounded-lg border border-white p-1 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
              >
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
              </select>
            </div>
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none ">
                Member
              </span>
              <input
                type="text"
                value={member}
                onChange={e => changeCardDetail('member', e.target.value)}
                className="w-40 font-light bg-gray-100 text-gray-900 rounded-lg border border-white py-1 px-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
              />
            </div>
            <textarea
              value={contents}
              onChange={e => changeCardDetail('contents', e.target.value)}
              className="bg-gray-100 text-gray-900 rounded-lg py-1 px-2 w-full h-72 resize-none border border-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="rounded-lg border border-transparent bg-blue-700 py-2 px-4 ml-1 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
