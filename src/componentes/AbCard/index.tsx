import React, { ReactNode } from "react";
import styled from "styled-components";

export interface CardProps {
    children: ReactNode
}

const CardEstilizado = styled.div`
    width: 551px;
    max-height: 374px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 48px 32px 48px 48px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    @media (max-width: 1024px) {
        width: 725px;
        max-height: 266px;
        padding: 24px;
    }
    @media (max-width: 724px) {
        flex-direction: column;
        gap: 16px;
        width: 380px;
        max-height: 283px;
        padding: 16px;
    }
`

export const AbCard = ({children}: CardProps) => {
    return(
        <CardEstilizado>
            {children}
        </CardEstilizado>)
}