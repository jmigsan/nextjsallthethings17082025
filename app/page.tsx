import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-between p-4 min-h-screen'>
      <h1 className='text-6xl font-bold'>Miguel</h1>
      <div>yo</div>
      <div>hey</div>
      <Link href='/anotherpage'>Another Page</Link>
    </div>
  );
};

export default Home;
