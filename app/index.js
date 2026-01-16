import { View, Text, TextInput, Keyboard, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { styles } from '../styles/login.styles'
import MainButton from '../components/MainButton'

const validatePassword = (password) => {
    return password.length > 8;
}

function handleLogin(router, email, password) {
    if (!validatePassword(password)) {
        console.log('Password must be at least 8 characters long');
        return;
    }
    router.push('/(tabs)');
}

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView 
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            onScrollBeginDrag={Keyboard.dismiss}
        >
            <Text style={styles.logo}>Foo news</Text>
            <Text style={styles.subtitles}>Stay update to date with the latest foo</Text>

            <TextInput placeholder="Email Address" style={styles.input} value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />

           <MainButton title="Lets go" onPress={() => handleLogin(router, email, password)} />
        </ScrollView>
    )
}
