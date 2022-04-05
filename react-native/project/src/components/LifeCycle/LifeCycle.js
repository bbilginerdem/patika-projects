import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Button } from "react-native";

function LifeCycle() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(100);
    
    useEffect(() => {console.log('xd') },[number]);

	return (
		<SafeAreaView>
			<Text>LifeCycle</Text>
			<Text>Number: {number}</Text>
			<Text>Counter: {counter}</Text>
			<Button title="Up!" onPress={() => setNumber(number + 1)} />
			<Button title="Update Counter!" onPress={() => setCounter(counter + 100)} />
		</SafeAreaView>
	);
}

export default LifeCycle;
