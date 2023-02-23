import { Box } from "native-base";
import React, { useState } from "react";

export default function Login() {
    const LinearGradient = require('expo-linear-gradient').LinearGradient;
    return (
            <Box bg={{
                linearGradient: {
                    colors: ['lightBlue.400', 'violet.800'],
                    start: [0, 0],
                    end: [1, 0]
                }
            }} p="12" rounded="xl" _text={{
                fontSize: 'md',
                fontWeight: 'medium',
                color: 'warmGray.50',
                textAlign: 'center'
            }}>
                This is a Box with Linear Gradient
            </Box>
    );
}