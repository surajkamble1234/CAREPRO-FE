import { apiClient } from '@/core/api/client';

export const authApi = {
  // Staff Login
  login: async (credentials) => {
    return apiClient.post('/auth/login', credentials);
  },

  // Seed All 19 Demo Accounts
  seedDemo: async () => {
    return apiClient.post('/auth/seed-demo');
  },

  // Get Current User Profile
  getProfile: async () => {
    return apiClient.get('/auth/me');
  },

  // Refresh JWT Tokens
  refreshToken: async (token) => {
    return apiClient.post('/auth/refresh-token', { refreshToken: token });
  },
};

export const dashboardApi = {
  // Fetch Hospital KPI Metrics (Inpatients, Discharges, Emergency, Bed Status, OPD Queue)
  getMetrics: async () => {
    return apiClient.get('/dashboard/metrics');
  },
};

export const patientApi = {
  // Fetch Patients List
  getPatients: async (params) => {
    return apiClient.get('/patients', { params });
  },

  // Create Patient Record
  createPatient: async (patientData) => {
    return apiClient.post('/patients', patientData);
  },
};

export const pharmacyApi = {
  // Fetch Drug Stock Master
  getDrugs: async (params) => {
    return apiClient.get('/pharmacy/drugs', { params });
  },
};
