import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

export default function RecipeCard(props) {

    const navigation = useNavigation();
    
    openRecipe = () => {
        navigation.push('Recipe', {"id": `${props.id}`, "url": `${props.url}`, "uri": `${props.uri}`, "title": `${props.title}`});
    }

    return <Card onPress={openRecipe} style={{marginBottom: 3}}>
        <View style={styles.cardRow}>
            <View style={{width: '60%'}}>
                <Image style={styles.picture}source ={{uri: props.uri}}/>
            </View>
            <View style={styles.titleText}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    </Card>
}

const styles = StyleSheet.create({
    general: {
        flex: 1,
        marginBottom: 10 
    },
    titleText: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    cardRow: {
        flexDirection: 'row',
        height: 200,
    },
    title: {
        fontSize: 25,
        fontFamily: 'Cochin',
        alignSelf: 'center',
    },
    picture: {
        width: '90%', 
        height: '90%',
        margin: '5%',
    }

});