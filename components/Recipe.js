import { View, Text, Button } from "react-native"

export default function Recipe(props) {

    const removeRecipe = () => {
        console.log(props.route.params);
        fetch(`https://7qq6rvi3ha.execute-api.us-east-2.amazonaws.com/default/recipes/${props.route.params.id}`, {
            method: 'DELETE'
        }).then(resp => resp.json())
        .then(data => console.log(data));
    }

    return <View>
        <Text>{props.route.params.title}</Text>
        <Button title={"Remove Recipe"} onPress={removeRecipe}></Button>
    </View>
}