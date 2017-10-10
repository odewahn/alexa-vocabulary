import React from "react";
import { connect } from "react-redux";

import { RaisedButton, TextField, FontIcon } from "material-ui";

import { setVocabularyField } from "../state/vocabulary";

class VocabularyInput extends React.Component {
  constructor(props) {
    super(props);
    this.setField = this.setField.bind(this);
  }
  setField(e) {
    this.props.dispatch(setVocabularyField(e.target.name, e.target.value));
  }
  render() {
    return (
      <div>

        <TextField
          name="terms"
          label="Terms"
          rowsMax={10}
          rows={10}
          multiLine
          onChange={this.setField}
          value={this.props.Vocabulary.get("terms")}
        />
        <br />
        <RaisedButton
          label="Format"
          primary
          icon={<FontIcon className="fa fa-caret-right" />}
          onClick={() => {
            console.log("They clicked it!");
          }}
        />
      </div>
    );
  }
}
export default connect(state => state)(VocabularyInput);
