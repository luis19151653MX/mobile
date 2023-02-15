import { Center, VStack,Button} from "native-base";
import React from "react";


export default function CenterBox() {
    return (
        <Center bg="tema.5" p="20" w="100%" h="100%">
            <VStack space={2} alignItems={{
                base:"center",
                md:"flex-start"
            }}>
                <Button colorScheme="primary" onPress={()=>console.log("Presionado")}>
                    Boton
                </Button>
                <Button colorScheme="danger" onPress={()=>console.log("Presionado")}>
                    Boton
                </Button>
                <Button bg="tema.6" onPress={()=>console.log("Presionado")}>
                    Boton
                </Button>
            </VStack>
        </Center>
    );
}