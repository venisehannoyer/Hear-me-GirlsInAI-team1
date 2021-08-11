import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Divider, Button, Header, Icon } from 'react-native-elements';

export default class HomeScreen extends React.PureComponent {


    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: "#fff",
            }}>
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content"
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    centerComponent={<Image
                        source={{
                            uri: 'https://i.postimg.cc/SNCMqQP4/Logo-big.png'
                            // uri: 'https://i.postimg.cc/jdV3QB7F/IMG-20191105-10568.jpg'
                        }}
                        ImageStyle={{
                            width: 200,
                            height: 200,
                            resizeMode: 'stretch', //contain
                        }} />}
                    containerStyle={{
                        backgroundColor: '#BDBDBD',
                        justifyContent: 'space-around',
                        marginTop: 20,
                    }}
                />

                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#ccf2ff",
                        alignItems: 'center'
                    }}>

                    <View style={{
                        backgroundColor: "#b3ccff",
                        width: '40%',
                        paddingTop: 10,
                        marginVertical: 10,
                        borderRadius: 10,
                        height: 45,
                    }}>
                        < Text style={{
                            color: '#000000',
                            textAlign: 'center',


                        }
                        }>
                            {'Home'}
                        </Text >
                    </View>

                    <Divider style={{
                        backgroundColor: "grey",
                        height: 1,
                        marginVertical: 10,
                        opacity: 0.6,
                    }} />


                    <View style={{
                        width: '90%',
                        paddingTop: 10,
                        marginHorizontal: 10,
                        borderRadius: 10,
                    }}>
                        < Text style={{
                            color: '#1212ee',
                            textAlign: 'center',
                        }
                        }>
                            {"Notre produit se concentre sur la détection et localisation et l'apparition de nouveaux bruits - \n en utilisant l'intelligence artificielle pour détecter le type de signature sonore (conversation, sonnette, alarme, bris de verre), voire le transcrire et en adaptant le réglage aux individus (préférence et handicap) et aux situations. \n Il sera sous la forme d'un tour de cou connecté au téléphone et aux appareils d'aide à l'écoute. \n (proposition de résumé pour le sondage)"}
                        </Text >
                    </View>

                    <Button
                        title={"Start"}
                        containerStyle={{
                            marginVertical: 10,
                            width: '40%',
                        }}
                        onPress={()=>{alert("start button presses")}}
                    />
                </View>
            </View>
        )
    }
}
