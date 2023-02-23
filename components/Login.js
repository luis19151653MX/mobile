import React, { useState } from "react";
import { VStack, FormControl, Input, Button, useToast, Box } from "native-base";

export default function Login() {
    const toast = useToast();
    //puede ser asi o con el import de sseState
    const [formData, setFormData] = useState({ nickname: undefined, password: '' })
    const [errorsData, setErrorsData] = useState({})

    //===
    const Validate = () => {
        //los ... son para ir concatenano los errores, esto se hace en los objetos {}
        if (formData.nickname === undefined) {
            setErrorsData({ ...errorsData, error: "Nickname is required" });
            return false;
        } else if (formData.nickname.length < 4) {
            //setErrorsData({});
            setErrorsData({ ...errorsData, error: "Nickname min length 4" });
            return false;
        }
        //setErrorsData({});
        return true;
    }

    const submit = () => {
        setErrorsData({});
        Validate() ?
            (
                setErrorsData({}),
                console.log("ok"),
                toast.show({
                    description: "Bienvenido " + formData.nickname
                })
            )
            :
            (
                console.log("bad"),
                toast.show({
                    render: () => {
                        return <Box bg="secondary.500" px="2" py="1" rounded="sm" mb={5}>
                            {errorsData.error}
                        </Box>
                    }
                })
            )
    }

    //isInvalid
    return (
        <VStack>
            <FormControl isRequired isInvalid={'error' in errorsData}>
                <FormControl.Label>Nickname</FormControl.Label>
                <Input p={2} w="80%" placeholder="Is it react?" style={{ color: "#000000" }} onChangeText={value => setFormData({ ...formData, nickname: value })} />

                {
                    'error' in errorsData ?
                        (
                            <FormControl.ErrorMessage>Advertencia: {errorsData.error}</FormControl.ErrorMessage>
                        )
                        :
                        (
                            <FormControl.HelperText>
                                Ingresa tus datos
                            </FormControl.HelperText>
                        )
                }

                <Button
                    bg="tema.5"
                    onPress={submit}
                >
                    Enviar
                </Button>
            </FormControl>

        </VStack>
    );
}