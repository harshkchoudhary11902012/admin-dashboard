import { Button, Group, Paper, Select, Space, Title } from "@mantine/core";
// import { useForm } from "@mantine/form";
import React from "react";

const options: SystemMode[] = ["MASTER", "CLIENT"];

const OBPage1 = ({ next, prev }: OBPageProps) => {
    // const form = useForm({
    //     initialValues: {
    //         mode: "MASTER",
    //     },
    // });

    return (
        <React.Fragment>
            <Title ta="center">Let's get started</Title>
            <Space h="lg"></Space>
            <Paper p="xl" shadow="lg" mb="md">
                <form>
                    <Select
                        label="System Mode"
                        data={options}
                        // {...form.getInputProps("mode")}
                        description={
                            <React.Fragment>
                                <ul>
                                    <li>
                                        <b>Master:</b> Data loggers/Scanners are <b>Connected</b>{" "}
                                        here
                                    </li>
                                    <li>
                                        <b>Client:</b> This is a <b>Remote View</b> computer
                                    </li>
                                </ul>
                            </React.Fragment>
                        }
                    ></Select>
                </form>
                * This cannot be changed later
            </Paper>

            <Group justify="center" gap="xl">
                <Button size="md" color="red" onClick={() => prev()}>
                    Back
                </Button>
                <Button size="md" color="green" onClick={() => next()}>
                    Next
                </Button>
            </Group>
        </React.Fragment>
    );
};

export default OBPage1;
