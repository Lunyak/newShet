import { createStore } from "redux";
import { useSelector } from "react-redux";

export let selectPosts = (state) => state.posts;

const stateDefault = {
  value: 100,
  count: 6,
  posts: [
    { id: 1, text: "привет как дела" },
    { id: 2, text: "какой умны статус" }
  ]
};

function counterReducer(state = stateDefault, action) {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "INCRIMENT":
      return { ...state, count: state.count + 1 };
    case "LOG":
      return console.log("вот так работает диспатч");
    default:
      return state;
  }
}

export let store = createStore(counterReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: "counter/incremented" });

store.dispatch({ type: "INCRIMENT" });

// store.dispatch({ type: "LOG" });

// store.dispatch({ type: 'counter/decremented' })

// class storeNew {
//   constructor(count) {
//     this.count = count;
//   }

//   posts = [
//     { id: 1, text: "привет как дела" },
//     { id: 2, text: "какой умны статус" }
//   ];

// bugs = {

// }

//   creatNewPost = (newText) => {
//     console.log(...this.posts);
//     this.posts = [...this.posts, { id: "3", text: newText }];
//   };

//   showContext() {
//     console.log(this);
//   }

//   incriment() {
//     this.count = this.count + 1;
//   }
// }

// export const store = new storeNew(5);

// словарь

// action
// { type: 'INCRIMENT', payload: { text: 'какой нибудь новый статус'}}
// объект с обязательным полем TYPE и не обязательны полем PAYLOAD

//reduser
//  торт - редусер это слой торта

// dispatch
