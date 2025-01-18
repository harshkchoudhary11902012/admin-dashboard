type UpdateOnBoardingState = (step: OnBoardingState) => void;

type OnBoardingProps = {
    onBoardingState: OnBoardingState;
    updateState: UpdateOnBoardingState;
};

type OBPageProps = {
    next: () => void;
    prev: () => void;
    clientMode?: () => void;
};
