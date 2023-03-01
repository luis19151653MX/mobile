import React, { useState } from "react";
import { VStack, FormControl, Input, Icon, Divider, Text, useToast,Box } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import BoxGradient from "./BoxGradient";
import ButtonGradient from "./ButtonGradient";

export default function State() {

    const [formData, setFormData] = useState({ nickname: undefined, password: null });
    const [errorU, setErrorU] = useState("");
    const [errorP, setErrorP] = useState(null);

    const toast = useToast();

    const Validate = () => {
        //los ... son para ir concatenano los errores, esto se hace en los objetos {}
        if (formData.nickname === undefined) {
            setErrorU("Usuario es requerido");
            return false;
        } else if (formData.nickname.length < 4) {
            setErrorU("Usuario tamaño minimo 4");
            return false;
        } else setErrorU("");

        if (formData.password == null) {
            setErrorP("Contraseña es requerida");
            return false;
        } else if (formData.password != '12') {
            setErrorP("Contraseña incorrecta");
            return false;
        }
        return true;
    };

    function submit() {
        console.log(`errores : ${JSON.stringify(errorU)}`);
        console.log(`errores : ${JSON.stringify(errorP)}`);
        Validate() ?
            (
                setErrorU(""),
                setErrorP(null),
                console.log("ok"),
                toast.show({
                    render: () => {
                        return <Box bg="success.300" px="14" py="1" rounded="md" mb={5}>
                            <Text>Bienvenido {formData.nickname}</Text>
                        </Box>
                    }
                })
            )
            :
            (
                console.log("bad")
            )
    }

    const send_request=async()=>{
        console.log('ok',formData);
        try{
            const response=await fetch("http");
            const json= await response.json();
            console.log("json response:", json);
            return json;
        }catch(error){
            console.log(error);
        }

    }

    //isInvalid
    return (
        <VStack >
            <BoxGradient></BoxGradient>
            <Divider my={2}></Divider>
            <FormControl>
                <FormControl.Label _text={{ color: "warmGray.50", fontSize: "md" }} >Usuario</FormControl.Label>

                <Input
                isRequired
                    isInvalid={!(errorU === "")}
                    size="xl" p={2} w="80%"
                    placeholder="Usuario..."
                    style={{ color: "#000000" }}
                    onChangeText={value => setFormData({ ...formData, nickname: value })}
                    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={7} ml="2" color="emerald.600" />} />
                {
                    !(errorU === "") ?
                        (
                            <Text color="error.400" fontSize="sm">{errorU}</Text>
                        )
                        :
                        (
                            <FormControl.HelperText _text={{ color: "warmGray.50", fontSize: "sm" }} >
                                Ingresa tu nombre de usuario
                            </FormControl.HelperText>
                        )
                }

                <Input
                    isInvalid={errorP != null}
                    isRequired
                    size="xl" p={2} w="80%"
                    placeholder="Usuario..."
                    style={{ color: "#000000" }}
                    onChangeText={value => setFormData({ ...formData, password: value })}
                    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={7} ml="2" color="emerald.600" />} />
                {
                    errorP != null ?
                        (
                            <Text color="error.400" fontSize="sm">{errorP}</Text>
                        )
                        :
                        (
                            <FormControl.HelperText _text={{ color: "warmGray.50", fontSize: "sm" }} >
                                Ingresa tu contraseña
                            </FormControl.HelperText>
                        )
                }
                <Divider my={4}></Divider>
                <ButtonGradient ingresar={submit} />
                <Divider my={2} />
            </FormControl>
        </VStack>
    );
}