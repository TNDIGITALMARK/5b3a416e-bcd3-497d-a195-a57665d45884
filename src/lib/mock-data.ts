// AI Disaster Alert System - Mock Data

import { CityAlert, StateRiskData, DisasterSafety } from './types';

export const cityAlerts: CityAlert[] = [
  {
    city: 'Mumbai',
    state: 'Maharashtra',
    rainfall_mm_per_hour: 45,
    river_level_meters: 8.2,
    earthquake_magnitude: 2.1,
    alert_status: 'alert',
    primary_threat: 'flooding',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Delhi',
    state: 'Delhi',
    rainfall_mm_per_hour: 12,
    river_level_meters: 5.5,
    earthquake_magnitude: 1.8,
    alert_status: 'safe',
    primary_threat: 'none',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Chennai',
    state: 'Tamil Nadu',
    rainfall_mm_per_hour: 78,
    river_level_meters: 9.8,
    earthquake_magnitude: 2.3,
    alert_status: 'danger',
    primary_threat: 'severe_flooding',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Kolkata',
    state: 'West Bengal',
    rainfall_mm_per_hour: 55,
    river_level_meters: 8.9,
    earthquake_magnitude: 2.0,
    alert_status: 'alert',
    primary_threat: 'flooding',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Bangalore',
    state: 'Karnataka',
    rainfall_mm_per_hour: 8,
    river_level_meters: 4.2,
    earthquake_magnitude: 1.5,
    alert_status: 'safe',
    primary_threat: 'none',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Hyderabad',
    state: 'Telangana',
    rainfall_mm_per_hour: 15,
    river_level_meters: 6.1,
    earthquake_magnitude: 1.9,
    alert_status: 'safe',
    primary_threat: 'none',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Ahmedabad',
    state: 'Gujarat',
    rainfall_mm_per_hour: 62,
    river_level_meters: 7.8,
    earthquake_magnitude: 3.2,
    alert_status: 'danger',
    primary_threat: 'flooding',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Pune',
    state: 'Maharashtra',
    rainfall_mm_per_hour: 38,
    river_level_meters: 7.5,
    earthquake_magnitude: 2.0,
    alert_status: 'alert',
    primary_threat: 'flooding',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Jaipur',
    state: 'Rajasthan',
    rainfall_mm_per_hour: 5,
    river_level_meters: 3.8,
    earthquake_magnitude: 1.6,
    alert_status: 'safe',
    primary_threat: 'none',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    rainfall_mm_per_hour: 28,
    river_level_meters: 6.8,
    earthquake_magnitude: 1.9,
    alert_status: 'safe',
    primary_threat: 'none',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Bhubaneswar',
    state: 'Odisha',
    rainfall_mm_per_hour: 85,
    river_level_meters: 10.2,
    earthquake_magnitude: 2.4,
    alert_status: 'danger',
    primary_threat: 'severe_flooding',
    last_updated: '2025-10-21T14:30:00',
  },
  {
    city: 'Guwahati',
    state: 'Assam',
    rainfall_mm_per_hour: 92,
    river_level_meters: 11.5,
    earthquake_magnitude: 3.8,
    alert_status: 'danger',
    primary_threat: 'severe_flooding',
    last_updated: '2025-10-21T14:30:00',
  },
];

