import React, { useContext } from "react";
import styled from "styled-components";
import { EmptyButton } from "../../styled-components/Reusables";
import { useHistory } from "react-router-dom";
import { SolutionEditorContext } from "../../context/SolutionEditorContextProvider";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: auto;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        width: 80%;
    }

    & div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
    }

    & p,
    button {
        margin: 0.5rem;
    }
`;

interface Props {
    link: string;
    onSave: Function;
}

const ActionButtons = (props: Props) => {
    const history = useHistory();

    const { dojoId } = useContext(SolutionEditorContext);

    const goToDojoPage = () => {
        window.open(props.link, "_blank");
    };

    const goToSolutions = () => {
        history.push(`/solutions/${dojoId}`);
    };

    return (
        <StyledWrapper>
            <EmptyButton onClick={goToDojoPage} id="dojo-link-btn">
                Attempt
            </EmptyButton>
            <EmptyButton onClick={() => props.onSave()} id="save-solution-btn">
                Save solution
            </EmptyButton>
            <EmptyButton onClick={() => goToSolutions()} id="unlock-solutions-btn">
                Unlock solutions
            </EmptyButton>
        </StyledWrapper>
    );
};

export default ActionButtons;
