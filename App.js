
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./assets/assets/img/bg.jpg')}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en Paris</Text>
        </View>

        <ScrollView horizontal>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/assets/img/actividad1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/assets/img/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/assets/img/actividad3.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/assets/img/actividad4.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require('./assets/assets/img/actividad5.jpg')}
            />
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Que hacer en Paris</Text>

        <View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./assets/assets/img/actividad1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./assets/assets/img/actividad2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require('./assets/assets/img/actividad3.jpg')}
            />
          </View>
        </View>
      </View>

      <Text style={styles.titulo}>Hospedaje</Text>
      <View style={styles.listado}>
        <View style={styles.listadoItems}>
          <Image
            style={styles.mejores}
            source={require('./assets/assets/img/hospedaje1.jpg')}
          />
        </View>
        <View style={styles.listadoItems}>
          <Image
            style={styles.mejores}
            source={require('./assets/assets/img/hospedaje2.jpg')}
          />
        </View>
        <View style={styles.listadoItems}>
          <Image
            style={styles.mejores}
            source={require('./assets/assets/img/hospedaje3.jpg')}
          />
        </View>
        <View style={styles.listadoItems}>
          <Image
            style={styles.mejores}
            source={require('./assets/assets/img/hospedaje4.jpg')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20
  },
  contenedor: {
    marginHorizontal: 10
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listadoItems: {
    flexBasis: '49%'
  }
});

export default App;