export const stateRiskData: StateRiskData[] = [
  { state: 'Andhra Pradesh', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Arunachal Pradesh', risk_level: 'alert', primary_threat: 'landslide', affected_cities: 2 },
  { state: 'Assam', risk_level: 'danger', primary_threat: 'severe_flooding', affected_cities: 5 },
  { state: 'Bihar', risk_level: 'alert', primary_threat: 'flooding', affected_cities: 3 },
  { state: 'Chhattisgarh', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Delhi', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Goa', risk_level: 'alert', primary_threat: 'flooding', affected_cities: 1 },
  { state: 'Gujarat', risk_level: 'danger', primary_threat: 'flooding', affected_cities: 4 },
  { state: 'Haryana', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Himachal Pradesh', risk_level: 'alert', primary_threat: 'landslide', affected_cities: 2 },
  { state: 'Jharkhand', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Karnataka', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Kerala', risk_level: 'alert', primary_threat: 'flooding', affected_cities: 2 },
  { state: 'Madhya Pradesh', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Maharashtra', risk_level: 'alert', primary_threat: 'flooding', affected_cities: 3 },
  { state: 'Manipur', risk_level: 'alert', primary_threat: 'landslide', affected_cities: 1 },
  { state: 'Meghalaya', risk_level: 'danger', primary_threat: 'severe_flooding', affected_cities: 3 },
  { state: 'Mizoram', risk_level: 'alert', primary_threat: 'landslide', affected_cities: 1 },
  { state: 'Nagaland', risk_level: 'alert', primary_threat: 'landslide', affected_cities: 1 },
  { state: 'Odisha', risk_level: 'danger', primary_threat: 'severe_flooding', affected_cities: 4 },
  { state: 'Punjab', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Rajasthan', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Sikkim', risk_level: 'alert', primary_threat: 'landslide', affected_cities: 1 },
  { state: 'Tamil Nadu', risk_level: 'danger', primary_threat: 'severe_flooding', affected_cities: 3 },
  { state: 'Telangana', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Tripura', risk_level: 'alert', primary_threat: 'flooding', affected_cities: 1 },
  { state: 'Uttar Pradesh', risk_level: 'safe', primary_threat: 'none', affected_cities: 0 },
  { state: 'Uttarakhand', risk_level: 'alert', primary_threat: 'landslide', affected_cities: 2 },
  { state: 'West Bengal', risk_level: 'alert', primary_threat: 'flooding', affected_cities: 3 },
];

export const disasterSafetyTips: DisasterSafety[] = [
  {
    disaster: 'Flood',
    icon: '🌊',
    color: 'blue',
    tips: [
      {
        title: 'Move to Higher Ground',
        description: 'Evacuate immediately to higher ground when flooding begins',
        icon: '⬆️',
      },
      {
        title: 'Avoid Floodwaters',
        description: 'Never walk, swim, or drive through floodwaters - 6 inches can knock you down',
        icon: '🚫',
      },
      {
        title: 'Emergency Kit Ready',
        description: 'Keep emergency supplies, food, water, and medicines in waterproof containers',
        icon: '🎒',
      },
      {
        title: 'Stay Informed',
        description: 'Monitor weather alerts and follow evacuation orders immediately',
        icon: '📻',
      },
    ],
  },
  {
    disaster: 'Cyclone',
    icon: '🌀',
    color: 'purple',
    tips: [
      {
        title: 'Secure Your Home',
        description: 'Board up windows, secure outdoor objects, and reinforce doors',
        icon: '🏠',
      },
      {
        title: 'Stay Indoors',
        description: 'Stay inside away from windows and doors during the cyclone',
        icon: '🚪',
      },
      {
        title: 'Store Water & Food',
        description: 'Stock up on drinking water, non-perishable food, and batteries',
        icon: '💧',
      },
      {
        title: 'Evacuation Plan',
        description: 'Know your evacuation route and shelter location in advance',
        icon: '🗺️',
      },
    ],
  },
  {
    disaster: 'Earthquake',
    icon: '🏚️',
    color: 'orange',
    tips: [
      {
        title: 'Drop, Cover, Hold',
        description: 'Drop to ground, take cover under sturdy furniture, hold on until shaking stops',
        icon: '🛡️',
      },
      {
        title: 'Stay Away from Glass',
        description: 'Move away from windows, mirrors, and heavy objects that could fall',
        icon: '🪟',
      },
      {
        title: 'Exit Carefully',
        description: 'After shaking stops, exit building carefully watching for falling debris',
        icon: '🚶',
      },
      {
        title: 'Aftershock Alert',
        description: 'Be prepared for aftershocks and stay in open areas away from buildings',
        icon: '⚠️',
      },
    ],
  },
];

// Mock AI risk assessment function
export function calculateRiskScore(data: CityAlert): number {
  let score = 0;

  // Rainfall contribution (0-40 points)
  if (data.rainfall_mm_per_hour > 70) score += 40;
  else if (data.rainfall_mm_per_hour > 40) score += 25;
  else if (data.rainfall_mm_per_hour > 20) score += 10;

  // River level contribution (0-30 points)
  if (data.river_level_meters > 9) score += 30;
  else if (data.river_level_meters > 7) score += 20;
  else if (data.river_level_meters > 5) score += 10;

  // Earthquake magnitude contribution (0-30 points)
  if (data.earthquake_magnitude > 3) score += 30;
  else if (data.earthquake_magnitude > 2) score += 15;
  else if (data.earthquake_magnitude > 1.5) score += 5;

  return score; // 0-100 scale
}

export function getRiskLevel(score: number): 'safe' | 'alert' | 'danger' {
  if (score >= 60) return 'danger';
  if (score >= 30) return 'alert';
  return 'safe';
}
