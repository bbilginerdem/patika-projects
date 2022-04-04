import React, { useState } from "react";
import {
	SafeAreaView,
	Text,
	View,
	Button,
	FlatList,
	Switch,
} from "react-native";

const data = [
	{ id: 0, name: "cafe.exe", isFavorite: true },
	{ id: 1, name: "KafaKafa", isFavorite: false },
	{ id: 2, name: "BugG", isFavorite: false },
	{ id: 3, name: "Rock`n Code", isFavorite: true },
	{ id: 4, name: "do(drink)", isFavorite: false },
	{ id: 5, name: "esc", isFavorite: false },
];

function Cafe() {
	const [cafeList, setCafeList] = useState;
	return (
		<SafeAreaView>
			<Switch />
			<FlatList />
		</SafeAreaView>
	);
}

export default Cafe;
