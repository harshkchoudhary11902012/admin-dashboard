import { Button, Center, Text } from "@mantine/core";
import React from "react";

const OBWelcome = ({ next }: OBPageProps) => {
    return (
        <React.Fragment>
            <h1>
                Welcome to{" "}
                <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    inherit
                >
                    Libratherm
                </Text>{" "}
                Data Logging System
            </h1>
            <Center>
                <Button
                    variant="gradient"
                    gradient={{ from: "blue", to: "cyan" }}
                    size="xl"
                    radius="xl"
                    onClick={() => next()}
                >
                    Let's Begin
                </Button>
            </Center>
        </React.Fragment>
    );
};

export default OBWelcome;
