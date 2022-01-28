// Action
const LOAD = 'card/LOAD';

const initialState = {
  list: [
    {
      word: "하하",
      pinyin: "[하하]",
      def: "웃는 소리",
      ex_cn: "I'm haha",
      ex_ko: "나는 하하 웃었다."
    },
    {
      word: "하하2",
      pinyin: "[하하]2",
      def: "웃는 소리2",
      ex_cn: "I'm haha2",
      ex_ko: "나는 하하 웃었다2."
    }
  ]
}

// Action Creaters
export function loadBucket(card_list) {
  return {type: LOAD, card_list};
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'card/LOAD': {
      return state;
    }
    default:
      return state;
  }
}