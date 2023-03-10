import React from 'react';
import { NativeBaseProvider, extendTheme, Box } from 'native-base';

export default function () {
    const theme = extendTheme({
        colors: {
            // Add new color
            tema: {
                0: 'black',
                1: 'white',
                2: '#a8a29e',
                3: '#78716c',
                4: '#1a91ff',
                5: '#0e7490',
                6: '#164e63',
            },
            tema2:{
                0: '#a8a29e',
            }
        },

        config: {
            // Changing initialColorMode to 'dark'
            initialColorMode: 'dark',
        },
    });
    return (
        <NativeBaseProvider theme={theme}>
            <Box bg="tema.0" p="4" />
            <Box bg="tema.1" p="4" />
            <Box bg="tema.2" p="4" />
            <Box bg="tema.3" p="4" />
            <Box bg="tema.4" p="4" />
            <Box bg="tema.5" p="4" />
            <Box bg="tema.6" p="4" />
            <Box>
                <Box alignSelf="center" // bg="primary.500"
                    _text={{
                        fontSize: "md",
                        fontWeight: "medium",
                        color: "warmGray.50",
                        letterSpacing: "lg"
                    }} bg={["red.400", "blue.400"]}>
                    This is a Box
                </Box>
            </Box>;
        </NativeBaseProvider>
    );

}