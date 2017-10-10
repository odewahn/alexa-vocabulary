import React from "react";
import { connect } from "react-redux";

import { RaisedButton, TextField, FontIcon } from "material-ui";

import { setVocabularyField, setParsed } from "../state/vocabulary";

class VocabularyInput extends React.Component {
  constructor(props) {
    super(props);
    this.setField = this.setField.bind(this);
  }
  setField(e) {
    this.props.dispatch(setVocabularyField(e.target.name, e.target.value));
    this.props.dispatch(setParsed());
  }
  render() {
    return (
      <div>
        <div
          style={{
            background: "#eee",
            borderRadius: "5px",
            width: "95%",
            padding: "10px"
          }}
        >
          <p>
            This is a quick way to get an Alexa vocabulary model from a list. To use it:
            <ol>
              <li>Provide a name for your topic.</li>
              <li>
                Put each topic on its own line; add synomyns on the same line as comma separated values.
              </li>
              <li>
                Copy the model to the clipboard.
              </li>
              <li>
                Paste it into the appropriate section in your model file.
              </li>
            </ol>
          </p>
        </div>
        <TextField
          name="name"
          floatingLabelText="Vocabulary name"
          fullWidth
          onChange={this.setField}
          value={this.props.Vocabulary.get("name")}
        />
        <TextField
          style={{ border: "1px solid #ccc" }}
          name="terms"
          floatingLabelText="Term list"
          rowsMax={10}
          rows={10}
          multiLine
          fullWidth
          underlineShow={false}
          onChange={this.setField}
          value={this.props.Vocabulary.get("terms")}
        />

      </div>
    );
  }
}
export default connect(state => state)(VocabularyInput);
