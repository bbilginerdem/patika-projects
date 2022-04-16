import React, { useState } from 'react'
import {
    Text, Box, Center, Button, VStack, themeTools, useTheme, useColorMode, useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

export default function MainScreen() {
    const [checked, setChecked] = useState<boolean>(false)

    const handleCheckboxPress = () => {
        setChecked(prev => {
            return !prev
        })
    }

    return (
        <Center
            _dark={{ bg: 'blueGray.900' }}
            _light={{ bg: 'blueGray.50' }}
            px={4}
            flex={1}
        >
            <VStack space={5} alignItems="center">
                <Button onPress={handleCheckboxPress}>
                    <Box w="100px" h="100px">
                        <AnimatedCheckbox checked={checked}
                            highlightColor="#4444ff"
                            checkmarkColor="#ffffff"
                            boxOutlineColor="#4444ff" />
                    </Box>
                </Button>
                <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
                    <Text>Hello</Text>
                </Box>
                <ThemeToggle />
            </VStack>
        </Center>
    )
}