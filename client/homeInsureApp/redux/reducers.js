import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";
import { ADD_ASSETS } from "./actions";
const initialState = {
  // name, item/type, picture64, structure type, valueBefore, afterPicture64
  Assets: [
    {
      id: 0,
      name: "myGarage",
      type: "Item",
      picture64: "abc",
      structureType: "Garage",
      valueBefore: "10393",
      afterPicture64: "xyz"
    },
    {
      id: 1,
      name: "piano",
      isItem: true,
      picture64: "qwer",
      type: "Item",
      structureType: null,
      valueBefore: "6300",
      afterPicture64: "asdf"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ASSETS:
      console.log("added assets in reducer");
      console.log(action.payload);
      return {
        ...state,
        Assets: action.payload
      };
    // case ADD_CLAIM_TO_ASSET:
    //     return {
    //         ...state,
    //         Assets: action.payload
    //     }
    default:
      console.log("default in reducer");
      return state;
  }
}
