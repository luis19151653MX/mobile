import { Box,Button } from "native-base";
import React, { useState } from "react";

export default function Login() {
    const LinearGradient = require('expo-linear-gradient').LinearGradient;
    return (
        <Box rounded="md" bg={{
            linearGradient: {
                colors: ['lightBlue.300', 'violet.800'],
                start: [0, 0],
                end: [1, 0]
            }
        }}>
            <Button variant="unstyled"  >
                Enviar grad
            </Button>
        </Box>
    );
}