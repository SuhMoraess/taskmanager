import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx"; 
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-red-900">Gerenciador de Tarefas </h1>
      <Tasks />
      <AddTask />
    </>
  );
}

export default App;
