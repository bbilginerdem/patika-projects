import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	inner_container: {
		flex: 1,
		padding: 10,
		justifyContent: "center",
	},
	title: { fontWeight: "bold", color: "black", fontSize: 27 },
	info_container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	year: { marginLeft: 10, color: "grey", fontWeight: "bold" },
	sold_out_container: {
		borderWidth: 1,
		borderColor: "red",
		padding: 5,
		borderRadius: 5,
		justifyContent: "center",
	},
	sold_out_title: {
		color: "red",
		fontSize: 12,
	},
	content_container: {
		flexDirection: "row",
	},
	album: {
		flex: 1,
	},
});
