import "./App.css";
import TodoApp from "./TodoApp";
import Footer from "./Footer"

function App() {
	return (
		<>
			<div className="todoapp">
				<TodoApp />
			</div>
			<Footer />
		</>
	);
}

export default App;
