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
    default:
      return state;
  }
}
