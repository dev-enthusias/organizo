import { GoMail } from 'react-icons/go';
import { MdFace2 } from 'react-icons/Md';

export default function SearchBar({ className }) {
  return (
    <div
      className={`${className} flex justify-between items-center bg-white rounded-full overflow-hidden px-3 py-6`}
    >
      <div className='w-2/6'>
        <input
          type='text'
          placeholder='Search'
          className='bg-neutral-100 rounded-full px-3 py-1 focus:outline-0 w-full'
        />
      </div>
      <div className='flex justify-between items-center gap-4'>
        <button className='border border-solid border-black py-1 px-3 rounded-full mr-2'>
          + New task
        </button>
        <GoMail size={30} />
        <div className='border-solid border border-black rounded-full p-2 bg-brown'>
          <MdFace2 size={15} />
        </div>
      </div>
    </div>
  );
}
