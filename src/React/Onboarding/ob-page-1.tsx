import { Button, Group, Paper, Select, Stack, Title } from "@mantine/core";
import React from "react";

const options: SystemMode[] = ["MASTER", "CLIENT"];

const OBPage1 = ({ next, prev }: OBPageProps) => {
    return (
        <>
            <Title order={1}>Let's get started harsh</Title>
            <Paper>
                <form>
                    <Stack>
                        <Select
                            label="System Mode"
                            data={options}
                            description={
                                <>
                                    <ul>
                                        <li>
                                            <b>Master:</b> Data loggers/Scanners are{" "}
                                            <b>Connected</b> here
                                        </li>
                                        <li>
                                            <b>Client:</b> This is a <b>Remote View</b> computer
                                        </li>
                                    </ul>
                                </>
                            }
                        ></Select>
                        * This cannot be changed later
                        <Group justify="center" gap="xl">
                            <Button size="md" color="red" onClick={() => prev()}>
                                Back
                            </Button>
                            <Button size="md" onClick={() => next()}>
                                Next
                            </Button>
                        </Group>
                    </Stack>
                </form>
            </Paper>
        </>
    );
};

export default OBPage1;
