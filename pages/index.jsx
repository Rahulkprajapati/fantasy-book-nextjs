// pages/index.jsx

import Navigation from '../components/Navigation';

const Home = () => (
  <article>
    <Navigation />

    <header>
      <h1>Welcome to my Favorite Books</h1>
    </header>

    <section>
      <header>
        <h2>Explore a few excerpts from my favorite books</h2>
      </header>
      <p>Read the first few lines of the books that shaped my childhood fantasies and inspired my adulthood.</p>
    </section>
  </article>
);

export default Home;