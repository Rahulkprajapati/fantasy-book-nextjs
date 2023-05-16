// pages/journey.jsx

import Navigation from '../components/Navigation';

const Journey = () => (
  <article>
    <Navigation />

    <header>
      <h1>A Journey to the Centre of the Earth</h1>
    </header>

    <img align="right" height="250px" src="https://source.unsplash.com/collection/journey/400x250" width="400" />

    <section>
      <header>
        <h2>Chapter 1 (excerpt)</h2>
      </header>
      <blockquote>Looking back to all that has occurred to me since that eventful day, I am scarcely able to believe in the reality of my adventures. They were truly so wonderful that even now I am bewildered when I think of them.</blockquote>
      <blockquote>My uncle was a German, having married my mother's sister, an Englishwoman. Being very much attached to his fatherless nephew, he invited me to study under him in his home in the fatherland. This home was in a large town, and my uncle a professor of philosophy, chemistry, geology, mineralogy, and many other ologies.</blockquote>
      <p>- Jules Verne</p>
    </section>
  </article>
);

export default Journey;