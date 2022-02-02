import { db } from '../../firebase';
import { 
  collection,
  getDocs,
} from 'firebase/firestore';


// Action
const EDIT = 'edit/EDIT';

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
export function editCard(card_list) {
  return {type: EDIT, card_list};
}


//middlewares
export const editCardFB = (card_id) => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "card"));
    let card_list = [];

    card_data.forEach((v) => {
      card_list.push({id: v.id, ...v.data()});
    });

    dispatch(editCard(card_list));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'edit/EDIT': {
      return {list: action.card_list};
    }
    default:
      return state;
  }
}