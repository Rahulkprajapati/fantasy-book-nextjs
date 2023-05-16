// pages/alice.jsx

import Navigation from '../components/Navigation';

const Alice = () => (
  <article>
    <Navigation />

    <header>
      <h1>Alice in Wonderland</h1>
    </header>

    <img align="right" height="250px" src="https://source.unsplash.com/collection/wonderland/400x250" width="400" />

    <section>
      <header>
        <h2>Chapter 1 (excerpt)</h2>
      </header>
      <blockquote>Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, `and what is the use of a book,' thought Alice `without pictures or conversation?'</blockquote>
      <blockquote>So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.</blockquote>
      <p>- Lewis Carroll</p>
    </section>
  </article>
);

export default Alice;