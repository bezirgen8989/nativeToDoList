import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import SvgIcons from "../../assets/svgImaged";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Modal } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToDoTask from "./addToDask/index";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const gropTasks = [
    {
        name: "Main Tasks",
        iconType: "mainTask",
        iconColor: "green",
    },
    {
        name: "Urgent Tasks",
        iconType: "urgentTask",
        iconColor: "red"
    },
    {
        name: "Secondary Tasks",
        iconType: "chillIcon",
        iconColor: "white"
    },
    {
        name: "All Tasks",
        iconType: "toDos",
        iconColor: "blue"
    }
]

const ToDosListScreens = ({ navigation }) => {
    const Stack = createNativeStackNavigator();
    const [modalShow, setModaLShow] = useState(false)
    return (
        <View style={style.container}>
            <View style={style.btnContainer}>
                <TouchableOpacity
                    style={style.addNewGroupBtn}
                    onPress={() => navigation.navigate("addToDos")}
                >
                    <Text style={style.btnText}>Add new group</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={style.scrollBlock}>
                <View style={style.todosBocksContainer}>
                    {
                        gropTasks.map((todosTypes, id) => {
                            return (
                                <TouchableOpacity key={id} style={style.todosBolocks}>
                                    <View>
                                        <Text>{todosTypes.name}</Text>
                                    </View>
                                    <SvgIcons
                                        iconType={todosTypes.iconType}
                                        iconColor={todosTypes.iconColor}
                                        width={"50%"}
                                        height={"50%"}
                                    />
                                </TouchableOpacity>
                            );

                        })
                    }

                </View>


            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#F29F05",
        width: "100%",
        height: "100%",
        padding: 5,
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "10%",
    },
    btnText: {
        color: "white",
        fontSize: 25,
    },
    addNewGroupBtn: {
        backgroundColor: "#F22E2E",
        borderWidth: 1,
        borderColor: "#D9D0C1",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 5
    },
    scrollBlock: {

    },
    todosBolocks: {
        margin: "2%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    todosBocksContainer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: "wrap",
        with: "100%",
        height: "92%",
        justifyContent: "space-between",
    },
    modalWindow: {
        margin: 0,
        borderWidth: 1,
        backgroundColor: "red",
        borderColor: "#D9D0C1",
        width: "90%",
        height: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

})

export default ToDosListScreens;