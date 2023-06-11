export default function LoginForm() {
  return (
    <form className='bg-white rounded-xl p-4'>
      <div className='mb-4'>
        <label htmlFor='email' className='block font-semibold text-lg'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value=''
          placeholder='Your email'
          className='bg-neutral-100 w-full border border-solid rounded-full py-1 px-3'
        />
      </div>
      <div className='mb-8'>
        <label htmlFor='password' className='block font-semibold text-lg'>
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value=''
          placeholder='Your password'
          className='bg-neutral-100 w-full border border-solid rounded-full p-1 px-3'
        />
      </div>
      <div>
        <button className='w-full rounded-full text-center text-lg border border-black border-solid py-1'>
          Continue &rarr;
        </button>
      </div>
    </form>
  );
}
