import React, { useEffect, useState } from "react";
import { VStack, FormControl, Input, Button, useToast, Box, Icon, Pressable, Divider, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import BoxGradient from "./BoxGradient";
import ButtonGradient from "./ButtonGradient";

export default function Login() {
    const LinearGradient = require('expo-linear-gradient').LinearGradient;

    const toast = useToast();
    const [show, setShow] = React.useState(false);

    //puede ser asi o con el import de sseState
    const [formData, setFormData] = useState({ nickname: undefined, password: null });
    const [errorsData, setErrorsData] = useState({});
    const [erroesVacios,setErroresVacios]=useState({});

    //useEffect(() => { }, [errorsData, toastError]);

    /*
    if ('error' in errorsData) {
            removeError();
        }
    */
   
        //'error' in errorsData ?removeError():console.log(errorsData)
    function removeError(){
        setErrorsData(current => {
            // 👇️ create copy of state object
            const copy = { ...current };

            // 👇️ remove salary key from object
            delete copy['error'];
            return copy;
        });
    };

    let toastSuccess = "Bienvenido " + formData.nickname;
    let toastError = "";

    const submit = () => {
        console.log(`errores : ${JSON.stringify(errorsData)}`);
        Validate() ?
            (
                setErrorsData({}),
                console.log("ok"),
                toast.show({
                    render: () => {
                        return <Box bg="success.300" px="14" py="1" rounded="md" mb={5}>
                            {toastSuccess}
                        </Box>
                    }
                })
            )
            :
            (
                console.log("bad"),
                toast.show({
                    render: () => {
                        return <Box bg="error.500" _text={{ color: "warmGray.50" }} px="14" py="1" rounded="sm" mb={5}>
                            {toastError}
                        </Box>
                    }
                })
            )

    };

    const Validate = () => {
        //los ... son para ir concatenano los errores, esto se hace en los objetos {}
        if (formData.nickname === undefined) {
            setErrorsData({ ...errorsData, error: "Usuario es requerido" });
            toastError = "Campo 'Usuario' requerido";
            return false;
        } else if (formData.nickname.length < 4) {
            setErrorsData({ ...errorsData, error: "Usuario tamaño minimo 4" });
            toastError = "Campo 'Usuario' minimo 4 caracteres";
            return false;
        }

        errorsData.hasOwnProperty('error') ?(removeError(),console.log("hola")):console.log(errorsData);
        
        
        if (formData.password == null) {
            setErrorsData({ ...errorsData, errorP: "Contraseña es requerida" });
            toastError = "Campo 'Contraseña' requerido";
            return false;
        } else if (formData.password != '12345') {
            setErrorsData({ ...errorsData, errorP: "Contraseña incorrecta" });
            toastError = "'Contraseña' incorrecta";
            return false;
        }
        return true;
    };

    //isInvalid
    return (
        <VStack >
            <BoxGradient></BoxGradient>
            <Divider my={2}></Divider>
            <FormControl isRequired isInvalid={'error' in errorsData} >
                <FormControl.Label _text={{ color: "warmGray.50", fontSize: "md" }} >Usuario</FormControl.Label>
                <Input
                    size="xl" p={2} w="80%"
                    placeholder="Usuario..."
                    style={{ color: "#000000" }}
                    onChangeText={value => setFormData({ ...formData, nickname: value })}
                    InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={7} ml="2" color="emerald.600" />} />
                {
                    'error' in errorsData ?
                        (
                            <FormControl.ErrorMessage _text={{ color: "error.400", fontSize: "sm" }}>Advertencia: {errorsData.error}</FormControl.ErrorMessage>
                        )
                        :
                        (
                            <FormControl.HelperText _text={{ color: "warmGray.50", fontSize: "sm" }} >
                                Ingresa tu nombre de usuario
                            </FormControl.HelperText>
                        )
                }

                <FormControl.Label _text={{ color: "warmGray.50", fontSize: "md" }} >Contraseña</FormControl.Label>
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
                    placeholder="Contraseña"
                    onChangeText={value => setFormData({ ...formData, password: value })} />
                {
                    'errorP' in errorsData ?
                        (
                            <FormControl.ErrorMessage _text={{ color: "error.400", fontSize: "sm" }}>Advertencia: {errorsData.errorP}</FormControl.ErrorMessage>
                        )
                        :
                        (
                            <FormControl.HelperText _text={{ color: "warmGray.50", fontSize: "sm" }}>
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