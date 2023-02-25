import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Icon, Button, Image } from "@rneui/base";

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://media.tenor.com/o656qFKDzeUAAAAC/rick-astley-never-gonna-give-you-up.gif'}}  
        style={{width: 400, height:400 }} 
      />
      <Text>React Native Tutorial</Text>
      <Input 
        placeholder='USERNAME'
        leftIcon={
          <Icon 
            name='person'
            size={24}
            color='black'
          />
        }
      />
      <Input 
        placeholder='PASSWORD'
        leftIcon={
          <Icon 
            name='lock'
            size={24}
            color='black'
          />
        }
      />
      <Button 
        title='Login'
        buttonStyle={{
          backgroundColor: 'black',
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
