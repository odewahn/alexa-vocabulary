/*********************************************************************
||  Import required modules
*********************************************************************/
import { fromJS } from "immutable";

/*********************************************************************
||  Define the state tree
*********************************************************************/
const INITIAL_STATE = fromJS({
  terms: `python
golang
jupyter
kubernetes, k8s
c++, cpp, c plus cplus`
});

/*********************************************************************
||  The reducer
*********************************************************************/
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setVocabularyField":
      return state.set(action.key, action.val);
    default:
      return state;
  }
}

/*********************************************************************
||  Setters
*********************************************************************/
export function setVocabularyField(key, val) {
  return { type: "setVocabularyField", key: key, val: val };
}
