import { useState, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { cashewData, Section, TableData } from '@/data/data';

function DataTable({ data }: { data: TableData }) {
  const hasHeader = data.columns && data.columns.length > 0;

  return (
    <View style={styles.table}>
      {hasHeader && (
        <View style={[styles.tableRow, styles.tableHeaderRow]}>
          {data.columns!.map((col, i) => (
            <View key={i} style={styles.tableCell}>
              <Text style={styles.tableHeaderText}>{col}</Text>
            </View>
          ))}
        </View>
      )}
      {data.rows.map((row, i) => (
        <View key={i} style={styles.tableRow}>
          {row.map((cell, j) => (
            <View key={j} style={styles.tableCell}>
              <Text style={styles.tableCellText}>{cell}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function GapsList({ items }: { items: string[] }) {
  if (!items || items.length === 0) return null;
  return (
    <View style={styles.gapsBlock}>
      <Text style={styles.gapsTitle}>GAPS</Text>
      {items.map((g, i) => (
        <View key={i} style={styles.gapItem}>
          <Text style={styles.gapNumber}>{i + 1}.</Text>
          <Text style={styles.gapText}>{g}</Text>
        </View>
      ))}
    </View>
  );
}

function SectionContent({ section }: { section: Section }) {
  return (
    <View>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.body && <Text style={styles.body}>{section.body}</Text>}
      {section.table && <DataTable data={section.table} />}
      {section.gaps && section.gaps.length > 0 && <GapsList items={section.gaps} />}
    </View>
  );
}

/* ─── Find which top-level tab & which accordion a given section id lives in ─── */
function findLocation(sectionId: string) {
  const sectionTwo = cashewData.find((s) => s.id === '2');
  const topLevel = sectionTwo?.subsections ?? [];

  for (const top of topLevel) {
    if (top.id === sectionId) {
      return { topId: top.id, subId: null };
    }
    for (const sub of top.subsections ?? []) {
      if (sub.id === sectionId) {
        return { topId: top.id, subId: sub.id };
      }
      for (const leaf of sub.subsections ?? []) {
        if (leaf.id === sectionId) {
          return { topId: top.id, subId: sub.id };
        }
      }
    }
  }
  return null;
}

export default function DetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const targetId = params.id;

  const sectionTwo = cashewData.find((s) => s.id === '2');
  const topLevel = sectionTwo?.subsections ?? [];

  // 'menu' is the default tab
  const [activeTopId, setActiveTopId] = useState('menu');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  
  const [query, setQuery] = useState('');

  // When `id` param changes, jump to that section
  useEffect(() => {
    if (!targetId) return;
    const loc = findLocation(targetId);
    if (loc) {
      setActiveTopId(loc.topId);
      setExpandedIds(loc.subId ? new Set([loc.subId]) : new Set());
    }
  }, [targetId]);

  const activeTop = activeTopId === 'menu' ? null : topLevel.find((s) => s.id === activeTopId);
  const subsections = activeTop?.subsections ?? [];

  const toggleExpanded = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  // Build a flat list of everything for the default menu
  const menuItems = useMemo(() => {
    const items: { id: string; title: string }[] = [];
    
    // Include Section 1 (Introduction) manually since it's outside of Section 2
    const sectionOne = cashewData.find((s) => s.id === '1');
    if (sectionOne) {
      items.push({ id: sectionOne.id, title: sectionOne.title });
      sectionOne.subsections?.forEach(sub => items.push({ id: sub.id, title: sub.title }));
    }

    // Section 2 items
    topLevel.forEach((top) => {
      items.push({ id: top.id, title: top.title });
      top.subsections?.forEach((sub) => {
        items.push({ id: sub.id, title: sub.title });
        sub.subsections?.forEach((leaf) => {
          items.push({ id: leaf.id, title: leaf.title });
        });
      });
    });

    return items;
  }, [topLevel]);

  // Filter menu items based on search
  const filteredMenuItems = menuItems.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.screen}>
        
        {/* Search Bar */}
        <View style={styles.searchWrapper}>
          <Ionicons name="search" size={20} color="#8B4513" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search details..."
            placeholderTextColor="#000000"
            value={query}
            onChangeText={setQuery}
            autoCorrect={false}
          />
          {query.length > 0 && (
            <Pressable onPress={() => setQuery('')} hitSlop={10}>
              <Text style={styles.clearIcon}>✕</Text>
            </Pressable>
          )}
        </View>

        {/* Horizontal Tab Bar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabBar}
          contentContainerStyle={styles.tabBarContent}
        >
          <Pressable
            onPress={() => {
              setActiveTopId('menu');
              setExpandedIds(new Set());
            }}
            style={[styles.tab, activeTopId === 'menu' && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTopId === 'menu' && styles.tabTextActive]}>
              Menu
            </Text>
          </Pressable>

          {topLevel.map((s) => {
            const isActive = s.id === activeTopId;
            return (
              <Pressable
                key={s.id}
                onPress={() => {
                  setActiveTopId(s.id);
                  setExpandedIds(new Set());
                }}
                style={[styles.tab, isActive && styles.tabActive]}
              >
                <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                  {s.id}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentInner}
        >
          {/* DEFAULT MENU VIEW */}
          {activeTopId === 'menu' && (
            <View style={styles.menuList}>
              {filteredMenuItems.length === 0 ? (
                <Text style={styles.emptyText}>No results found for "{query}".</Text>
              ) : (
                filteredMenuItems.map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() => {
                      const loc = findLocation(item.id);
                      if (loc) {
                        setActiveTopId(loc.topId);
                        setExpandedIds(loc.subId ? new Set([loc.subId]) : new Set());
                      }
                    }}
                    style={({ pressed }) => [
                      styles.menuItem,
                      pressed && styles.menuItemPressed,
                    ]}
                  >
                    <Text style={styles.menuItemText}>{item.title}</Text>
                    <Text style={styles.menuItemArrow}>›</Text>
                  </Pressable>
                ))
              )}
            </View>
          )}

          {/* SPECIFIC TAB VIEW */}
          {activeTop && (
            <>
              <SectionContent section={activeTop} />

              {subsections.length > 0 && (
                <View style={styles.subList}>
                  {subsections.map((sub) => {
                    const isOpen = expandedIds.has(sub.id);
                    return (
                      <View key={sub.id} style={styles.accordion}>
                        <Pressable
                          onPress={() => toggleExpanded(sub.id)}
                          style={styles.accordionHeader}
                        >
                          <Text style={styles.accordionTitle}>{sub.title}</Text>
                          <Text style={styles.chevron}>{isOpen ? '−' : '+'}</Text>
                        </Pressable>

                        {isOpen && (
                          <View style={styles.accordionBody}>
                            {sub.subsections && sub.subsections.length > 0 ? (
                              sub.subsections.map((leaf) => (
                                <View key={leaf.id} style={styles.leafBlock}>
                                  <SectionContent section={leaf} />
                                </View>
                              ))
                            ) : (
                              <SectionContent section={sub} />
                            )}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  screen: { flex: 1, backgroundColor: '#FFFFFF' },

  // Search Bar (Matches Index Page)
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
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

  // Tab Bar
  tabBar: {
    flexGrow: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  tabBarContent: { paddingHorizontal: 16, paddingVertical: 10, gap: 8 },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F4F4F5',
    marginRight: 8,
  },
  tabActive: { backgroundColor: '#000000' },
  tabText: { fontSize: 13, fontWeight: '600', color: '#555555' },
  tabTextActive: { color: '#FFFFFF' },

  // Content
  content: { flex: 1 },
  contentInner: { padding: 20, paddingBottom: 100 },
  
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000000',
    letterSpacing: -0.3,
  },
  body: { fontSize: 14, lineHeight: 22, color: '#000000', opacity: 0.8, marginBottom: 16 },

  // Table
  table: {
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 12,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  tableHeaderRow: { backgroundColor: '#000000' },
  tableCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#000000',
  },
  tableHeaderText: { fontSize: 12, fontWeight: '700', color: '#FFFFFF' },
  tableCellText: { fontSize: 12, lineHeight: 18, color: '#000000', opacity: 0.9 },

  // Gaps
  gapsBlock: { marginTop: 20, marginBottom: 16 },
  gapsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  gapItem: { flexDirection: 'row', marginBottom: 6 },
  gapNumber: { width: 24, fontSize: 13, fontWeight: '700', color: '#000000' },
  gapText: { flex: 1, fontSize: 13, lineHeight: 20, color: '#000000', opacity: 0.8 },

  // Menu List
  menuList: { marginTop: 8 },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  menuItemPressed: { backgroundColor: '#F9F9F9' },
  menuItemText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    paddingRight: 12,
  },
  menuItemArrow: {
    fontSize: 20,
    color: '#999999',
  },
  emptyText: {
    fontSize: 14,
    color: '#000000',
    fontStyle: 'italic',
    paddingVertical: 20,
    textAlign: 'center',
    opacity: 0.6,
  },

  // Accordions
  subList: { marginTop: 16 },
  accordion: { borderBottomWidth: 1, borderBottomColor: '#EEEEEE' },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  accordionTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
    paddingRight: 12,
  },
  chevron: {
    fontSize: 20,
    fontWeight: '400',
    color: '#999999',
    width: 20,
    textAlign: 'center',
  },
  accordionBody: { paddingBottom: 16, paddingRight: 8 },
  leafBlock: {
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 16,
    marginTop: 16,
  },
});