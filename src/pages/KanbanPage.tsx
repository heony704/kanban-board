import Header from '../components/Header';
import CardList from '../components/CardList';

const issues = [
  {
    id: 1,
    title: 'first issue',
    date: 'Dec 2',
    status: 'DOING',
    member: 'seungheon',
    contents: 'hellol helleo h elh eoo',
  },
  {
    id: 2,
    title: 'first issue',
    date: 'Dec 2',
    status: 'DOING',
    member: 'seungheon',
    contents: 'hellol helleo h elh eoo',
  },
  {
    id: 3,
    title: 'first issue',
    date: 'Dec 2',
    status: 'DONE',
    member: 'seungheon',
    contents: 'hellol helleo h elh eoo',
  },
  {
    id: 4,
    title: 'first issue',
    date: 'Dec 2',
    status: 'TO_DO',
    member: 'seungheon',
    contents: 'hellol helleo h elh eoo',
  },
];

export default function KanbanPage() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-scroll text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <Header />
      <div className="flex flex-grow justify-center px-10 pb-5 space-x-6">
        <CardList
          title="To Do"
          cards={issues.filter(issue => issue.status === 'TO_DO')}
        />
        <CardList
          title="Doing"
          cards={issues.filter(issue => issue.status === 'DOING')}
        />
        <CardList
          title="Done"
          cards={issues.filter(issue => issue.status === 'DONE')}
        />
      </div>
    </div>
  );
}
