import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import music_data from "../../music-data.json";
import styles from "./MusicApp.style";
import SongCard from "../SongCard/SongCard";
import SearchBar from "../SearchBar/SearchBar";

const MusicApp = () => {
	const [list, setList] = useState(music_data);

	const renderSong = ({ item }) => <SongCard song={item} />;

	const renderSeparator = () => <View style={styles.separator} />;

	const handleSearch = (text) => {
		const filteredList = music_data.filter((song) => {
			const searchedText = text.toLowerCase();
			const currentTitle = song.title.toLowerCase();

			return currentTitle.indexOf(searchedText) > -1;
		});

		setList(filteredList);
	};

	return (
		<View style={styles.container}>
			<SearchBar onSearch={handleSearch} />
			<FlatList
				keyExtractor={(item) => item.id}
				data={list}
				renderItem={renderSong}
				ItemSeparatorComponent={renderSeparator}
			/>
		</View>
	);
};

export default MusicApp;
