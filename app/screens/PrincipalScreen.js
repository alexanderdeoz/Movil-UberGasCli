import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler } from 'react-native';
import color from '../styles/colors';
import MyButton from '../components/MyButton';
import { UsuarioContext } from '../context/UsuarioContext';


function useBackButton(handler){
     useEffect(()=> {
         BackHandler.addEventListener("hardwareBackPress", handler)

         return() => {
             console.log('hardwareBackPress Close')
             BackHandler.removeEventListener("hardwareBackPress", handler)
         }
     }, [handler])
}

export default function PrincipalScreen(props) {

    useBackButton(desconectarse)
    const [login, loginAction] = useContext(UsuarioContext)

    return (
    <React.Fragment>
            <View style={{flex:1, alignItems:'center'}}>
            <StatusBar
                backgroundColor={color.BLUE}
                barStyle='dark-content'
                translucent={true}
            />
              <MyButton
                titulo='Cerrar Sesión'
                onPress={()=> desconectarse()}
            />
        
            <Text style={{ textAlign: 'center', fontSize:20, marginTop: 0, 
            fontFamily: 'Poppins-Bold' }}>Bienvenido{ login.usuario.email}</Text>
          
        </View>
        <View>
            <Text>asdasddsfsfsdfsdfsfd</Text>
        </View>
    </React.Fragment>
    )

    const Map =(props)=>{
        return(
            <Text>hola</Text>
        );
    }

    function goToScreen(routeName){
        props.navigation.navigate(routeName)
    }

    function desconectarse(){

        Alert.alert(
            "Salir",
            "¿Está seguro que \ndesea cerrar sessión",
            [
                {
                    text:"Si", onPress: ()=>{
                        loginAction({
                            type:'sign-out',
                            data:{}
                        })
                        goToScreen('Login')
                    }
                },
                {
                    text:"No", onPress: ()=>{}, style:'cancel'
                }
            ]
        )
    }

}