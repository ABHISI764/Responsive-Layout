

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>
        Header App
      </Text>
    </View>
  )
} 

const Boxes = () => {
  return (
    <View style={styles.boxContainer}>
      <View  style={styles.box}>
        <View style={styles.inner}>
        <Text>Box 1</Text>
        </View>
      </View>
      <View  style={styles.box}>
        <View style={styles.inner}>
        <Text>Box 2</Text>
        </View>
      </View>
      <View  style={styles.box}>
        <View style={styles.inner}>
        <Text>Box 3</Text>
        </View>
      </View>
      <View  style={styles.box}>
        <View style={styles.inner}>
        <Text>Box 4</Text>
        </View>
      </View>
    </View>
  )
  
}


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Boxes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#c8c8c8',
    width: '100%',
    height: '15%',
    alignItems:'center',
    justifyContent:'center'
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    backgroundColor:'#c8c8c8',
    padding: 5,
    flexDirection:'row',
    flexWrap:'wrap'
  },
  box: {
    width:'50%',
    height:'50%',
    padding: 5,
    backgroundColor:'white'
  },
  inner: {
    flex:1,
    backgroundColor:'#c8c8c8',
    alignItems:'center',
    justifyContent:'center'
  }

});

export default App;
