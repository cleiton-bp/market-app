import { StyleSheet, View, Text } from "react-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Home Page</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F8D8BB",
    },
    text: {
        fontSize: 25,
    },
});
