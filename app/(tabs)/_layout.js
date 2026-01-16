import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/tabs._layout.styles';

export default function TabsLayout() {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.headerContainer} edges={['top']}>
        <View style={styles.headerContent}>
          <Text style={styles.logoText}>Foo news</Text>
        </View>
      </SafeAreaView>

      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: 'News feed',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../assets/foo1.jpg')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            tabBarLabel: 'Create article',
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../assets/foo2.jpg')}
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="article/[id]"
          options={{ href: null }}
        />
      </Tabs>
    </View>
  );
}
