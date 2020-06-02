import React, { useContext, useEffect, useState } from "react";
import { Container, EmptyButton } from "../../styled-components/Reusables";
import { DojoContext } from "../../context/DojoContextProvider";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { SolutionEditorContext } from "../../context/SolutionEditorContextProvider";

const SuccessContainer = styled(Container)`
    text-align: center;
    justify-content: center;

    & span {
        color: #dc3545;
    }

    & button {
        margin: 1rem 2rem;
    }
`;

const PostSucess = () => {
    const { language } = useContext(SolutionEditorContext);

    const { id } = useParams();

    const { getTitleById } = useContext(DojoContext);

    const [title, setTitle] = useState<undefined | string>();

    const history = useHistory();

    useEffect(() => {
        getTitleById(id).then((response: string) => {
            setTitle(response);
        });
    });

    const goNew = () => {
        history.push("/dojos");
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <SuccessContainer>
            <h3>
                Congrats, you have sucessfully saved your solution for <span>{title}</span> in <span>{language}.</span>
            </h3>
            <div>
                <EmptyButton onClick={goBack} id="back-todojo-btn">
                    Back to dojo
                </EmptyButton>
                <EmptyButton onClick={goNew} id="back-tolist-btn">
                    Try another
                </EmptyButton>
            </div>
        </SuccessContainer>
    );
};

export default PostSucess;
