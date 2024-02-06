import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#2E3548"/>

        <Icon name="person-running" style={{ ...styles.icon, fontSize: 40 }} />
      </View>
      <View style={styles.fullWidthCard}></View>
      <ScrollView>
        {prospectsData.map(prospect => (
          <TouchableOpacity
            key={prospect.id}
            style={styles.card}
            onPress={() => handleCardPress(prospect)}
          >
            {/* Prospect Information */}
            <View style={styles.prospectInfo}>
              <Text style={styles.title}>{prospect.compania}</Text>
              <Text style={styles.info}>{prospect.name}</Text>
              <Text style={styles.info}>{prospect.role}</Text>
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

  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#4D69B4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  icon: {
    color: '#7371FC',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2E3548',
  },
  info: {
    fontSize: 14,
    color: '#2E3548',
    fontFamily: 'Poppins_400Regular'
  },
  titulomorado: {
    fontSize: 14,
    color: '#7371FC',
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  filterIcon: {
    marginRight: 5,
    color: '#2E3548',
  },
  filterText: {
    color: '#2E3548',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
      backgroundColor: '#FCFDFF',
  },
  fullWidthCard: {
    backgroundColor: '#E8EBF3',
    height: '130%',
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 25,
    zIndex: -1,
  },
});

export default VisitasScreen;
