// ProfileScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileComponent from '../components/profileComponent'; // Assuming both files are in the same directory
import CardUser from '../components/cardUser'; // Assuming both files are in the same directory
import Icon from 'react-native-vector-icons/FontAwesome6';

const ProfileScreen = ({ route }) => {
  const user = route.params?.user || {};
  
  const row1 = [
    { icon: 'person-running', screen: 'Screen1' },
    { icon: 'users-line', screen: 'Screen2' },
    { icon: 'file-signature', screen: 'Screen3' },
    { icon: 'users', screen: 'Screen4' },
  ];

  const row2 = [
    { icon: 'file', screen: 'Screen5' },
    { icon: 'flag-checkered', screen: 'Screen6' },
    { icon: 'calendar-days', screen: 'Screen7' },
    { icon: 'photo-film', screen: 'Screen8' },
  ];

  const fullWidthCard = {
    backgroundColor: '#E8EBF3',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 25,
    top: 35,
    zIndex: -1,
  };

  const titulo = [
    { name: 'Visitas' },
    { name: 'Prospectos' },
    { name: 'Contratos' },
    { name: 'Clientes' },
    { name: 'Contratos Disponibles' },
    { name: 'Continuidad' },
    { name: 'Agenda' },
    { name: 'Produccion' }
  ];


  const iconColor = '#7371FC';

  return (
    <View style={styles.container}>
      <View style={fullWidthCard}></View>
          <CardUser/>
          <ProfileComponent
        titulo={titulo}
        iconColor={iconColor}
        fullWidthCard={fullWidthCard}
        row1={row1}
        row2={row2}
      />
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D69B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;