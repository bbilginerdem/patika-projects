import React from "react";
import { ScrollView, Image } from "react-native";
import styles from "./Banner.style";
import news_banner_data from "../../news_banner_data.json";

const Banner = ({ bannerNews }) => {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator>
			{news_banner_data.map((bannerNews) => (
				<Image
					key={bannerNews.id}
					style={styles.banner_image}
					source={{ uri: bannerNews.imageUrl }}
				/>
			))}
		</ScrollView>
	);
};

export default Banner;
