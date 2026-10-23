import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cashewData } from '@/data/data';

export default function IntroScreen() {
  // Grab the Introduction section (id "1") from data.ts
  const introSection = cashewData.find((s) => s.id === '1');

  // Fallback if content is missing
  if (!introSection) {
    return (
      <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Introduction content not found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>{introSection.title}</Text>

        {introSection.subsections?.map((sub) => (
          <View key={sub.id} style={styles.block}>
            <Text style={styles.subTitle}>{sub.title}</Text>
            {sub.body && <Text style={styles.body}>{sub.body}</Text>}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    paddingBottom: 80, // extra space so last paragraph clears the tab bar
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    color: '#111',
    letterSpacing: -0.3,
  },
  block: {
    marginBottom: 24,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#222',
  },
  body: {
    fontSize: 15,
    lineHeight: 24,
    color: '#555',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 15,
    color: '#888',
  },
});