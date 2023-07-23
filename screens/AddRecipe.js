import { View, Text, Button } from "react-native"
import { TextInput } from "react-native-paper"
import { useState, useEffect, useContext } from "react";
import idContext from '../contexts/idContext';


export default function AddRecipe() {

    //const [id, setID] = useState();
    const [id, setID] = useContext(idContext);
    const [title, setTitle] = useState();
    const [url, setURL] = useState();
    

    const sendRecipe = () =>{
        fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'id': id,
                'name': title,
                'url': url
            })
        });
        setID((oldId) => oldId + 1);
    }

    return <View>
        <Text>Title</Text>
        <TextInput value={title} onChangeText={text => setTitle(text)}></TextInput>
        <Text>URL</Text>
        <TextInput value={url} onChangeText={text => setURL(text)}></TextInput>
        <Button title="Add to Cookbook" onPress={sendRecipe}></Button>
    </View>
}