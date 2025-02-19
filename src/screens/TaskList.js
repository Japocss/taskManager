import { View, Text, ImageBackground, StyleSheet } from "react-native"

export default function TaskList() {
    return(
        <View style={styles.container}>
            <ImageBackground source={{}} style={styles.background}>

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
        backgroundColor: '#cfb698'
    },
    taskList: {
        flex: 7,
        backgroundColor: 'ff5d57' 
    }
})