import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	FlatList,
	Text,
	View,
	ScrollView,
	Image,
	Dimensions,
	Button,
} from "react-native";
import Card from "./components/Card";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import Banner from "./components/Banner";
import news_banner_data from "./news_banner_data.json";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cafe from "./components/Cafe";

function CardScreen({ navigation }) {
	return (
		// <View style={styles.container}>
		// 	<Card
		// 		title="Arif Stark"
		// 		text="Uzaylılar tarafından kaçırıldım. Evet tarafıdan."
		// 	/>
		// 	<Card
		// 		title="Serbest"
		// 		text="İlhami abi sen söyle, ben başka bir ilde miyim?"
		// 	/>
		// 	<Card title="Eddard Stark" text="Winter is coming..." />)
		// </View>

		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text>Home Screen</Text>
			<Button
				title="Go to Cafe"
				onPress={() => navigation.navigate("Cafe")}
			/>
			<Text></Text>
			<Button
				title="Go to Details"
				onPress={() => navigation.navigate("Details")}
			/>
		</View>
	);
}

function DetailsScreen({ navigation }) {
	const renderNews = ({ item }) => <NewsCard news={item} />;
	const [counter, setCounter] = useState(0);

	function updateCounter() {
		setCounter(counter + 1);
	}

	return (
		<ScrollView>
			<Text style={styles.headerText}>News</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.navigate("Details")}
			/>
			<FlatList
				ListHeaderComponent={(item) => <Banner bannerNews={item} />}
				keyExtractor={(item) => item.u_id.toString()}
				data={news_data}
				renderItem={renderNews}
			/>

			<Text style={{ fontSize: 40 }}>Counter: {counter}</Text>
			<Button title="Update Counter" onPress={updateCounter}></Button>
			<Button
				title="Check Counter"
				onPress={() => console.log(counter)}
			></Button>
			<Text></Text>
			<Button
				title="Go to Home"
				onPress={() => navigation.navigate("CardScreen")}
			/>
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</ScrollView>
	);
}

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="CardScreen"
					component={CardScreen}
					options={{ title: "Overview" }}
				/>
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen name="Cafe" component={Cafe} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eceff1",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 50,
	},
});

export default App;
