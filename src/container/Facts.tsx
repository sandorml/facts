import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import styled from 'styled-components';
import FactCard from '../components/FactCard';
import { Fact } from '../types/Fact';

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
    const [facts, setFacts] = useState<Fact[]>([]);

    const fetchFacts = () => fetch("https://cat-fact.herokuapp.com/facts/random?amount=10").then((resp) => resp.json()).then((resp) => setFacts((oldFacts) => [...oldFacts, ...resp as Fact[]])).catch();

    useEffect(() => {
        fetchFacts();
    }, []);

    return (
        <Center>
            <SiteCard>
               {facts.map((fact, i) => <FactCard key={i} text={fact.text}  />)}
            </SiteCard>
            <Button type="primary" onClick={fetchFacts}>Load More</Button>
        </Center>
    );
}

export default Facts

