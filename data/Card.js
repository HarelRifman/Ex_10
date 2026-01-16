import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/Card.styles';

export default function ArticleCard({ article }) {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push(`/article/${article.id}`)}>
      <Image source={article.image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.timestamp}>2h ago</Text>
          <Text style={styles.category}>{article.trending ? " TRENDING" : ""}</Text>
        </View>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.snippet} numberOfLines={2}>{article.content}</Text>
        <View style={styles.footerRow}>
          <Text style={styles.readMoreText}>{article.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}