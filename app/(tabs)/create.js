import { View, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import MainButton from '../../components/MainButton';
import { styles } from '../../styles/create.styles';

export default function Create() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Title" />
            <TextInput style={[styles.input, { height: 100 }]} placeholder="Content" multiline />
            <MainButton title="Create" onPress={() => router.replace('/')} />
        </View>
    );
}

