import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import Toast from 'react-native-toast-message';
import HeaderText from '../../components/Header/HeaderText';
import { TitleText } from '../../components/TitleText/TitleText';
import styles from './style';
import { ContentBox } from '../../components/ContentBox/ContentBox';


export default function SkillScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TitleText value="Skills" />
          <HeaderText value="Front-end" />
          <ContentBox label="HTML" value="Avançado" />
          <ContentBox label="CSS" value="Avançado" />
          <ContentBox label="JavaScript" value="Avançado" />
          <ContentBox label="TypeScript" value="Avançado" />
          <ContentBox label="ReactJS" value="Intermediário" />

          <HeaderText value="Back-end" />
          <ContentBox label="NodeJS" value="Avançado" />
          <ContentBox label="Express" value="Intermediário" />
          <ContentBox label="Python" value="Intermediário" />
          <ContentBox label="Java" value="Intermediário" />
          <ContentBox label="Kotlin" value="Intermediário" />
          <ContentBox label="TypeScript" value="Avançado" />

          <HeaderText value="Mobile" />
          <ContentBox label="React Native" value="Avançado" />
          <ContentBox label="Android Stuio (Java/Kotlin)" value="Intermediário" />

          <HeaderText value="Banco de Dados" />
          <ContentBox label="MySQL" value="Avançado" />
          <ContentBox label="PostgreSQL" value="Intermediário" />
          <ContentBox label="Apache Hive" value="Intermediário" />

          <HeaderText value="Ferramentas" />
          <ContentBox label="Git" value="Avançado" />
          <ContentBox label="GitHub" value="Avançado" />
          <ContentBox label="Docker" value="Avançado" />
          <ContentBox label="Postman" value="Intermediário" />
          <ContentBox label="Pacote Office" value="Intermediário" />
          <ContentBox label="Figma" value="Intermediário" />


          <TitleText value="Idiomas" />
          <ContentBox label="Inglês" value="Avançado" />
          <ContentBox label="Espanhol" value="Básico" />
          
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
}