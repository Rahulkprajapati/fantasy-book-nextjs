// components/Navigation.jsx

import Link from 'next/link';

const Navigation = () => (
  <nav>
    <Link href='/'><a>Home</a></Link>
    <Link href='/alice'><a>Alice in Wonderland</a></Link>
    <Link href='/peter'><a>Peter & Wendy</a></Link>
    <Link href='/journey'><a>A Journey to the Centre of the Earth</a></Link>
  </nav>
);

export default Navigation;