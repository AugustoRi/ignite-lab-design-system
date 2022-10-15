import "./styles/global.css";

export function App() {

  return (
    <div className="App">
      <h1 
        className="font-bold text-2xl text-gray-200"
      >
        Hello world
      </h1>
      <button 
        className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300"
      >
        Enviar
      </button>
    </div>
  )
}
