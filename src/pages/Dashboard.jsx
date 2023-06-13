import SearchBar from '../components/SearchBar';
import Calendar from '../components/Calendar';
import Task from '../components/Task';
import Category from '../components/Category';
import Track from '../components/Track';
import Comment from '../components/Comment';
import AddWidget from '../components/AddWidget';

export default function Dashboard() {
  return (
    <div className='h-screen bg-neutral-200'>
      <div className='h-screen p-2 grid grid-cols-9 grid-rows-[1fr_6fr_6fr] gap-3'>
        <SearchBar className='col-start-1 col-end-10' />
        <Calendar className='col-start-1 col-span-3 border border-solid border-black' />
        <Task className='col-start-4 col-span-4 border border-solid border-black' />
        <Comment className='col-end-10 col-span-2 border border-solid border-black' />
        <Category className='col-start-1 col-span-3 border border-solid border-black' />
        <Track className='col-start-4 col-span-4 border border-solid border-black' />
        <AddWidget className='col-end-10 col-span-2 border border-solid border-black' />
      </div>
    </div>
  );
}
