import React, { useState } from "react";
import { VStack, FormControl, Input, Button, useToast, Box } from "native-base";

export default function Login() {
    const toast = useToast();
    //puede ser asi o con el import de sseState
    const [formData, setData] = useState({nickname:'',password:''});
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        e.persist();
        setData({ ...formData, [e.target.name]: e.target.value });
      }

    //===
    const Validate = () => {
        //los ... son para ir concatenano los erroes, esto se hace en los objetos {}
        if (formData.nickname === undefined) {
            setErrors({ ...errors, nickname: "Nickname is required" });
            return false;
        }

        if (formData.nickname.length < 4) {
            setErrors({ ...errors, nickname: "Nickname min length 4" });
            return false;
        }
        return true;
    }


    const submit = () => {
        Validate() ?
            (
                console.log("ok"),
                toast.show({
                    description: { formData }
                })
            )
            :
            (
                console.log("bad"),
                toast.show({
                    render: () => {
                        return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                            Hello! Have a nice day {errors}
                        </Box>
                    }
                })
            )
    }

    //isInvalid
    return (
        <VStack>
            <FormControl isRequired isInvalid={'nickname' in errors} minLength={4} maxLength={8}>
                <FormControl.Label>Favorite framework</FormControl.Label>
                <Input p={2} placeholder="Is it react?" style={{ color: "#000000" }} onChangeText={value=>setData({...formData,nickname: value})} />

                {'nickname' in errors ?
                    (
                        <FormControl.ErrorMessage>{errors}</FormControl.ErrorMessage>
                    )
                    :
                    (
                        <FormControl.HelperText>
                            We'll keep this between us.
                        </FormControl.HelperText>
                    )}

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