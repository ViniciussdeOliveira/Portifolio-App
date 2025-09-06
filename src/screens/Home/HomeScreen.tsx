import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import styles from './Styles';
import InfoBox from '../../components/LinkBox/LinkBox';
import SocialLinksData from '../../repositories/SocialLinksData';
import Toast from 'react-native-toast-message';
import { SelfImage } from '../../components/SelfImage/SelfImage';
import { HomeText } from '../../components/HomeText/HomeText';
import HeaderText from '../../components/Header/HeaderText';
import { TitleText } from '../../components/TitleText/TitleText';


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TitleText value="Bem Vindo" />
          <SelfImage />
          <HeaderText value="Sobre Mim" />
          <HomeText />
          <HeaderText value="Links" />
          {SocialLinksData.map((link) => (
            <InfoBox
              key={link.id}
              label={link.label}
              value={link.value}
              url={link.url}
            />
          ))}
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
}