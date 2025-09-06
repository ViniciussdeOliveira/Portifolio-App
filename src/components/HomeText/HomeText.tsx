import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';

export function HomeText() {
  return (
    <View style={styles.container}>
        <Text style={styles.texto}>Sou o Vinícius de Oliveira, estudante de Engenharia de Software na UNB, com experiência em diversas áreas como frontend, backend, mobile e banco de dados. Destaco-me pela rápida adaptação a novas tecnologias e ambientes de trabalho/desenvolvimento e pela capacidade de contribuir com soluções inovadoras. Busco oportunidades em um ambiente dinâmico e colaborativo.
        </Text>
    </View>
  );
}