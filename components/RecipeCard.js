import { useNavigation } from '@react-navigation/native';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-paper';

export default function RecipeCard(props) {

    const navigation = useNavigation();
    
    openRecipe = () => {
        navigation.push('Recipe', props);
    }

    return <Card onPress={openRecipe}>
        <Text>{props.title}</Text>
        <Image source ={{uri: props.uri}} style={{width:200, height:200}}/>
    </Card>
}