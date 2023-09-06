import { View, Text, Button, Image, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native";
import * as Linking from 'expo-linking'
import { useContext } from "react";
import idContext from "../contexts/idContext";
import { WebView } from 'react-native-webview';

export default function Recipe(props) {

    const navigation = useNavigation();
    const [id, setID] = useContext(idContext);

    const removeRecipe = () => {
        //console.log(props.route.params);
        fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes/${props.route.params.id}`, {
            method: 'DELETE'
        }).then(setID((oldID) => !oldID)).then(navigation.pop(1));
        //navigation.pop(1);
    }

    const viewRecipe = () => {
        Linking.openURL(props.route.params.url).catch(err => console.error("Couldn't load page", err));
    }

    return <View style={{height: '100%', backgroundColor: 'gray'}}>
        <Image style={styles.picture} source ={{uri: props.route.params.uri}}/>
        <Text style={styles.title}>{props.route.params.title}</Text>
        <Text style={[styles.button, {backgroundColor: '#67d9e6'}]} onPress={viewRecipe}>View Recipe</Text>
        <Text style={[styles.button, {backgroundColor: '#f78679'}]} onPress={removeRecipe}>Remove Recipe</Text>
    </View>
}

const styles = StyleSheet.create({
    picture: {
        width: '60%',
        height: '40%',
        alignSelf: 'center',
        margin: 15
    },
    title: {
        fontSize: 50,
        fontFamily: 'Georgia',
        alignSelf: 'center',
        color: 'white'
    },
    button: {
        fontSize: 20,
        fontFamily: 'Futura',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        overflow: 'hidden'
    }
})