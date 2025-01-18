import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import React, { useState } from "react";

import Onboarding from "./React/Onboarding/onboarding";

const App = () => {
    const [onBoardingState, setOnBoardingState] = useState<OnBoardingState>(false);

    return (
        <React.StrictMode>
            <MantineProvider>
                {/* <BaseApp></BaseApp> */}
                <Onboarding
                    onBoardingState={onBoardingState}
                    updateState={setOnBoardingState}
                ></Onboarding>
            </MantineProvider>
        </React.StrictMode>
    );
};

createRoot(document.getElementById("root")).render(<App />);
