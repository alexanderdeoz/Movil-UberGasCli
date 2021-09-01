import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler, ScrollView, Image } from 'react-native';
import color from '../styles/colors';
import MyButton from '../components/MyButton';
import { UsuarioContext } from '../context/UsuarioContext';
import Map from './MapsScreen';
import credentials from '../credentials/credential'

function useBackButton(handler) {
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler)

        return () => {
            console.log('hardwareBackPress Close')
            BackHandler.removeEventListener("hardwareBackPress", handler)
        }
    }, [handler])
}

export default function PrincipalScreen(props) {

    useBackButton(desconectarse)
    const [login, loginAction] = useContext(UsuarioContext)
 const mapURL =`http://maps.googleapis.com/maps/api/js?v=3.exp${credentials.mapsKey}`;
    return (
        <React.Fragment>
            <View style={{ alignItems: 'center' }}>


                <Text style={{
                    textAlign: 'center', fontSize: 30,
                    fontFamily: 'Poppins-Bold'
                }}>Bienvenido  {login.usuario.email}</Text>
                <MyButton
                    titulo='Cerrar Sesión'
                    onPress={() => desconectarse()}
                />


            </View>
            <View style={{ alignItems: 'center' }}>

                <View>

                    <View style={{ flexDirection: 'row' }}>

                        <Image source={require('../recursos/images/amarillo.png')}
                            style={{ height: 200, width: 100 }} />
                        <MyButton titulo='Solicitar' style={{ height: 50, width: 100 }} />

                    </View>

                    <Text style={{
                        textAlign: 'center', fontSize: 20, marginTop: 0,
                        fontFamily: 'Poppins-Bold'
                    }}>Uso Para locales de comida</Text>

                    <Text style={{
                        textAlign: 'center', fontSize: 20, marginTop: 0,
                        fontFamily: 'Poppins-Bold'
                    }}>Costo :3.50 + envio</Text>

                </View>

                <View >

                    <View style={{ flexDirection: 'row' }}>

                        <Image source={require('../recursos/images/azul.png')}
                            style={{ height: 200, width: 200 }} />
                        <MyButton titulo='Solicitar' style={{ height: 50, width: 100 }} />

                    </View>
                    <Text style={{
                        textAlign: 'center', fontSize: 20, marginTop: 0,
                        fontFamily: 'Poppins-Bold'
                    }}>Uso Domestico</Text>
                    <Text style={{
                        textAlign: 'center', fontSize: 20, marginTop: 0,
                        fontFamily: 'Poppins-Bold'
                    }}>Costo :2.50 + envio</Text>


                </View>
            </View>
        </React.Fragment>
    )
    

    const Maps = (props) => {
        return (
            <React.Fragment>
                <Map
                googleMapURL= {this.mapURL}
                containerElement={<div style={{height:400}}></div>}
                mapElement= {<div style={{height:100}}></div>}
                loadingElement = {<div > Cargando</div>}
                />
            </React.Fragment>
        );
    }

    function goToScreen(routeName) {
        props.navigation.navigate(routeName)
    }

    function desconectarse() {

        Alert.alert(
            "Salir",
            "¿Está seguro que \ndesea cerrar sessión",
            [
                {
                    text: "Si", onPress: () => {
                        loginAction({
                            type: 'sign-out',
                            data: {}
                        })
                        goToScreen('Login')
                    }
                },
                {
                    text: "No", onPress: () => { }, style: 'cancel'
                }
            ]
        )
    }

}