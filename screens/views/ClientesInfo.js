import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const ClientesInfo = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleOptionSelection = (option) => {
    // Do something with the selected option
    console.log('Opcion Seleccionada:', option);
    closeDropdown();
  };

  const dropdownOptions = [
    { label: 'Cambiar a Cliente', value: 'option1' },
    { label: 'Cambiar a Prospecto', value: 'option2' },
    
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="users" style={{ ...styles.icon, fontSize: 40 }} />
      </View>
      <View style={styles.fullWidthCard}></View>
      {/* White Card */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.leftButton} onPress={toggleDropdown}>
          <View style={styles.buttonContainer}>
            <Icon name="bars" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Opciones</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.rightButtonsContainer}>
          <TouchableOpacity style={styles.smallButton}>
            <Icon name="share-nodes" style={styles.buttonIcon2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Icon name="file-pdf" style={styles.buttonIcon2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Icon name="pen-to-square" style={styles.buttonIcon2} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={closeDropdown}
        >
          <View style={styles.dropdown}>
            {dropdownOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownOption}
                onPress={() => handleOptionSelection(option.value)}
              >
                <Text style={styles.dropdownOptionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Informacion del Prospecto */}
      <View style={styles.card2}>
        <View style={styles.prospectInfo}>
          <Text style={styles.title}>Ricardo Herrera</Text>
          <Text style={styles.titulomorado}>Nombre:</Text>
          <Text style={styles.titulomorado}>Rol:</Text>
          <Text style={styles.titulomorado}>Telefono:</Text>
          <Text style={styles.titulomorado}>Codigo:</Text>
          <Text style={styles.titulomorado}>De:</Text>
          <Text style={styles.titulomorado}>Hasta:</Text>
        </View>
        <View style={styles.prospectValues}>
          <Text style={styles.info}>Ricardo Herrera</Text>
          <Text style={styles.info}>Encargado</Text>
          <Text style={styles.info}>618-107-95-78</Text>
          <Text style={styles.info}>123FA7ERJ</Text>
          <Text style={styles.info}>01/10/2023</Text>
          <Text style={styles.info}>01/10/2023</Text>
        </View>
      </View>

      <View style={styles.card}>
            <TouchableOpacity style={styles.leftButton} onPress={''}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Agregar Visita</Text>
            </View>
            </TouchableOpacity>

        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card2: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButton: {
    marginRight: 'auto',
  },
  rightButtonsContainer: {
    flexDirection: 'row',
  },
  smallButton: {
    marginLeft: 10,
    fontSize: 20,
  },
  prospectInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonIcon: {
    fontSize: 20,
    color: '#FCFDFF', // Set the color you prefer
  },
  buttonIcon2: {
    fontSize: 30, // Set the color you prefer
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#4D69B4',
  },
  buttonText: {
    marginLeft: 5,
    color: 'white', // Set the text color
    fontWeight: 'bold',
  },
  prospectValues: {
    marginTop: 25,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#333',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#4D69B4',
  },

  icon: {
    color: '#7371FC',
  },
  card1: {
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

export default ClientesInfo;