import './App.css';
import { Card } from 'flowbite-react';

function App() {
  return (
    <>
    <div className="w-100 bg-blue-700">OKE MASUK</div>
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-red-500 dark:text-white ">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
    </>
  );
}

export default App;
