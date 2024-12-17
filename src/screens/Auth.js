import React from "react";
import { Alert, ImageBackground, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from "../commonStyles";

export default class Auth extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso!', 'Criar conta')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage}
                style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>
                        {this.state.stageNew ? 'Crie a sua Conta' : 'Informe seus Dados'}
                    </Text>
                    {this.state.stageNew &&
                        <TextInput placeholder="Nome" value={this.state.name}
                            style={styles.input} onChangeText={name => this.setState({ name })} />
                    }
                    <TextInput placeholder="Email" value={this.state.email}
                        style={styles.input} onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder="Senha" value={this.state.password} secureTextEntry={true}
                        style={styles.input} onChangeText={password => this.setState({ password })} />
                    {this.state.stageNew &&
                        <TextInput placeholder="Confirmação de Senha" value={this.state.confirmPassword} secureTextEntry={true}
                            style={styles.input} onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    }
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : "Entrar"
                                }
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
                        <Text style={styles.buttonText}>
                            {this.state.stageNew ? 'Já possui conta?' : 'Ainda não possui conta?'}
                        </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 70,
        color: commonStyles.colors.secondary,
        marginBottom: 10
    },
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        color: '#fff',
        textAlign: "center",
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: '90%'
    },
    input: {
        backgroundColor: '#FFF',
        marginTop: 10,
        padding: Platform.OS === "ios" ? 15 : 10
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: "center"
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: "#fff",
        fontSize: 20
    }
})