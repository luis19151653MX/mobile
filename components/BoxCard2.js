import React from "react";
import {Pressable,
    Text,
    Box,
    HStack,
    Spacer,
    Flex,
    Badge,
    Center,
    NativeBaseProvider,
    AspectRatio,
    Image,
    Container,
    Heading,} from "native-base";


const img1 = require('../assets/coche_electrico.png');
const img2 = require('../assets/favicon.png');
const img3 = require('../assets/cd.webp');
const imagenes = { img1, img2, img3 };


export default function BoxCard() {
    return (
        <Box alignItems="center">
      <Pressable maxW="96">
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? 'primary.50'
                  : isHovered
                  ? 'coolGray.200'
                  : 'coolGray.100'
              }
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
              p="5"
              rounded="8"
              shadow={3}
              borderWidth="1"
              borderColor="coolGray.300">
              <HStack alignItems="center">
                <AspectRatio
                  ratio={{
                    base: 3 / 4,
                    md: 9 / 10,
                  }}
                  height={{
                    base: 200,
                    md: 400,
                  }}>
                  <Image
                    resizeMode="cover"
                    source={{
                      uri: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
                    }}
                    alt="Picture of a Flower"
                  />
                </AspectRatio>
                <Container p="3">
                  <Heading>
                    A component library for the
                    <Text color="emerald.500"> React Ecosystem</Text>
                  </Heading>
                  <Text mt="3" fontWeight="medium">
                    NativeBase is a simple, modular and accessible component
                    library that gives you building blocks to build you React
                    applications.
                  </Text>
                </Container>
              </HStack>
              
              <Text
                color="coolGray.800"
                mt="3"
                fontWeight="medium"
                fontSize="xl">
                Marketing License
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                {isFocused ? (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    textDecorationLine="underline"
                    color="darkBlue.600"
                    alignSelf="flex-start">
                    Read More
                  </Text>
                ) : (
                  <Text
                    mt="2"
                    fontSize={12}
                    fontWeight="medium"
                    color="darkBlue.600">
                    Read More
                  </Text>
                )}
              </Flex>
            </Box>
          );
        }}
      </Pressable>
    </Box>
        
    );
}