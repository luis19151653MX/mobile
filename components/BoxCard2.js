import React from "react";
import {
  Pressable,
  Text,
  Box,
  HStack,
  AspectRatio,
  Image,
  Container,
  Heading,
} from "native-base";
import { LinearGradient } from 'expo-linear-gradient';


export default function BoxCard() {
  return (
    <Box alignItems="center" >
      <Pressable maxW="96" >
        {({ isHovered, isFocused, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? "#193329"
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
              <HStack alignItems="center" bg="#193329">
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

              <HStack alignItems="center" bg="#f0143f" >
                <Container p="3" >
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
              </HStack>

              <LinearGradient
                colors={['#193329', '#19FF29']}
                start={{ x: 0.0, y: 1}}
                end={{ x: 1, y: 5 }}
              >
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
                  <Container p="3" >
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
              </LinearGradient>

            </Box>
          );
        }}
      </Pressable>
    </Box>

  );
}