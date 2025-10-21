'use client';

import { useState } from 'react';
import { cityAlerts } from '@/lib/mock-data';
import { AlertLevel } from '@/lib/types';
import { CheckCircle, AlertTriangle, AlertCircle, ChevronUp, ChevronDown } from 'lucide-react';

type SortField = 'city' | 'rainfall' | 'river' | 'earthquake' | 'status';
type SortDirection = 'asc' | 'desc';

export default function AlertsPage() {
  const [sortField, setSortField] = useState<SortField>('city');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [filterStatus, setFilterStatus] = useState<AlertLevel | 'all'>('all');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedAlerts = cityAlerts
    .filter((alert) => filterStatus === 'all' || alert.alert_status === filterStatus)
    .sort((a, b) => {
      let compareValue = 0;

      switch (sortField) {
        case 'city':
          compareValue = a.city.localeCompare(b.city);
          break;
        case 'rainfall':
          compareValue = a.rainfall_mm_per_hour - b.rainfall_mm_per_hour;
          break;
        case 'river':
          compareValue = a.river_level_meters - b.river_level_meters;
          break;
        case 'earthquake':
          compareValue = a.earthquake_magnitude - b.earthquake_magnitude;
          break;
        case 'status':
          const statusOrder = { danger: 3, alert: 2, safe: 1 };
          compareValue = statusOrder[a.alert_status] - statusOrder[b.alert_status];
          break;
      }

      return sortDirection === 'asc' ? compareValue : -compareValue;
    });

  const getStatusIcon = (status: AlertLevel) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="w-5 h-5 text-[#28a745]" />;
      case 'alert':
        return <AlertTriangle className="w-5 h-5 text-[#fd7e14]" />;
      case 'danger':
        return <AlertCircle className="w-5 h-5 text-[#dc3545]" />;
    }
  };

  const getStatusBadge = (status: AlertLevel) => {
    const styles = {
      safe: 'bg-green-100 text-green-800 border-green-300',
      alert: 'bg-orange-100 text-orange-800 border-orange-300',
      danger: 'bg-red-100 text-red-800 border-red-300',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-4 h-4 inline ml-1" />
    ) : (
      <ChevronDown className="w-4 h-4 inline ml-1" />
    );
  };

  return (
    <div className="bg-[hsl(var(--background))] py-8 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[hsl(var(--foreground))] mb-2">
            Live Alerts Dashboard
          </h1>
          <p className="text-base text-[hsl(var(--muted-foreground))]">
            Real-time disaster metrics and alert status for major Indian cities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filterStatus === 'all'
                ? 'bg-[hsl(var(--primary))] text-white'
                : 'bg-white border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-gray-50'
            }`}
          >
            All Alerts
          </button>
          <button
            onClick={() => setFilterStatus('danger')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filterStatus === 'danger'
                ? 'bg-[#dc3545] text-white'
                : 'bg-white border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-gray-50'
            }`}
          >
            Danger Only
          </button>
          <button
            onClick={() => setFilterStatus('alert')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filterStatus === 'alert'
                ? 'bg-[#fd7e14] text-white'
                : 'bg-white border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-gray-50'
            }`}
          >
            Alerts Only
          </button>
          <button
            onClick={() => setFilterStatus('safe')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filterStatus === 'safe'
                ? 'bg-[#28a745] text-white'
                : 'bg-white border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-gray-50'
            }`}
          >
            Safe Only
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-[hsl(var(--border))] p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Danger Zones</p>
                <p className="text-3xl font-bold text-red-600">
                  {cityAlerts.filter((a) => a.alert_status === 'danger').length}
                </p>
              </div>
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-[hsl(var(--border))] p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Alert Areas</p>
                <p className="text-3xl font-bold text-orange-600">
                  {cityAlerts.filter((a) => a.alert_status === 'alert').length}
                </p>
              </div>
              <AlertTriangle className="w-10 h-10 text-orange-500" />
            </div>
          </div>

          <div className="bg-white rounded-lg border border-[hsl(var(--border))] p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-1">Safe Regions</p>
                <p className="text-3xl font-bold text-green-600">
                  {cityAlerts.filter((a) => a.alert_status === 'safe').length}
                </p>
              </div>
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow-md border border-[hsl(var(--border))] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-[hsl(var(--border))]">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('city')}
                      className="text-sm font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors flex items-center"
                    >
                      City / State
                      <SortIcon field="city" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('rainfall')}
                      className="text-sm font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors flex items-center"
                    >
                      Rainfall (mm/hr)
                      <SortIcon field="rainfall" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('river')}
                      className="text-sm font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors flex items-center"
                    >
                      River Level (m)
                      <SortIcon field="river" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('earthquake')}
                      className="text-sm font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors flex items-center"
                    >
                      Earthquake Mag.
                      <SortIcon field="earthquake" />
                    </button>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <button
                      onClick={() => handleSort('status')}
                      className="text-sm font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors flex items-center"
                    >
                      Alert Status
                      <SortIcon field="status" />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[hsl(var(--border))]">
                {filteredAndSortedAlerts.map((alert, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(alert.alert_status)}
                        <div>
                          <div className="text-sm font-medium text-[hsl(var(--foreground))]">
                            {alert.city}
                          </div>
                          <div className="text-xs text-[hsl(var(--muted-foreground))]">
                            {alert.state}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${
                        alert.rainfall_mm_per_hour > 70 ? 'text-red-600' :
                        alert.rainfall_mm_per_hour > 40 ? 'text-orange-600' :
                        'text-[hsl(var(--foreground))]'
                      }`}>
                        {alert.rainfall_mm_per_hour}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${
                        alert.river_level_meters > 9 ? 'text-red-600' :
                        alert.river_level_meters > 7 ? 'text-orange-600' :
                        'text-[hsl(var(--foreground))]'
                      }`}>
                        {alert.river_level_meters}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${
                        alert.earthquake_magnitude > 3 ? 'text-red-600' :
                        alert.earthquake_magnitude > 2 ? 'text-orange-600' :
                        'text-[hsl(var(--foreground))]'
                      }`}>
                        {alert.earthquake_magnitude.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(alert.alert_status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-4 text-center text-sm text-[hsl(var(--muted-foreground))]">
          Last updated: {new Date().toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  );
}
