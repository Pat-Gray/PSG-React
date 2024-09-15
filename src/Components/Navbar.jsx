import { useState } from 'react';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(true);

  function toogle() {
    setDropdown((preState) => !preState);
  }

  <nav>
    <ul>
      <li>Mountaineering & Climbing</li>
      <li>Ski Touring</li>
      <li>Overseas & Expeditions</li>
      <li>FAQ</li>
      <li>Contact</li>
    </ul>
  </nav>;
}
