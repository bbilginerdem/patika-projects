import { useState } from "react";

const defaultItems = [
	{ name: "Item A" },
	{ name: "Item B" },
	{ name: "Item C" },
	{ name: "Item D" },
];

function Todo() {
	const [text, setText] = useState("");
	const [items, setItems] = useState(defaultItems);

	const addItem = () => {
		setItems((prev) => [...prev, { name: text }]);
		setText("");
	};

	return (
		<div>
			<input value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={addItem}>Add</button>
			<br />
			<br />
			{items.map((item, key) => (
				<div key={key}>{item.name}</div>
			))}
		</div>
	);
}

export default Todo;
