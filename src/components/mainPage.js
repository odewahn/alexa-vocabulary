import React from "react";
import { connect } from "react-redux";

import VocabularyInput from "./vocabularyInput";
import VocabularyOutput from "./vocabularyOutput";

import { Grid, Cell } from "material-grid";

import { setParsed } from "../state/vocabulary";

class mainPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(setParsed());
  }
  render() {
    return (
      <Grid>
        <Cell lg={4}>
          <VocabularyInput />
        </Cell>
        <Cell lg={8}>
          <VocabularyOutput />
        </Cell>
      </Grid>
    );
  }
}
export default connect(state => state)(mainPage);
