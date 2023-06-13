import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <div className='w-screen h-screen bg-neutral-100 flex items-center justify-between gap-x-8 px-24'>
        <div className='w-1/2 h-3/4 bg-white rounded-[3rem]'></div>
        <div className='w-2/6'>
          <div className='flex justify-center flex-col items-center mb-6'>
            <div className='rounded-full p-6 border border-solid w-10 h-10 flex justify-center items-center mb-1 text-xl'>
              AZ
            </div>
            <p className='text-4xl'>Organizo</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
