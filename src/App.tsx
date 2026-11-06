import Greeting from './components/Greeting';
import Counter from './components/Counter';

// Display both checkpoint solutions so they can be tested in the browser.
function App() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Building React Apps with TypeScript</h1>
      <section>
        <h2>Code 01 — Greeting</h2>
        <Greeting name="React Developer" />
      </section>
      <section>
        <h2>Code 02 — Counter</h2>
        <Counter />
      </section>
    </main>
  );
}

export default App;
