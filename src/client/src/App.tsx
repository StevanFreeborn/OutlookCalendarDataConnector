import './App.css';

function App() {
  function callAPI() {
    fetch('http://localhost:8001')
      .then(res => res.text())
      .then(text => console.log(text))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <button
        onClick={() => callAPI()}
        type='button'
      >
        Call API
      </button>
    </div>
  );
}

export default App;
