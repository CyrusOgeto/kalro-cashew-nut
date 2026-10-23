import { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  Keyboard,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { cashewData, disclaimer, Section, TableData } from '@/data/data';

type FlatItem = {
  id: string;
  title: string;
  body?: string;
  table?: TableData;
  path: string;
};

function flattenSections(sections: Section[], parentPath = ''): FlatItem[] {
  const out: FlatItem[] = [];
  for (const s of sections) {
    const path = parentPath ? `${parentPath} › ${s.title}` : s.title;
    if (s.body || s.table || !s.subsections?.length) {
      out.push({
        id: s.id,
        title: s.title,
        body: s.body,
        table: s.table,
        path,
      });
    }
    if (s.subsections?.length) {
      out.push(...flattenSections(s.subsections, s.title));
    }
  }
  return out;
}

function tableToText(table?: TableData): string {
  if (!table) return '';
  return table.rows.map((row) => row.join(' ')).join(' ');
}

// Specifically extracts the "What is it? (TIMP description)" from the table
function getTimpDescription(item: FlatItem): string {
  if (item.body) return item.body;
  
  if (item.table && item.table.rows) {
    const timpRow = item.table.rows.find(
      (row) => row[0] && row[0].toString().toLowerCase().includes('what is it')
    );
    if (timpRow && timpRow[1]) {
      return timpRow[1].toString();
    }
  }
  
  return 'No description available.';
}

function pickRandom(items: FlatItem[], excludeId?: string): FlatItem | null {
  if (items.length === 0) return null;
  const pool = items.filter((i) => i.id !== excludeId);
  const source = pool.length > 0 ? pool : items;
  return source[Math.floor(Math.random() * source.length)];
}

const KALRO_LINKS = [
  {
    label: 'Kenya Weather Prediction',
    sublabel: 'kaop.co.ke',
    url: 'https://kaop.co.ke',
  },
  {
    label: 'KALRO Crop Selector',
    sublabel: 'selector.kalro.org',
    url: 'https://selector.kalro.org',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const allItems = useMemo(() => flattenSections(cashewData), []);
  const searchableItems = useMemo(
    () =>
      allItems.filter(
        (i) =>
          (i.body && i.body.length > 0) ||
          (i.table && i.table.rows.length > 0)
      ),
    [allItems]
  );

  const [query, setQuery] = useState('');
  const [randomItem, setRandomItem] = useState<FlatItem | null>(() =>
    pickRandom(searchableItems)
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return [];
    return allItems.filter((item) => {
      const haystack = `${item.title} ${item.body ?? ''} ${item.path} ${tableToText(
        item.table
      )}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query, allItems]);

  const isSearching = query.trim().length > 0;

  const refreshRandom = () => {
    const next = pickRandom(searchableItems, randomItem?.id);
    setRandomItem(next);
  };

  const openResult = (id: string) => {
    router.push(`/Details?id=${id}`);
  };

  const openLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      }
    } catch {
      // silently ignore
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.greeting}>Welcome!</Text>
        <Text style={styles.subGreeting}>Cashew Value Chain TIMPs Catalog</Text>

        {/* Search Bar with Brown Icon */}
        <View style={styles.searchWrapper}>
          <Ionicons
            name="search"
            size={20}
            color="#8B4513"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search the whole catalog..."
            placeholderTextColor="#000000"
            value={query}
            onChangeText={setQuery}
            returnKeyType="search"
            onSubmitEditing={Keyboard.dismiss}
            autoCorrect={false}
          />
          {isSearching && (
            <Pressable onPress={() => setQuery('')} hitSlop={10}>
              <Text style={styles.clearIcon}>✕</Text>
            </Pressable>
          )}
        </View>

        {isSearching ? (
          <View style={styles.resultsBlock}>
            <Text style={styles.sectionLabel}>
              {results.length} result{results.length === 1 ? '' : 's'}
            </Text>
            {results.length === 0 ? (
              <Text style={styles.emptyText}>Nothing matched "{query}".</Text>
            ) : (
              results.map((item) => (
                <Pressable
                  key={item.id}
                  onPress={() => openResult(item.id)}
                  style={({ pressed }) => [
                    styles.resultCard,
                    pressed && styles.resultCardPressed,
                  ]}
                >
                  <Text style={styles.resultPath}>{item.path}</Text>
                  <Text style={styles.resultBody} numberOfLines={4}>
                    {getTimpDescription(item)}
                  </Text>
                </Pressable>
              ))
            )}
          </View>
        ) : (
          <>
            {randomItem && (
              <View style={styles.randomCard}>
                <View style={styles.randomHeader}>
                  <Text style={styles.randomTag}>EXPLORE</Text>
                  <Pressable onPress={refreshRandom} hitSlop={10}>
                    <Text style={styles.refreshBtn}>↻</Text>
                  </Pressable>
                </View>

                {/* Variety Title */}
                <Text style={styles.randomTitle}>{randomItem.title}</Text>

                {/* TIMP Description (The "What is it?" text) */}
                <Text style={styles.randomBody} numberOfLines={4}>
                  {getTimpDescription(randomItem)}
                </Text>

                {/* See More Button */}
                <Pressable
                  onPress={() => openResult(randomItem.id)}
                  style={styles.randomOpenBtn}
                >
                  <Text style={styles.randomOpenText}>See More</Text>
                </Pressable>
              </View>
            )}

            {/* ── KALRO Services ── */}
            <View style={styles.servicesBlock}>
              <Text style={styles.sectionLabel}>OTHER KALRO Services</Text>
              {KALRO_LINKS.map((link) => (
                <Pressable
                  key={link.url}
                  onPress={() => openLink(link.url)}
                  style={({ pressed }) => [
                    styles.serviceCard,
                    pressed && styles.serviceCardPressed,
                  ]}
                >
                  <Ionicons
                    name="globe-outline"
                    size={22}
                    color="#8B4513"
                    style={styles.serviceIcon}
                  />
                  <View style={styles.serviceTextWrap}>
                    <Text style={styles.serviceLabel}>{link.label}</Text>
                    <Text style={styles.serviceSub}>{link.sublabel}</Text>
                  </View>
                  <Text style={styles.serviceArrow}>›</Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.disclaimerCard}>
              <Text style={styles.disclaimerTitle}>Disclaimer</Text>
              <Text style={styles.disclaimerBody}>{disclaimer}</Text>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 20, paddingBottom: 100 },

  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.3,
  },
  subGreeting: {
    fontSize: 14,
    color: '#000000',
    marginTop: 4,
    marginBottom: 20,
    opacity: 0.8,
  },

  // Search Bar
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    padding: 0,
  },
  clearIcon: {
    fontSize: 14,
    color: '#000000',
    paddingHorizontal: 4,
  },

  sectionLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },

  // Search Results
  resultsBlock: { marginBottom: 24 },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  resultCardPressed: { backgroundColor: '#EEEEEE' },
  resultPath: {
    fontSize: 11,
    color: '#000000',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    opacity: 0.6,
  },
  resultBody: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000000',
  },
  emptyText: {
    fontSize: 14,
    color: '#000000',
    fontStyle: 'italic',
    paddingVertical: 20,
    textAlign: 'center',
    opacity: 0.6,
  },

  // Random Card (Inverted: Black bg, White text)
  randomCard: {
    backgroundColor: '#000000',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  randomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  randomTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },
  refreshBtn: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '400',
  },
  randomTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 10,
    lineHeight: 28,
  },
  randomBody: {
    fontSize: 14,
    lineHeight: 21,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  randomOpenBtn: {
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.3)',
  },
  randomOpenText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  // KALRO Services
  servicesBlock: { marginBottom: 24 },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  serviceCardPressed: { backgroundColor: '#EEEEEE' },
  serviceIcon: {
    marginRight: 12,
  },
  serviceTextWrap: {
    flex: 1,
  },
  serviceLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
  },
  serviceSub: {
    fontSize: 12,
    color: '#000000',
    opacity: 0.6,
    marginTop: 2,
  },
  serviceArrow: {
    fontSize: 22,
    color: '#000000',
    opacity: 0.5,
    marginLeft: 8,
  },

  // Disclaimer (Black border, White bg)
  disclaimerCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    padding: 16,
  },
  disclaimerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  disclaimerBody: {
    fontSize: 13,
    lineHeight: 20,
    color: '#000000',
    opacity: 0.8,
  },
});