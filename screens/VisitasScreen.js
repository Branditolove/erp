import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import commonStyles from '../estilos/estilo';
import { useNavigation } from '@react-navigation/native';

const VisitasScreen = () => {
  const navigation = useNavigation();

  const prospectsData = [
    { id: 1, compania: 'Ricardo Angel Fournier', name: 'Ricardo Herrera', role: 'Encargado', fecha: '25/01/2024' },
    { id: 2, compania: 'DISTRIBUIDORA DE LLANTAS CAPITAL', name: 'Ricardo Herrera', role: 'Encargado', fecha: '25/01/2024' },
    { id: 3, compania: 'DISTRIBUIDORA DE LLANTAS CAPITAL', name: 'Ricardo Herrera', role: 'Encargado', fecha: '25/01/2024' },
    { id: 4, compania: 'DISTRIBUIDORA DE LLANTAS CAPITAL', name: 'Ricardo Herrera', role: 'Encargado', fecha: '25/01/2024' },
    { id: 5, compania: 'DISTRIBUIDORA DE LLANTAS CAPITAL', name: 'Ricardo Herrera', role: 'Encargado', fecha: '25/01/2024' },
    { id: 6, compania: 'DISTRIBUIDORA DE LLANTAS CAPITAL', name: 'Ricardo Herrera', role: 'Encargado', fecha: '25/01/2024' },
  ];

  const handleCardPress = (prospect) => {
    navigation.navigate('VisitasInfo', { prospect });
  };

  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
        <TextInput
          style={commonStyles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#2E3548"/>

        <Icon name="person-running" style={{ ...commonStyles.icon, fontSize: 40 }} />
      </View>
      <View style={commonStyles.fullWidthCard}></View>
      <ScrollView>
        {prospectsData.map(prospect => (
          <TouchableOpacity
            key={prospect.id}
            style={styles.card}
            onPress={() => handleCardPress(prospect)}
          >
            {/* Prospect Information */}
            <View style={styles.prospectInfo}>
              <Text style={commonStyles.title}>{prospect.compania}</Text>
              <Text style={commonStyles.info}>{prospect.name}</Text>
              <Text style={commonStyles.info}>{prospect.role}</Text>
            </View>

            <TouchableOpacity style={styles.redIconContainer}>
              <Icon name="times" style={styles.redIcon} />
            </TouchableOpacity>

            <Text style={styles.fecha}>{prospect.fecha}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  prospectInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  fecha: {
    fontSize: 14,
    color: '#2E3548',
    fontWeight: '600',
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  redIconContainer: {
    backgroundColor: '#FF4F4F',
    borderRadius: 15,
    padding: 10,
    position: 'absolute',
    top: 10,
    right: 15,
  },
  redIcon: {
    color: '#fff',
    fontSize: 10,
  },
});

export default VisitasScreen;
