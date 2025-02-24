import { View, Text, ImageBackground, StyleSheet } from "react-native"

import todayImage from '../../assets/imgs/today.jpg'

export default function TaskList() {
    return(
        <View style={styles.container}>
            <ImageBackground source={todayImage} style={styles.background}>

                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>24 de fevereiro</Text>
                </View>

            </ImageBackground>
            <View style={styles.taskList}>
                <Text>Task #01</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
})