import React, {useCallback, useState} from "react";
import AppImage from "./AppImage";
import styled from "styled-components"
import {AppLoading} from "./AppLoading";

const Container = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.12941176470588237);
    margin: 20px;
    border-radius: 10px;
    padding: 10px;
`;

export const AppContainer = ({children}) => {
    return <Container>
        {children}
    </Container>
};
