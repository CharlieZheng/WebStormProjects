import {Image, TouchableNativeFeedback, View} from 'react-native';
import React, {Component} from 'react';
import MyNavigator from './main'
import {deviceWidth} from "../utils";

export default class Bar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    _clickOn1() {
        alert("Click on 1")
    }

    _clickOn2() {
        alert("Click on 2")
    }

    _clickOn3() {
        alert("Click on 3")
    }

    _clickOn4() {
        alert("Click on 4")
    }

    _clickOn5() {
        alert("Click on 5")
    }

    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: "#ffffff"
            }}>


                <MyNavigator navigation={this.props.navigation}
                             style={{alignSelf: 'flex-start', backgroundColor: '#ffff00'}}/>
                <View style={{
                    flexDirection: 'row',
                    width: deviceWidth,
                    height: 40
                }}>
                    <TouchableNativeFeedback onPress={this._clickOn1}
                                             background={TouchableNativeFeedback.SelectableBackground()}>
                        <Image source={require("../res/img/bar_1_off.png")}
                               style={{
                                   resizeMode: 'contain',
                                   width: deviceWidth / 5,
                                   height: 40,
                                   backgroundColor: "#00ffffff"
                               }}/>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this._clickOn2}>
                        <Image source={require("../res/img/bar_2_off.png")}
                               style={{
                                   resizeMode: 'contain',
                                   width: deviceWidth / 5,
                                   height: 40,
                                   backgroundColor: "#00ffffff"
                               }}/>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this._clickOn3}>
                        <Image source={require("../res/img/bar_3_off.png")}
                               style={{
                                   resizeMode: 'contain',
                                   width: deviceWidth / 5,
                                   height: 40,
                                   backgroundColor: "#00ffffff"
                               }}/>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this._clickOn4}>
                        <Image source={require("../res/img/bar_4_off.png")}
                               style={{
                                   resizeMode: 'contain',
                                   width: deviceWidth / 5,
                                   height: 40,
                                   backgroundColor: "#00ffffff"
                               }}/>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={this._clickOn5}>
                        <Image source={require("../res/img/bar_5_off.png")}
                               style={{
                                   resizeMode: 'contain',
                                   width: deviceWidth / 5,
                                   height: 40,
                                   backgroundColor: "#00ffffff"
                               }}/>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }

}

Bar.router = MyNavigator.router;