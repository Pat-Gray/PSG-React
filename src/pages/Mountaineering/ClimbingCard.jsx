import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mountaineeringProducts } from './climbProductData';

const ClimbingCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function mapClimbingProducts() {
    return mountaineeringProducts.map((product, index) => {
      return (
        <div
          key={index}
          className={`w-full relative h-[500px] group overflow-hidden hover:shadow-sm rounded-md m-2 ${
            index === 0 || index === 3 ? 'col-span-2' : 'col-span-1'
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Background Image */}
          <Link to={product.link}>
            <img src={product.img} alt={product.alt} className="object-cover w-full h-full" />

            {/* Overlay with text */}
            <div>
              <div className=" absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-20 transition-all duration-1000 group-hover:scale-105 hover:bg-opacity-40">
                <h2 className="text-xl md:text-3xl font-bold transition-transform duration-500 ">{product.title}</h2>
                <a href="#" className="mt-4 text-sm md:text-base underline ">
                  &#10230; Click to find out more
                </a>
              </div>
              {/* Badge appears on hover */}

              <span
                className={`${product.badgeColor} absolute top-4 right-4 text-white text-sm px-4 py-1 rounded-full shadow-md ${hoveredIndex === index ? 'animate-bounce' : ''}`}
              >
                {product.badge}
              </span>
            </div>
          </Link>
        </div>
      );
    });
  }

  return <>{mapClimbingProducts()}</>;
};

export default ClimbingCard;
