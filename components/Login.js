import React, { useState } from "react";
import { VStack, FormControl, Input, Button, useToast, Box, Icon, Pressable, Divider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function Login() {
    const toast = useToast();
    //puede ser asi o con el import de sseState
    const [formData, setFormData] = useState({ nickname: undefined, password: '' })
    const [errorsData, setErrorsData] = useState({})

    const [show, setShow] = React.useState(false);


    const Validate = () => {
        //los ... son para ir concatenano los errores, esto se hace en los objetos {}
        if (formData.nickname === undefined) {
            setErrorsData({ ...errorsData, error: "Usuario es requrido" });
            return false;
        } else if (formData.nickname.length < 4) {
            setErrorsData({ ...errorsData, error: "Usuario tamaño minimo 4" });
            return false;
        }
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
                <FormControl.Label>Usuario</FormControl.Label>
                <Input
                    size="xl" p={2} w="80%"
                    placeholder="User name..."
                    style={{ color: "#000000" }}
                    onChangeText={value => setFormData({ ...formData, nickname: value })}
                    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={7} ml="2" color="emerald.600" />} />
                {
                    'error' in errorsData ?
                        (
                            <FormControl.ErrorMessage>Advertencia: {errorsData.error}</FormControl.ErrorMessage>
                        )
                        :
                        (
                            <FormControl.HelperText>
                                Ingresa tu nombre de usuario
                            </FormControl.HelperText>
                        )
                }

                <FormControl.Label>Contraseña</FormControl.Label>
                {//mr y ml es margin left y right
                }
                <Input
                    size="xl" p={2} w="80%"
                    type={show ? "text" : "password"}
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
                                size={7} mr="2" color="emerald.600" />
                        </Pressable>}
                    placeholder="Contraseña" />
                {
                    'error' in errorsData ?
                        (
                            <FormControl.ErrorMessage>Advertencia: {errorsData.error}</FormControl.ErrorMessage>
                        )
                        :
                        (
                            <FormControl.HelperText>
                                Ingresa tu contraseña
                            </FormControl.HelperText>
                        )
                }
                <Divider my={4}></Divider>
                <Button
                bgColor={{
                    linearGradient: {
                      colors: ['lightBlue.300', 'violet.800'],
                      start: [0, 0],
                      end: [1, 0]
                    }
                  }}
                    onPress={submit}
                >
                    Enviar
                </Button>
            </FormControl>
        </VStack>
    );
}