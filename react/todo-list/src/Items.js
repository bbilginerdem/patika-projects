import React, { useState } from "react";

function Items(props) {
	const [checkedItem, setCheckedItem] = useState(true);
	const { items, deleteItems } = props,
		length = items.length;

	const listItems = length ? (
		items.map((item) => {
			return (
				<section className="main">
					<ul className="todo-list">
						<li className={`${checkedItem ? "completed" : ""}`}>
							<div className="view" key={item.id}>
								<input
									className="toggle"
									type="checkbox"
									checked={checkedItem}
									onChange={() => {
										setCheckedItem(!checkedItem);
									}}
								/>
								<label>{item.name}</label>
								<button
									className="destroy"
									onClick={() => deleteItems(item.id)}
								>
								</button>
							</div>
						</li>
					</ul>
				</section>
			);
		})
	) : (
		<h2>There are no Items!</h2>
	);
	return (
		<section className="main">
			<input
				property="toggleAll"
				id="toggle-all"
				class="toggle-all"
				type="checkbox"
			/>
			<label for="toggle-all" mv-action="set(done, !toggleAll)">
				Mark all as complete
			</label>
			{listItems}
		</section>
	);
}

export default Items;
