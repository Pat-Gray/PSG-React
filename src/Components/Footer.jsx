import IFMGA from '../../public/Logo/IFMGA.png';
import NZMGA from '../../public/Logo/NZMGA.png';

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-font-blue flex items-center">
      <p className="text-xs">© 2024 Petrouchka Steiner-Grierson</p>
      <img className=" ml-auto  w-auto h-16" src={IFMGA} alt="IFMGA Logo" />
      <img className="  w-auto h-16" src={NZMGA} alt="NZMGA logo" />
      <button
        class="footer"
        id="contact-btn"
        className="text-xs ml-2 mr-2 bt-2 mb-2 bg-green-500 text-white p-3 rounded-md hover:bg-green-400 hover:p-4 hover:font-semibold "
      >
        Contact me today
      </button>
    </footer>
  );
}
