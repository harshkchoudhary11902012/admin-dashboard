import { Button, Group, Space, Title } from "@mantine/core";
import React from "react";

const OBPage1 = ({ next, prev }: OBPageProps) => {
    return (
        <React.Fragment>
            <Title ta="center">Page 2</Title>
            <Space h="lg"></Space>

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
