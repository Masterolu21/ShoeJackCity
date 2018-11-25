// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';


class ProductsScreen extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
