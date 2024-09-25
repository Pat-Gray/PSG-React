import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import CarouselDefault from './Components/Carousel';
import IntroText from './Components/IntroText';
import Testamonials from './Components/Testamonials';

export default function Home() {
  return (
    <div className="bg-font-blue">
      <div className="max-w-screen-xl mx-auto">
        <CarouselDefault />
        <IntroText />
        <hr className="border-b border-dark-blue border-solid border-opacity-100" />
        <Testamonials />
      </div>
    </div>
  );
}
