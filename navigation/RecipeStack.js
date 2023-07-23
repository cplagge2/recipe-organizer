import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeList from '../screens/RecipeList';
import Recipe from '../components/Recipe';

const stackNav = createNativeStackNavigator();

export default function RecipeStack() {
    return <stackNav.Navigator>
        <stackNav.Screen name="Recipes" component={RecipeList} options={{headerShown: true}}/>
        <stackNav.Screen name="Recipe" component={Recipe} options={{headerShown: true}}/>
    </stackNav.Navigator>
}