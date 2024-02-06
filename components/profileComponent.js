import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const ProfileComponent = ({ titulo, iconColor, fullWidthCard, row1, row2 }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Full-width card */}


      {/* Existing rows */}
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Visitas')}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='person-running' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Visitas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Prospectos')}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='users-line' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Prospectos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(row2[0].screen)}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='file-signature' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Contratos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(row2[1].screen)}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='users' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Clientes</Text>
        </TouchableOpacity>

        </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center', paddingRight:'10'}}>


      <TouchableOpacity
          onPress={() => navigation.navigate(row2[1].screen)}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='file' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Contratos Disponibles</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          onPress={() => navigation.navigate(row2[1].screen)}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='flag-checkered' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Continuidad</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          onPress={() => navigation.navigate(row2[1].screen)}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='calendar-days' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Agenda</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
          onPress={() => navigation.navigate(row2[1].screen)}
          style={{
            width: 80,
            height: 80,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 10,
          }}
        >
          <Icon name='photo-film' size={40} color={iconColor} />
          <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10 }}>Produccion</Text>
        </TouchableOpacity>


      </View>

      <Text style={{ color: '#2E3548', fontSize: 14 }}>Hoy</Text>
    </View>
  );
}

export default ProfileComponent;