import { Carousel } from '@material-tailwind/react';

export default function CarouselDefault() {
  return (
    <Carousel className=" bg-font-blue">
      <img
        src="/Guide Images/Pet1.webp"
        alt="Ski guiding on Tasman Glacier with Mt Cook behind"
        className="h-full w-full object-cover"
      />
      <img src="/Guide Images/Pet-on-ridge.jpg" alt="Ridge CLimbing in Norway" className="h-full w-full object-cover" />
      <img
        src="/public/Guide Images/Pet stetind.jpg"
        alt="Climbing Mount Stetind. Norway's National Mountain"
        className="h-full w-full object-cover"
      />
      <img src="/public/Guide Images/Guide Pet.jpg" alt="Petrouchka Guiding" className="h-full w-full object-cover" />
      <img
        src="/public/Guide Images/Pet Trogan.jpg"
        alt="Petrouchka Rock Climbing at Arapiles"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
