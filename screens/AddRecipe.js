import { View, Text, Button } from "react-native"
import { TextInput } from "react-native-paper"
import { useState, useEffect, useContext, useNavigation } from "react";
import idContext from '../contexts/idContext';


export default function AddRecipe(props) {

    const [id, setID] = useContext(idContext);
    const [title, setTitle] = useState();
    const [url, setURL] = useState();
    const [uri, setURI] = useState();
    const [first, setFirst] = useState(true);
    const regex = new RegExp('og:image');
    //const navigation = useNavigation();

    /*useEffect(() => {
        
        fetch(`https://tastesbetterfromscratch.com/calzones/`).then(resp => resp.text())
        .then(data => {
            let a =data.split("<").filter(data => regex.test(data))[0].split("content=")[1];
            console.log(a.substring(1, a.length-3));
        });
    }, [])*/

    
    useEffect(() => {
        if(!first){
            let idVal = new Date().getTime();
            console.log(idVal);
            fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id': idVal.toString(),
                    'name': title,
                    'url': url,
                    'uri': uri
                })})
            .then((resp) => resp.json()).then(() => {
                    setID((oldId) => !oldId);
                    setTitle("");
                    setURL("");
                }
            );
            props.navigation.navigate("Recipe List");
        }
        else{
            setFirst(false);
        }
        //updateID();
    }, [uri]);

    /*
    useEffect(() =>{
        updateID();
    }, [])

    const updateID = () => {
        console.log("Called Update");
        fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes/count`, {method: 'GET'})
        .then(resp => resp.json())
        .then(data => {
            console.log("Data: " + data);
            setID(data.toString())});
    }*/

    const sendRecipe = () =>{
        fetch(url).then(resp => resp.text())
            .then(data => {
                setURI(old => data.split("<").filter(data => regex.test(data))[0].split("content=")[1].split('"')[1]);
            })
    }

    return <View>
        <Text>Title</Text>
        <TextInput value={title} onChangeText={text => setTitle(text)}></TextInput>
        <Text>URL</Text>
        <TextInput value={url} onChangeText={text => setURL(text)}></TextInput>
        <Button title="Add to Cookbook" onPress={sendRecipe}></Button>
    </View>
}