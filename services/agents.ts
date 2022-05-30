import api from "./main";

export const agentsApi = {
  getAgents: () => api.get("agents"),
  getAgentById: (id: any) => api.get(`agent/${id}`),
};
