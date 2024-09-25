import EastRidge from '../../../Images/climb-images/petOnEastRidge.jpg';
import PatStetind from '../../../Images/climb-images/Climbing Stetind Norway.jpg';

const productArray = [
  {
    img: PatStetind,
    alt: 'Climbing on Stetind, Norways National Mountain',
    title: 'Mountaineering',
    description: 'Private Mountain Ascents, Mountaineering Courses and Rock Climbing Guiding',
  },
  {
    img: PatStetind,
    alt: 'Climbing on Stetind, Norways National Mountain',
    title: 'Mountaineering',
    description: 'Private Mountain Ascents, Mountaineering Courses and Rock Climbing Guiding',
  },
  {
    img: PatStetind,
    alt: 'Climbing on Stetind, Norways National Mountain',
    title: 'Mountaineering',
    description: 'Private Mountain Ascents, Mountaineering Courses and Rock Climbing Guiding',
  },
  {
    img: PatStetind,
    alt: 'Climbing on Stetind, Norways National Mountain',
    title: 'Mountaineering',
    description: 'Private Mountain Ascents, Mountaineering Courses and Rock Climbing Guiding',
  },
];

function mapProducts() {
  return productArray.map((el, index) => (
    <div key={index} className=" justify-center items-center w-full md:w-1/2 lg:w-1/2 ">
      <div className="relative max-w-lg m-5">
        <img src={el.img} alt={el.alt} className="w-full h-auto rounded-md drop-shadow-xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-30 rounded-lg p-4 hover:bg-opacity-50">
          <h3 className="text-2xl font-bold drop-shadow-xl hover:text-3xl">{el.title}</h3>
          <p className="mt-2 drop-shadow-xl hover:text-xl">{el.description}</p>
        </div>
      </div>
    </div>
  ));
}

export default function Product() {
  return <div className="flex flex-wrap">{mapProducts()}</div>;
}
