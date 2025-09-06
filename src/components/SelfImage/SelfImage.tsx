import React from 'react';
import { Image } from 'react-native';
import Foto from '../../../assets/foto.jpeg';

export function SelfImage() {
  return (
    <>
        <Image
            source={Foto}
            style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                resizeMode: 'cover',
                marginBottom: 30,
            }}
        />
    </>
  );
}