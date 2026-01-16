import { useState } from 'react';
import { View, TextInput, Keyboard, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import MainButton from '../../components/MainButton';
import { styles } from '../../styles/create.styles';
import { articlesList } from '../../data/articles';



export default function Create() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleCreate = (title, content) => {
        console.log('Creating article:', { title, content });
        articlesList.push({ id: articlesList.length + 1, author: 'Anonymous', title: title, content: content, image: require('../../assets/foo1.jpg'), trending: false, });
        setTitle('');
        setContent('');
        router.replace('/');
    };
    return (
        <ScrollView 
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
            onScrollBeginDrag={Keyboard.dismiss}
        >
            <TextInput style={styles.input} placeholder="Title" value={title} onChangeText={setTitle} />
            <TextInput style={[styles.input, { height: 100 }]} placeholder="Content" multiline value={content} onChangeText={setContent} />
            <MainButton title="Create" onPress={() => handleCreate(title, content)} />
        </ScrollView>
    );
}

