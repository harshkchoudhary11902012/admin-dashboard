import { Button, Center, Stack, Text, Image } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";
import Logo from "../../logo2.png";

const OBWelcome = ({ next }: OBPageProps) => {
    return (
        <Center h={550}>
            <Stack align="center" justify="center" gap={"xl"}>
                <Image src={Logo} w={450} h={100} />
                <Text fz={48} fw={600} ta={"center"}>
                    Welcome to the Renovaite AI
                </Text>
                <Button color={"#209f9e"} mt={25} radius={32} h={48} onClick={() => next()}>
                    Get Started {<IconArrowRight />}
                </Button>
            </Stack>
        </Center>
    );
};

export default OBWelcome;
