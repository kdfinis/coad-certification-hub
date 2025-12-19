// API Client for COAD Certification Hub
// Uses environment variables for production/development URLs

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
const DOMAIN = import.meta.env.VITE_DOMAIN || 'http://localhost:8080';
const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.coad.ai';

export const apiConfig = {
  baseURL: API_BASE_URL,
  domain: DOMAIN,
  appURL: APP_URL,
};

// API Client with error handling
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({
          error: response.statusText,
        }));
        throw new Error(error.error || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      // Log errors in development only
      if (import.meta.env.DEV) {
        console.error('API request failed:', error);
      }
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// Workforce API endpoints
export const workforceApi = {
  // Get professionals with filters
  getProfessionals: (params?: {
    track?: string;
    competency?: string;
    tier?: string;
    availability?: string;
    level?: string;
    minRate?: number;
    maxRate?: number;
    page?: number;
    limit?: number;
  }) => {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, String(value));
        }
      });
    }
    const query = queryParams.toString();
    return apiClient.get(`/api/workforce/professionals${query ? `?${query}` : ''}`);
  },

  // Create project request
  createProject: (data: {
    clientId: string;
    projectTitle: string;
    projectDescription: string;
    projectScope?: string;
    deliverables?: string;
    requiredCompetencies?: string[];
    preferredTier?: 'charterholder' | 'track_completer' | 'any';
    requiredTrack?: 'AAC' | 'AIO' | 'any';
    requiredModules?: string[];
    projectType: string;
    engagementType: string;
    startDate?: string;
    endDate?: string;
    durationWeeks?: number;
    budgetMin?: number;
    budgetMax?: number;
    locationPreference?: string;
    languageRequirements?: string[];
  }) => {
    return apiClient.post('/api/workforce/projects', data);
  },

  // Get hub statistics
  getStats: () => {
    return apiClient.get('/api/workforce/stats');
  },

  // Trigger matching algorithm
  triggerMatching: (projectId: string) => {
    return apiClient.post('/api/workforce/match', { projectId });
  },
};

// Create API client instance
const apiClient = new ApiClient(API_BASE_URL);

// Health check
export const healthCheck = () => {
  return apiClient.get('/health');
};

export default apiClient;

