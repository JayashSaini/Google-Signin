import Signin from './Signin'; // Assuming Signin component is imported correctly

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Sign in with Google:</h2>
      <Signin />
    </div>
  );
}

export default Home;
