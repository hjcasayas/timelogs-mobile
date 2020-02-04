import React from 'react';
import PropTypes from 'prop-types';
import {TouchableNativeFeedback, Text} from 'react-native';

export default function Button({onPress, title}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Text>{title}</Text>
    </TouchableNativeFeedback>
  );
}

Button.defaultProps = {
  onPress: () => {},
  title: 'Title',
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
