import { Container, Group, Stack, Stepper } from "@mantine/core";
// import React from "react";
import OBPage1 from "./ob-page-1";
import OBPage2 from "./ob-page-2";
import OBPage3 from "./ob-page-3";
import OBPage4 from "./ob-page-4";
import OBPage5 from "./ob-page-5";
import OBPage6 from "./ob-page-6";
import OBWelcome from "./ob-welcome";
import React from "react";

const Onboarding = ({ onBoardingState, updateState }: OnBoardingProps) => {
    const nextStep = () => {
        if (onBoardingState === false) {
            updateState(1);
        } else if (onBoardingState === true || onBoardingState === 6) {
            updateState(true);
        } else {
            updateState(onBoardingState + 1);
        }
    };
    const prevStep = () => {
        if (onBoardingState !== true && onBoardingState !== false) {
            if (onBoardingState === 1) {
                updateState(false);
            } else {
                updateState(onBoardingState - 1);
            }
        }
    };
    const clientMode = () => {
        updateState(true);
    };

    console.log("Onboarding");

    return (
        <Stack style={{ height: "100vh" }}>
            <Group wrap="nowrap">
                <Container size={800} style={{ minWidth: 650 }}>
                    {onBoardingState === 1 ? (
                        <OBPage1 next={nextStep} prev={prevStep} clientMode={clientMode}></OBPage1>
                    ) : onBoardingState === 2 ? (
                        <OBPage2 next={nextStep} prev={prevStep}></OBPage2>
                    ) : onBoardingState === 3 ? (
                        <OBPage3 next={nextStep} prev={prevStep}></OBPage3>
                    ) : onBoardingState === 4 ? (
                        <OBPage4 next={nextStep} prev={prevStep}></OBPage4>
                    ) : onBoardingState === 5 ? (
                        <OBPage5 next={nextStep} prev={prevStep}></OBPage5>
                    ) : onBoardingState === 6 ? (
                        <OBPage6 next={nextStep} prev={prevStep}></OBPage6>
                    ) : (
                        <OBWelcome next={nextStep} prev={prevStep}></OBWelcome>
                    )}
                </Container>
                {onBoardingState !== true && onBoardingState !== false ? (
                    <Stack
                        align="center"
                        justify="center"
                        bg={"#000"}
                        c={"#f7f7f7"}
                        p={45}
                        h={"100vh"}
                    >
                        <Stepper
                            active={onBoardingState - 1}
                            orientation="vertical"
                            color="orange"
                            size="xs"
                        >
                            <Stepper.Step label="System Mode"></Stepper.Step>
                            <Stepper.Step label="Authentication"></Stepper.Step>
                            <Stepper.Step label="Database"></Stepper.Step>
                            <Stepper.Step label="Devices"></Stepper.Step>
                            <Stepper.Step label="Connection"></Stepper.Step>
                            <Stepper.Step label="Titles"></Stepper.Step>
                        </Stepper>
                    </Stack>
                ) : null}
            </Group>
        </Stack>
    );
};

export default Onboarding;
