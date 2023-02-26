import { Box,Button } from "native-base";
import React, { useState } from "react";

export default function Login(ingresar) {
    const LinearGradient = require('expo-linear-gradient').LinearGradient;
    return (
        <Box rounded="md" bg={{
            linearGradient: {
                colors: ['lightBlue.800', 'lightBlue.300'],
                start: [0, 0],
                end: [2, 0]
            }
        }}
         >
            <Button variant="unstyled" _text={{
                fontSize: 'md',
                fontWeight: 'medium',
                color: 'warmGray.50',
                textAlign: 'center'
            }} 
            onPress={()=>ingresar}>
                Ingresar
            </Button>
        </Box>
    );
}