import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import { HeaderModel } from '../../models/HeaderModel';

const HeaderText: React.FC<HeaderModel> = ({ value }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>{value}</Text>
    </View>
  );
}

export default HeaderText;