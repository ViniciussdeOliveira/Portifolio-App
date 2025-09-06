import React from 'react';
import { Text} from 'react-native';
import { styles } from './Style';

export function TitleText({ value }: { value: string }) {
  return (
    <>
        <Text style={styles.titulo}>{value}</Text>
    </>
  );
}