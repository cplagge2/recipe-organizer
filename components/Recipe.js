import { View, Text, Button } from "react-native"
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

    return <View>
        <Text>{props.route.params.title}</Text>
        <Button title="View Recipe!" onPress={viewRecipe}></Button>
        <Button title={"Remove Recipe"} onPress={removeRecipe}></Button>
    </View>
}