import "./App.css";

function App() {
  return (
    <>
      <h1 className="mt-8 text-center uppercase text-purple-900">Login</h1>
      <p className="text-5xl text-purple-200">Play</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </form>
      <button
        className="rounded bg-blue-300 py-2 px-4 font-bold text-white hover:bg-blue-700"
        type="button"
      >
        Sumbit
      </button>
      <button
        className="rounded bg-blue-300 py-2 px-4 font-bold text-white hover:bg-blue-700"
        type="button"
      >
        Reset
      </button>
    </>
  );
}

export default App;
