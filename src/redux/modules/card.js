// Action
const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';

const initialState = {
  list: [
    {
      word: "하하",
      def: "[하하]",
      exstr: "웃는 소리",
    },
    {
      word: "하하2",
      def: "[하하]2",
      exstr: "웃는 소리2",
    },
    {
      word: "하하3",
      def: "[하하]3",
      exstr: "웃는 소리3",
    },   
  ]
}

// Action Creaters
export function loadCard(card_list) {
  return {type: LOAD, card_list};
}

export function createCard(card) {
  return {type: CREATE, card};
}

//middlewares


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'card/LOAD': {
      return state;
    }
    case 'card/CREATE': {
      return state;
    }
    default:
      return state;
  }
}