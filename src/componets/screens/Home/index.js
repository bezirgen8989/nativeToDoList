import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import SvgIcons from "../../assets/svgImaged";

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

const HomeScreen = () => {
    return (
        <View style={style.container}>
            {/* current date block */}
            <View style={style.currentTimeContainer}>
                <View>
                    <Text>Today is: {new Date().toLocaleDateString()}</Text>
                </View>
            </View>
            {/* to dos types block */}
            <ScrollView>
                <View style={style.todosBocksContainerHeader}>
                    <Text style={style.todosBocksContainerHeaderText}>Today list tasks</Text>
                </View>
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
        backgroundColor: "#D9D0C1",
        height: "100%",
        width: '100%',
        padding: 5
    },
    currentTimeContainer: {
        backgroundColor: "#F29F05",
        margin: 5,
        padding: 5,
        borderRadius: 5,
        height: "7%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    todosBocksContainer: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: "wrap",
        with: "100%",
        height: "92%",
        justifyContent: "center",
    },
    todosBocksContainerHeader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    todosBocksContainerHeaderText: {
        fontSize: 25
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

});



export default HomeScreen;