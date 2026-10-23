import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

// Define the brown color for the active state
const ACTIVE_BROWN = '#8B4513'; // Saddle Brown
const INACTIVE_GRAY = '#888888'; // Gray for unselected tabs

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      // This handles the ICON colors globally
      iconColor={{
        default: INACTIVE_GRAY,
        selected: ACTIVE_BROWN,
      }}
    >
      {/* 1. Home */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label 
          selectedStyle={{ color: ACTIVE_BROWN }}
        >
          Home
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="home" />
      </NativeTabs.Trigger>

      {/* 2. Intro */}
      <NativeTabs.Trigger name="Intro">
        <NativeTabs.Trigger.Label 
          selectedStyle={{ color: ACTIVE_BROWN }}
        >
          Intro
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="book" />
      </NativeTabs.Trigger>

      {/* 3. Details */}
      <NativeTabs.Trigger name="Details">
        <NativeTabs.Trigger.Label 
          selectedStyle={{ color: ACTIVE_BROWN }}
        >
          Details
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="list" />
      </NativeTabs.Trigger>

      {/* 4. About */}
      <NativeTabs.Trigger name="About">
        <NativeTabs.Trigger.Label 
          selectedStyle={{ color: ACTIVE_BROWN }}
        >
          About
        </NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon md="info" />
      </NativeTabs.Trigger>

    </NativeTabs>
  );
}