import React from "react";
import { connect } from "react-redux";

import copy from "copy-to-clipboard";
import { TextField, RaisedButton, FontIcon } from "material-ui";

class VocabularyOutput extends React.Component {
  render() {
    return (
      <div>
        <TextField
          name="vocabulary"
          floatingLabelText="Vocabulary model"
          disabled
          rowsMax={15}
          rows={15}
          multiLine
          fullWidth
          underlineShow={false}
          value={this.props.Vocabulary.get("vocabulary")}
        />
        <RaisedButton
          label="Copy model to clipboard"
          primary
          icon={<FontIcon className="fa fa-clipboard" />}
          onClick={() => {
            copy(this.props.Vocabulary.get("vocabulary"));
          }}
        />
      </div>
    );
  }
}
export default connect(state => state)(VocabularyOutput);
