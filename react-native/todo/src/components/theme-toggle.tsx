import React from 'react'
import { Text, HStack, Switch, useColorMode } from 'native-base'

export default function ThemeToggle() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch offTrackColor="white.100" onTrackColor="white.700" offThumbColor="grey.700" onThumbColor="white.200" isChecked={colorMode === 'light'} onToggle={toggleColorMode}></Switch>
            <Text>Light</Text>
        </HStack>
    )
}