import React, { Component } from "react";

export class AddItems extends Component {
	state = {
		name: "",
		age: "",
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (e.target.name.value === "") {
			return false;
		} else {
			this.props.AddItem(this.state);
			this.setState({ name: "", age: "" });
		}
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					className="new-todo"
					type="text"
					placeholder="What needs to be done?"
					id="name"
					onChange={this.handleChange}
					value={this.state.name}
					autoFocus
				/>
			</form>
		);
	}
}

export default AddItems;
