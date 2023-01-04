interface CardDetailType {
  card: {
    id: number;
    title: string;
    contents: string;
    date: string;
    status: string;
    member: string;
  };
  hideFunction: () => void;
}

export default function CardDetail({ card, hideFunction }: CardDetailType) {
  const { title, contents, status, member } = card;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-stone-800/60 overflow-y-auto">
      <div className="relative max-w-2xl m-auto mt-20 bg-white rounded-lg shadow">
        <button
          type="button"
          className="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
          onClick={hideFunction}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="px-6 py-6">
          <form className="space-y-2" action="#">
            <input
              type="text"
              className="text-2xl font-medium w-11/12 text-gray-900 rounded-lg p-1 border border-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              value={title}
            />
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none">
                Date
              </span>
              <input
                type="datetime-local"
                className="font-light text-gray-900 rounded-lg border border-white p-1 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
              />
            </div>
            <div className="pl-2">
              <span className="w-28 inline-block font-light text-gray-900 select-none">
                Status
              </span>
              <select
                defaultValue={status}
                className="w-40 font-light text-gray-900 rounded-lg border border-white p-1 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
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
                className="w-40 font-light text-gray-900 rounded-lg border border-white py-1 px-2 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 text-sm"
                value={member}
              />
            </div>
            <textarea className="text-gray-900 rounded-lg py-1 px-2 w-full h-72 resize-none border border-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500">
              {contents}
            </textarea>
            <div className="flex justify-between">
              <button
                type="submit"
                className="rounded-lg border border-transparent bg-blue-700 py-2 px-4 ml-1 text-sm font-medium text-white shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Save
              </button>
              <button
                type="button"
                className="rounded-lg border border-transparent bg-red-600 py-2 px-4 ml-1 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
