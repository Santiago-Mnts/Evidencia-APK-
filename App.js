import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  TextInput,
} from 'react-native';
const Separator = () => <View style={styles.separator} />;
const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Image
        source={require('./assets/Logo-React.gif')}
        style={styles.imagen}
      />
      <Text style={styles.title}>
        Esta Es Mi Interfaz Para La Evidencia Con React-Native.
      </Text>
      <Button
        title="Bienvenido"
        color="#2469DA"
        onPress={() => Alert.alert('Bienvenido instructor mi nombre es Santiago Muentes, Ficha 2627090')}
        style={styles.button}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Por favor escriba mi nota aquí.
      </Text>
      <Button
        title="mi nota"
        color="#129C42"
        onPress={() => Alert.alert('El Instructor Carlos Mora Puede Escribir La Nota En Este Espacio')}
      />
    </View>
    <Separator />
    <View>
      <View>
        <Text style={styles.title}>
          Aquí el instructor puede escribir y aconsejar qué puedo mejorar.
        </Text>
        <TextInput style={styles.textInput} />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Debo seguir mejorando en el uso de la herramienta de React-Native Y Expo.
        </Text>
      </View>

      <View style={styles.fixToText}>
        <Button
          title="FICHA"
          color="#27AE60"
          onPress={() => Alert.alert('ADSO FICHA: 2627090')}
        />
        <Button
          title="APRENDIZ"
          color="#27AE60"
          onPress={() => Alert.alert('APRENDIZ SANTIAGO MUENTES MEJIA')}
        />

      </View>

    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8990a2',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    borderColor: 'white',
    borderWidth: 1,
    height: 50

  }
});

export default App;
