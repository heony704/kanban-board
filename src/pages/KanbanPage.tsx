import Header from '../components/Header';
import List from '../components/List';
import Card from '../components/Card';

export default function KanbanPage() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-y-scroll text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <Header />
      <div className="flex flex-grow justify-center px-10 pb-5 space-x-6">
        <List title="To Do">
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
        </List>
        <List title="Doing">
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
        </List>
        <List title="Done">
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
          <Card
            title="This is the title of the card for the thing that needs to be done."
            date="Dec 12"
            member="Thomas"
          />
        </List>
      </div>
    </div>
  );
}
