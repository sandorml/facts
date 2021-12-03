import React from 'react'
import { Card } from 'antd';
import styled from 'styled-components';
import { Fact } from '../types/Fact';


const StylizedCard = styled(Card)`
box-shadow: 0px 0px 4px 0px #88888891;
border-radius: 8px;
margin: 5px;
width: 250px;
`;

export const FactCard = (props: Fact) => {
    return (
        <StylizedCard bordered={false}>
            <p>{props.text}</p>
        </StylizedCard>);
}


