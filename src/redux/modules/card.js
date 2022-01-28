import { db } from '../../firebase';
import { 
  collection,
  doc,
  getDocs
} from 'firebase/firestore';


// Action
const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';

const initialState = {
  list: [
    /* {
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
    }, */   
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
export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "card"));
    let card_list = [];

    card_data.forEach((v) => {
      card_list.push({id: v.id, ...v.data()});
    });

    dispatch(loadCard(card_list));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'card/LOAD': {
      return {list: action.card_list};
    }
    case 'card/CREATE': {
      const new_card_list = [...state.list, action.card];
      return {...state, list: new_card_list};
    }
    default:
      return state;
  }
}