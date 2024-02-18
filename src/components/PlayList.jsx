import { useState } from 'react';
import { Card } from './Card';
import data from '../../data.js';

const PlayList = () => {
  const [sortedData, setSortedData] = useState([...data.categories[0].videos]);
  const [isAscending, setIsAscending] = useState(true);

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (isAscending) {
        return titleA.localeCompare(titleB);

      } else {
        return titleB.localeCompare(titleA);
      }
    });

    setSortedData(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className="w-full bg-white h-auto">
      <div className='flex max-w-[90%] mx-auto mt-2'>
        <p className='text-xl ml-2'>Order By:</p>
        <button
          className="ml-3 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-1 px-5 border border-blue-500 hover:border-transparent rounded"
          onClick={handleSort}
        >
          Alphabeticaly
        </button>
      </div>
      <div className="flex flex-wrap max-w-[90%] mx-auto justify-between">
        {sortedData.map((video) => (
          <Card key={Math.random()} data={video} />
        ))}
      </div>
    </div>
  );
};

export default PlayList;
