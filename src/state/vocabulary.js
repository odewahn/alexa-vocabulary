/*********************************************************************
||  Import required modules
*********************************************************************/
import { fromJS } from "immutable";
var beautify = require("json-beautify");

/*********************************************************************
||  Define the state tree
*********************************************************************/
const INITIAL_STATE = fromJS({
  name: "vocabularyName",
  vocabulary: "",
  terms: `python
go, golang
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

export function setParsed() {
  return (dispatch, getState) => {
    var lines = getState().Vocabulary.get("terms").split("\n");
    var out = [];
    for (var i = 0; i < lines.length; i++) {
      //code here using lines[i] which will give you each line
      var terms = lines[i].split(",");
      if (terms[0].trim().length > 0) {
        var synonyms = terms.slice(1).map(t => t.trim());
        var rec = {
          name: {
            value: terms[0].trim(),
            synonyms: synonyms
          }
        };
        out.push(rec);
      }
    }

    var output = { name: getState().Vocabulary.get("name"), values: out };
    dispatch(setVocabularyField("vocabulary", beautify(output, null, 2, 100)));
  };
}
