import React from 'react';
import { NativeBaseProvider, extendTheme, Box, Center, HStack } from 'native-base';
import CenterBox from  "./components/CenterBox";
import BoxCard2 from  "./components/BoxCard2";
import Login from "./components/Login";
import State from "./components/State";
import SelectMio from "./components/SelectExample";


export default function App() {
  const LinearGradient = require('expo-linear-gradient').LinearGradient;
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
      //dark blue 50
      fondo: {
        0: '#dbf4ff',
      }
    }
  });

  const config = {
    dependencies: {
      initialColorMode:'dark',
        'linear-gradient': LinearGradient
    }
};


  return (
    <NativeBaseProvider theme={theme} config={config}>
      <Center flex={1} px="3" p="2" bg={{
                linearGradient: {
                    colors: ['info.900', 'info.700'],
                    start: [0, 0],
                    end: [1, 0]
                }
            }}>
              <BoxCard2></BoxCard2>
      </Center>
    </NativeBaseProvider>
  );

}


/*import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  FlatList,
  useTheme
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import CustomTheme from "./components/CustomTheme";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              _web={{
                _text: {
                  fontFamily: "monospace",
                  fontSize: "sm",
                },
              }}
              px={2}
              py={1}
              _dark={{ bg: "blueGray.800" }}
              _light={{ bg: "blueGray.200" }}
            >
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Learn NativeBase
            </Text>
            <Text color="primary.500" underline fontSize={"xl"}>
              Luis Gutierrez. 19151653
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>

        <Center flex={1} p="3">
          <CustomTheme/>
        </Center>
      </Center>

    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

function ColorPalete() {
  const {
    colors
  } = useTheme();
  return <Box>
    <FlatList numColumns="5" data={Object.keys(colors["primary"])} renderItem={({
      item
    }) => <Box p="5" bg={`primary.${item}`} />} />
  </Box>;
}
function ColorPaletePink() {
  const {
    colors
  } = useTheme();
  return <Box>
    <FlatList numColumns="5" data={Object.keys(colors["secondary"])} renderItem={({
      item
    }) => <Box p="5" bg={`secondary.${item}`} />} />
  </Box>;
}
*/