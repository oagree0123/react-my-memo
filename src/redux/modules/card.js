import { db } from '../../firebase';
import { 
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from 'firebase/firestore';


// Action
const LOAD = 'card/LOAD';
const CREATE = 'card/CREATE';
const UPDATE = 'card/UPDATE';
const COMPLETE = 'card/COMPLETE';
const DELETE = 'card/DELETE';

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

export function updateCard(card_index) {
  return {type: UPDATE, card_index};
}

export function completeCard(card_index) {
  return {type: COMPLETE, card_index};
}

export function deleteCard(card_index) {
  return {type: DELETE, card_index};
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

export const createCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "card"), card);
    const card_data = { id: docRef.id, ...card };

    dispatch(createCard(card_data));
  }
}

export const completeCardFB = (card_id, card_completed) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "card", card_id);
    if(card_completed === false) {
      await updateDoc(docRef, {completed: true})
    } else if (card_completed === true) {
      await updateDoc(docRef, {completed: false})
    }

    const _card_list = getState().card.list;
    const card_index = _card_list.findIndex((v) => {
      return v.id === card_id;
    });

    dispatch(completeCard(card_index));
  }
}

export const deleteCardFB = (card_id) => {
  return async function (dispatch, getState) {
    if(!card_id) {
      window.alert("아이디가 없습니다!");
      return;
    }
    const docRef = doc(db, "card", card_id);
    await deleteDoc(docRef);

    const _card_list = getState().card.list;
    const card_index = _card_list.findIndex((V) => {
      return V.id === card_id;
    });

    dispatch(deleteCard(card_index));
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
    case 'card/COMPLETE': {
      const new_card_list = state.list.map((v, i) => {
        if(parseInt(action.card_index) === i) { 
          if(v.completed === true) {
            return {...v, completed: false};
          } else {
            return {...v, completed: true};
          }
        }else {
          return v;
        }
      });

      return {...state, list: new_card_list};
    }
    case 'card/DELETE': {
      const new_card_list = state.list.filter((v, i) => {
        return parseInt(action.card_index) !== i;
      });
      return {...state, list: new_card_list};
    }
    default:
      return state;
  }
}