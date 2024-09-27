import React from 'react';
import{
    SafeAreaView,
    View,
    Text,
    useColorScheme,
    StyleSheet,
} from 'react-native';

function AppPro(){
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
                    This is a React Native App created using TypeScript.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    whiteText: {
        color: '#FFFFFF',
    },
    blackText: {
        color: '#000000',
    },
});

export default AppPro;
