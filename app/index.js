import { View, Text, TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import { styles } from '../styles/login.styles'
import MainButton from '../components/MainButton'

export default function Login() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Foo news</Text>
            <Text style={styles.subtitles}>Stay update to date with the latest foo</Text>

            <TextInput placeholder="Email Address" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry />

           <MainButton title="Lets go" onPress={() => router.push('/(tabs)')} />
        </View>
    )
}
