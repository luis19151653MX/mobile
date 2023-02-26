import { Box, Button, Pressable, Text } from "native-base";
import React, { useState } from "react";

export default function Login(props) {
    const LinearGradient = require('expo-linear-gradient').LinearGradient;
    return (
        <Pressable
            onPress={() => {
                    props.ingresar()
            }}

        >
            <Box p="2" rounded="md" bg={{
                linearGradient: {
                    colors: ['lightBlue.800', 'lightBlue.300'],
                    start: [0, 0],
                    end: [2, 0]
                }
            }}
                _text={{
                    fontSize: 'lg',
                    fontWeight: 'medium',
                    color: 'warmGray.50',
                    textAlign: 'center'
                }}
            >Ingresar
            </Box>
        </Pressable>


    );
}