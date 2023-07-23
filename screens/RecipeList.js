import { ScrollView, Text } from "react-native"
import RecipeCard from "../components/RecipeCard"
import { useEffect, useState, useContext, useNavigation } from "react"
import idContext from '../contexts/idContext';

export default function RecipeList() {

    const [messages, setMessages] = useState();
    const [id, setID] = useContext(idContext);

    //const navigation = useNavigation();

    useEffect(() => {
        fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes`, {method: 'GET'})
        .then((resp) => resp.json())
        .then((data) => {
            //console.log(data);
            setMessages(data);
            setID(data.length + 1);
        });
    }, []);



    return <ScrollView>
        {messages ?
            messages.map((mess) => <RecipeCard key={mess.recipeID} title={mess.name} uri={mess.uri} id={mess.recipeID}/>)
            : <Text>Loading</Text>
        }
    </ScrollView>
}