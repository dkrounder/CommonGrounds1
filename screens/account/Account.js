import { View, Text, Button} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';


function Account({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Account!</Text>
        <PrimaryButton title="Go to Settings" navigation={navigation} />
      </View>
    );
}

export default Account;