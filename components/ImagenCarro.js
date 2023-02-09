import { AspectRatio, Box, Container, Image } from "native-base";
import React from "react";


export default function ImagenCarro() {
    return (
        <Container>

            <AspectRatio ratio={{
                base: 3 / 4,
                md: 9 / 10
            }} height={{
                base: 200,
                md: 400
            }}>
                <Image resizeMode="cover" source={{
                    uri: "https://images.vexels.com/media/users/3/224185/isolated/preview/357e905b6b7309dc770781c0edfef2e8-logotipo-geometrico-de-coche-electrico.png"
                }} alt="Picture of an car" />
            </AspectRatio>
            <AspectRatio ratio={{
                base: 3 / 4,
                md: 9 / 10
            }} height={{
                base: 200,
                md: 400
            }}>
                <Image resizeMode="cover" source={{
                    uri: "https://images.vexels.com/media/users/3/224185/isolated/preview/357e905b6b7309dc770781c0edfef2e8-logotipo-geometrico-de-coche-electrico.png"
                }} alt="Picture of an car" />
            </AspectRatio>
        </Container>
    );
}
