import Header from '../components/Header';
import CardList from '../components/CardList';

export default function KanbanPage() {
  const issues = [
    {
      id: 1,
      title: 'first issue',
      contents: 'test contents',
      status: 'DOING',
      date: 'Dec 22',
      member: 'cats',
    },
    {
      id: 2,
      title: 'second issue',
      contents: 'test contents',
      status: 'DOING',
      date: 'Dec 22',
      member: 'cats',
    },
    {
      id: 3,
      title: 'third issue',
      contents: 'test contents',
      status: 'DOING',
      date: 'Dec 22',
      member: 'cats',
    },
    {
      id: 4,
      title: 'fourth issue',
      contents: 'test contents',
      status: 'DONE',
      date: 'Dec 22',
      member: 'cats',
    },
    {
      id: 5,
      title: 'fifth issue',
      contents: 'test contents',
      status: 'TO_DO',
      date: 'Dec 22',
      member: 'cats',
    },
  ];

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
