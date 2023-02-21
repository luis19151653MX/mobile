import React from "react";
import { VStack } from "native-base";

export default function Login() {
    //puede ser asi o con el import de sseState
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const Validate = () => {
        
    }
    const submit = () => {
        Validate() ? console.log("ok") : console.log("bad");

    }



    return (
        <VStack>
            <FormControl isRequired isInvalid >
                <FormControl.Label>Favorite framework</FormControl.Label>
                <Input p={2} placeholder="Is it react?" />
                <FormControl.HelperText>
                    We'll keep this between us.
                </FormControl.HelperText>
                <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
            </FormControl>

            <Button
                colorScheme="primary"
                onPress={submit}
            >
                Enviar
            </Button>

        </VStack>
    );
}