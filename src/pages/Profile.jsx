import { IoCheckmarkSharp } from 'react-icons/io5';

export default function Profile() {
  return (
    <div className='h-screen p-3 bg-neutral-100 relative'>
      <div className='h-full rounded-3xl bg-white '>
        <div className='border-b p-8'>
          <h2 className='font-semibold tracking-wide text-4xl'>Profile</h2>
        </div>

        <div className='border-b px-8 py-6 flex items-center'>
          <p className='self-start text-lg font-semibold w-52'>
            Profile picture
          </p>
          <div className='flex items-center gap-8'>
            <div className='border border-solid border-black w-36 h-36 rounded-2xl overflow-hidden '>
              <img
                src=''
                alt='User Profile'
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <div className='border border-black border-solid rounded-full inline-block px-4 py-2 mb-3'>
                + Upload photo
              </div>
              <p>
                <span className='block'>
                  Supported formats: jpg, gif or png.
                </span>
                <span className='block'>Max file size: 500k</span>
              </p>
            </div>
          </div>
        </div>

        <div className='border-b px-8 py-6 flex items-center'>
          <p className='self-start text-lg font-semibold w-52'>Contact</p>
          <div className='w-1/3'>
            <label htmlFor='profile_name' className='block mb-2'>
              Full name <span aria-label='required'>*</span>
            </label>
            <input
              id='profile_name'
              type='text'
              placeholder='Type your name here'
              className='bg-neutral-100 border rounded-md px-2 py-1 w-full'
            />
          </div>
        </div>

        <div className='border-b px-8 py-6 flex items-center'>
          <p className='self-start text-lg font-semibold w-52'>Email address</p>
          <div className='flex justify-between items-center w-[calc(100%-13rem)]'>
            <a href='#' className='inline-block underline'>
              becomingadev@gmail.com
            </a>
            <button className='rounded-full px-6 text-sm py-2 border border-black border-solid'>
              Change email address
            </button>
          </div>
        </div>

        <div className='absolute bottom-10 ml-[15rem]'>
          <button className='rounded-full px-12 text-sm py-2 border border-black border-solid mr-10'>
            Cancel
          </button>
          <button className="rounded-full px-6 text-sm py-2 border border-black border-solid'">
            <IoCheckmarkSharp className='inline-block' size={15} /> Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
