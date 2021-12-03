import React, { useEffect } from 'react'
import { Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import FactCard from '../components/FactCard';
import { Fact } from '../types/Fact';
import { getFacts } from '../store/actions';
import { State } from '../store/reducers';

const SiteCard = styled.div`
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-items: start;
    justify-content: space-around;
`;

const Center = styled.div`
    text-align: center;
`;


const Facts = () => {
    const dispatch = useDispatch();
    const facts = useSelector<State, Fact[]>((state) => state.facts);
    const fetchFacts = () => dispatch(getFacts());
 
    useEffect(() => {
        dispatch(getFacts());
    },[dispatch]);

    return (
        <Center>
            <SiteCard>
                {facts.map((fact, i) => <FactCard key={i} text={fact.text} />)}
            </SiteCard>
            <Button type="primary" onClick={fetchFacts}>Load More</Button>
        </Center>
    );
}

export default Facts

