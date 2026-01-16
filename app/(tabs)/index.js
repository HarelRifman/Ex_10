import { useState } from 'react';
import { FlatList, View, RefreshControl } from 'react-native';
import ArticleCard from '../../data/Card.js';
import { articlesList } from '../../data/articles';
import { styles } from '../../styles/index.styles.js';

export default function NewsFeed() {
  const [articles, setArticles] = useState(articlesList);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setArticles([...articlesList]);
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ArticleCard article={item} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 15 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}