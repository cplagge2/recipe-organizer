import { ScrollView, Text, View, StyleSheet } from "react-native"
import { TextInput } from "react-native-paper"
import RecipeCard from "../components/RecipeCard"
import { useEffect, useState, useContext, useNavigation } from "react"
import idContext from '../contexts/idContext';

export default function RecipeList() {

    const [messages, setMessages] = useState();
    const [id, setID] = useContext(idContext);
    const [search, setSearch] = useState("");

    //const navigation = useNavigation();

    const generateList = () => {
        fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes`, {method: 'GET'})
        .then((resp) => resp.json())
        .then((data) => {
            //console.log(data);
            setMessages(data);
        });
    }

    useEffect(() => {
        generateList();
    }, [id]);

    /*useEffect(() => {
        fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes/count`, {method: 'GET'})
        .then(resp => resp.json())
        .then(data => {
            //console.log(data);
            setID(data.toString())});
    }, [])*/



    return <View>
        <TextInput
            value={search} 
            onChangeText={text => setSearch(text)}
            placeholder="Search">
        </TextInput>

        <ScrollView style={styles.scrollZone}>

        {messages ?
            messages.filter((m) => m.name.toLowerCase().includes(search.toLowerCase()))
                .map((mess) => <RecipeCard style={{margin: 10}}
                    key={mess.recipeID} 
                    url={mess.url} 
                    title={mess.name} 
                    uri={mess.uri} 
                    id={mess.recipeID} 
                    updateList={generateList}/>)
            : <Text>Loading</Text>
        }
    </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    scrollZone: {
        backgroundColor: 'gray',
        height: '93%'
    }
});