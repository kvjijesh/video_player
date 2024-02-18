
import { Card } from './Card';
import data from '../../data.js';

const PlayList = () => {

  return (
    <div className="w-full bg-white h-auto">
      <div className='max-w-[90%] mx-auto mt-2'>
        <button className="ml-3 bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-1 px-5 border border-blue-500 hover:border-transparent rounded">
          A-Z
        </button>
        <button className="bg-transparent m-2 hover:bg-blue-500 text-black font-semibold hover:text-white py-1 px-5 border border-blue-500 hover:border-transparent rounded">
          Z-A
        </button>
      </div>
      <div className="flex flex-wrap max-w-[90%] mx-auto justify-between">
        {data.categories[0].videos.map((video) => (
          <Card key={Math.random()} data={video} />
        ))}
      </div>
    </div>
  );
};

export default PlayList;
