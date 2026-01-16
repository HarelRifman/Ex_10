import { useState } from 'react';
import { FlatList, View } from 'react-native';
import ArticleCard from '../../data/Card.js';
import { articlesList } from '../../data/articles';
import { styles } from '../../styles/index.styles.js';

export default function NewsFeed() {
  const [articles, setArticles] = useState(articlesList);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ArticleCard article={item} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 15 }}
      />
    </View>
  );
}