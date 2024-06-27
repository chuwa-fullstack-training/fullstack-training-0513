import './App.css'

function App() {
  const handleClick = (number: number) => {
    console.log(`Button ${number} clicked!`);
  };

  return (
    <div className="phone-screen">
      <div className="status-bar">Status Bar</div>
      <div className="button-grid">
        {Array.from({ length: 20 }, (_, i) => (
          <button key={i + 1} onClick={() => handleClick(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App
