import React from 'react';
import { Text, View } from 'react-native';

export const Button = ({ text }) => (
  <View style={{ padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}>
    <Text style={{ color: 'white' }}>{text}</Text>
  </View>
);

export default {
  title: 'Components/Button',
  component: Button,
};

export const Basic = {
  args: {
    text: 'Hello Storybook',
  },
};
