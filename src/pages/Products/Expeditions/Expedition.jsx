import ProductHeader from './../Components/ProductHeader';

import GeneralOverview from '../Components/GeneralOverview';
import { LuMountainSnow } from 'react-icons/lu';
import HansClimbing from '../../../Images/climb-images/HansIceClimbing.jpg';
import PointingmtCook from '../../../Images/climb-images/pointingInCookNp.jpg';

export default function Expedition() {
  return (
    <>
      <div className="bg-gray-100">
        <ProductHeader
          img={PointingmtCook}
          alt="Client ski touring on the  Grand plateau"
          title="Overseas Custom Trips & Expeditions"
          subtitle="Climbing | Skiing"
        />
      </div>
      <GeneralOverview
        icon={<LuMountainSnow />}
        title="Expeditions & custom trips"
        description="Embark on an unforgettable overseas ski expedition, designed to offer personalized, one-of-a-kind adventures in some of the most breathtaking mountain ranges around the world. Whether you’re seeking powder-filled descents in Japan, remote glacial skiing in the Arctic, or a once-in-a-lifetime ski and sail expedition in Antarctica, I’ll customize each trip to suit your experience, preferences, and goals. With a focus on flexibility and building upon your past adventures, I ensure each expedition challenges and excites you, unlocking the best ski experiences across the globe. Join me for an extraordinary journey to discover new peaks and pristine wilderness."
        img={HansClimbing}
        alt="ice climbing in Fiordland, NZ"
      />
    </>
  );
}
