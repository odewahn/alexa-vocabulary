import React from "react";
import { connect } from "react-redux";

import { RaisedButton, TextField, FontIcon } from "material-ui";

//import { setUserField, updateUserProfile } from "../state/user";

class VocabularyInput extends React.Component {
  render() {
    return (
      <div>
        <TextField
          name="terms"
          label="Terms"
          rowsMax={3}
          multiLine
          onChange={this.setField}
          value={this.props.Vocabulary.get("terms")}
          floatingLabel
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
