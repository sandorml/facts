import { Dispatch } from "react";
import { Fact } from "../types/Fact"

export const SET_FACTS = 'SET_FACTS';

export interface SetFacts {
    type: typeof SET_FACTS,
    facts: Fact[]
}

export const setFacts = (facts: Fact[]): SetFacts => {
    return { type: SET_FACTS, facts }
}

export const getFacts = (amount: number = 10) => {
    return (dispatch: Dispatch<SetFacts>) => {
        fetch(`https://cat-fact.herokuapp.com/facts/random?amount=${amount}`).then((resp) => resp.json()).then((json) => dispatch(setFacts(json as Fact[]))).catch();
    };
}