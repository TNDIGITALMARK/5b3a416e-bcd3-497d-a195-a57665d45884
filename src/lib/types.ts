// AI Disaster Alert System - Type Definitions

export type AlertLevel = 'safe' | 'alert' | 'danger';

export type DisasterType = 'none' | 'flooding' | 'severe_flooding' | 'cyclone' | 'earthquake' | 'landslide';

export interface CityAlert {
  city: string;
  state: string;
  rainfall_mm_per_hour: number;
  river_level_meters: number;
  earthquake_magnitude: number;
  alert_status: AlertLevel;
  primary_threat: DisasterType;
  last_updated: string;
}

export interface StateRiskData {
  state: string;
  risk_level: AlertLevel;
  primary_threat: DisasterType;
  affected_cities: number;
}

export interface SafetyTip {
  title: string;
  description: string;
  icon: string;
}

export interface DisasterSafety {
  disaster: string;
  icon: string;
  color: string;
  tips: SafetyTip[];
}
