import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbTagProps {
    texto?: string
}

const TagEstilizada = styled.div`
    padding: 48px;
    color: white;
    background-color: rgba(235, 155, 0, 1);

    max-width: 164px;
    max-height: 84px;

     font-weight: 700;
    font-size: 24px;
    display: inline-block;
    font-family: sans-serif;
`



export const AbTag = ({texto}: AbTagProps) => {
    return(
        <TagEstilizada>
            {texto}
        </TagEstilizada>)
}