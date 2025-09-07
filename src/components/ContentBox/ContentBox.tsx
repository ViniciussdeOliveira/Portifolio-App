import React from 'react';
import { View, Text } from 'react-native';
import styles from './Style';
import { ContentBoxProps } from '../../models/ContentBoxModel';

export function ContentBox({ label, value }: ContentBoxProps) {
  return (
    <View 
      style={styles.container}
      >
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}