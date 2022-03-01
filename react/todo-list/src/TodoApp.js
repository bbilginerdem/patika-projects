import React, { Component } from "react";
import Items from "./Items";
import AddItems from "./AddItems";
import Footer from "./Footer";

export class TodoApp extends Component {
	state = {
		items: [{ id: 1, name: "Bilgin", age: "26" }],
	};
	deleteItems = (id) => {
		let items = this.state.items.filter((item) => {
			return item.id !== id;
		});
		this.setState({ items });
	};

	AddItem = (item) => {
		item.id = Math.random();
		let items = this.state.items;
		items.push(item);
		this.setState({ items });
	};

	render() {
		return (
			<>
				<div className="header">
					<h1>todos</h1>
					<AddItems AddItem={this.AddItem} />
				</div>
				<div>
					<Items
						items={this.state.items}
						deleteItems={this.deleteItems}
					/>
					<Footer />
				</div>
			</>
		);
	}
}

export default TodoApp;
