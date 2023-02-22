import React from "react";
import { VStack, FormControl, Input, Button, useToast, Box } from "native-base";

export default function Login() {
    const toast = useToast();
    //puede ser asi o con el import de sseState
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const Validate = () => {
        return false;
    }

    const submit = () => {
        Validate() ?
            (
                console.log("ok"),
                toast.show({
                    description: "Hello world"
                })
            )
            :
            (
                console.log("bad"),
                toast.show({
                    render: () => {
                        return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                            Hello! Have a nice day
                        </Box>
                    }
                })
            )
    }



    return (
        <VStack>
            <FormControl isRequired isInvalid >
                <FormControl.Label>Favorite framework</FormControl.Label>
                <Input p={2} placeholder="Is it react?" style={{ color: "#000000" }} />
                <FormControl.HelperText>
                    We'll keep this between us.
                </FormControl.HelperText>
                <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
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