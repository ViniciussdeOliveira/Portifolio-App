import React from 'react';
import { Text,TouchableOpacity, Linking, Alert } from 'react-native';
import styles from './Styles';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { InfoBoxProps } from '../../models/InfoBoxProps';


const InfoBox: React.FC<InfoBoxProps> = ({ label, value, url }) => {

  const handleOpenLink = async () => {
    if (url) {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Não foi possível abrir esta URL: ${url}`);
      }
    }
  };

  const handleLongPress = async () => {
    if (url) {
      await Clipboard.setStringAsync(url);
      Toast.show({
        type: 'success',
        text1: 'Link Copiado!',
        text2: `O link para ${label} foi copiado.`,
        position: 'bottom',
      });
    }
  };

  return (
    <TouchableOpacity 
      onPress={handleOpenLink} 
      onLongPress={handleLongPress}
      delayLongPress={200} 
      style={styles.container}
      >
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};

export default InfoBox;