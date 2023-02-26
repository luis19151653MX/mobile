import { Box } from "native-base";
import React, { useState } from "react";

export default function Login() {
    const LinearGradient = require('expo-linear-gradient').LinearGradient;
    return (
            <Box bg={{
                linearGradient: {
                    colors: ['info.700', 'info.900'],
                    start: [0, 0],
                    end: [1, 0]
                }
            }} p="8" rounded="xl" _text={{
                fontSize: '4xl',
                fontWeight: 'medium',
                color: 'warmGray.50',
                textAlign: 'center'
            }}>
                Bienvenido
            </Box>
    );
}