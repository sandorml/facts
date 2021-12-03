import { Fact } from "../types/Fact";
import { SetFacts, SET_FACTS } from "./actions";

export type State = {
    facts: Fact[],
};

const initialState: State = {
    facts: [],
};

export const reducer = (state: State = initialState, action: SetFacts): State => {
    switch (action.type) {
        case SET_FACTS:
            return { facts: [...state.facts, ...action.facts] };
        default:
            return state;
    }
};
