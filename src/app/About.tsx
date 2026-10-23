import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { disclaimer, abbreviationTable } from '@/data/data';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>About</Text>

        {/* ── About this app ── */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>About this app</Text>
          <Text style={styles.body}>
            The Cashew Value Chain TIMPs Catalog is a mobile reference tool
            designed to give farmers, extension officers, agripreneurs, and
            researchers quick access to the inventory of Technologies,
            Innovations, and Management Practices (TIMPs) for the cashew value
            chain in Kenya.
          </Text>
          <Text style={styles.body}>
            All content is sourced from the published inventory compiled by the
            Kenya Agricultural and Livestock Research Organization (KALRO)
            under the National Agricultural Value Chain Development Project
            (NAVCDP), with support from the World Bank and the Ministry of
            Agriculture and Livestock Development (MoALD).
          </Text>
          <Text style={styles.body}>
            The catalog is organized into sub-themes covering improved cashew
            varieties, seed systems, agronomic practices, soil and water
            management, crop health, harvesting and postharvest handling,
            value addition, food safety, mechanization, business and marketing,
            and agricultural policy options.
          </Text>
          <Text style={styles.body}>
            This app is intended for advisory use only. For site-specific
            guidance, please consult your area agricultural extension officer.
          </Text>
        </View>

        {/* ── Disclaimer (bordered card, like index) ── */}
        <View style={styles.disclaimerCard}>
          <Text style={styles.blockTitle}>Disclaimer</Text>
          <Text style={styles.disclaimerBody}>{disclaimer}</Text>
        </View>

        {/* ── Abbreviations & Acronyms ── */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Abbreviations & Acronyms</Text>

          <View style={styles.table}>
            <View style={[styles.row, styles.headerRow]}>
              <View style={styles.acronymCell}>
                <Text style={styles.headerCellText}>Acronym</Text>
              </View>
              <View style={styles.descCell}>
                <Text style={styles.headerCellText}>Description</Text>
              </View>
            </View>

            {abbreviationTable.map((item, index) => {
              const isLast = index === abbreviationTable.length - 1;
              return (
                <View key={item.acronym} style={[styles.row, isLast && styles.lastRow]}>
                  <View style={styles.acronymCell}>
                    <Text style={styles.acronymText}>{item.acronym}</Text>
                  </View>
                  <View style={styles.descCell}>
                    <Text style={styles.descText}>{item.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* ── Credits ── */}
        <View style={styles.block}>
          <Text style={styles.blockTitle}>Credits</Text>
          <Text style={styles.body}>
            Source: Kenya Agricultural and Livestock Research Organization
            (KALRO), 2026. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  content: { padding: 20, paddingBottom: 100 },

  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000', 
    marginBottom: 24,
    letterSpacing: -0.3,
  },

  block: { marginBottom: 32 },

  blockTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#000000', 
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
  },

  body: {
    fontSize: 14,
    lineHeight: 22,
    color: '#000000', 
    marginBottom: 10,
    opacity: 0.8,
  },

  // Disclaimer — bordered card, like index disclaimerCard
  disclaimerCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000', 
    borderRadius: 10,
    padding: 16,
    marginBottom: 32,
  },
  disclaimerBody: {
    fontSize: 13,
    lineHeight: 20,
    color: '#000000', 
    opacity: 0.8,
  },

  // Table — black borders, inverted black header row
  table: {
    borderWidth: 1,
    borderColor: '#000000', 
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000', 
    backgroundColor: '#FFFFFF',
  },
  lastRow: {
    borderBottomWidth: 0, // Removes the stacked bottom border
  },
  headerRow: {
    backgroundColor: '#000000', 
  },
  acronymCell: {
    width: 90,
    padding: 8,
    borderRightWidth: 1,
    borderRightColor: '#000000', 
  },
  descCell: {
    flex: 1,
    padding: 8,
  },
  headerCellText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF', 
  },
  acronymText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000000', 
  },
  descText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#000000', 
    opacity: 0.8,
  },
});