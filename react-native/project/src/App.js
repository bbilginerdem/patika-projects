import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	FlatList,
	Text,
	View,
	ScrollView,
	Image,
	Dimensions,
} from "react-native";
// import Card from "./components/Card/Card";
import news_data from "./news_data.json";
import NewsCard from "./components/NewsCard";
import Banner from "./components/Banner";
import news_banner_data from "./news_banner_data.json";

function App() {
	const renderNews = ({ item }) => <NewsCard news={item} />;

	return (
		<SafeAreaView style={styles.container}>
			{/* <Card
				title="Arif Stark"
				text="Uzaylılar tarafından kaçırıldım. Evet tarafıdan."
			/>
			<Card
				title="Serbest"
				text="İlhami abi sen söyle, ben başka bir ilde miyim?"
			/>

			<Card title="Eddard Stark" text="Winter is coming..." /> */}
			<Text style={styles.headerText}>News</Text>
			<FlatList
				ListHeaderComponent={(item) => <Banner bannerNews={item} />}
				keyExtractor={(item) => item.u_id.toString()}
				data={news_data}
				renderItem={renderNews}
			/>
		</SafeAreaView>
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
