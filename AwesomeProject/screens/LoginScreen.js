import React, { useState } from 'react'

import {
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

import { Input, Icon } from "@rneui/base";

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ImageBackground
            source={require("../assets/images/login_bg.jpeg")}
            style={styles.bgImage}
        >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image
                    source={require("../assets/images/logo.png")}
                    style={styles.logo}
                />

                <Input
                    placeholder="USERNAME"
                    returnKeyType="next"
                    textContentType="username"
                    containerStyle={styles.container}
                    inputContainerStyle={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={setUsername}
                    defaultValue={username}
                    autoCapitalize="none"
                    leftIcon={
                        <Icon
                            name='person'
                            size={24}
                            color='black'
                        />
                    }
                />

                <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                    returnKeyType="next"
                    textContentType="password"
                    containerStyle={styles.container}
                    inputContainerStyle={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={setPassword}
                    defaultValue={password}
                    autoCapitalize="none"
                    leftIcon={
                        <Icon
                            name='person'
                            size={24}
                            color='black'
                        />
                    }
                />

                <Image
                    source={{ url: "http://i.imgur.com/q3e87zR.gif" }}
                    style={{
                        width: '70%',
                        height: '70%',
                    }}
                />

            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    scrollView: {
        marginTop: 150,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginBottom: 10
    },
    input: {
        paddingHorizontal: 10,
        backgroundColor: "white",
        opacity: 0.7,
        borderRadius: 15
    },
})
