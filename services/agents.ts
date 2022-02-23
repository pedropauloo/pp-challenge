import api from "./main";

export const agentsApi = {
  getAgents: () => api.get("agents"),
  getAgentById: (id: number) => api.get(`agent/${id}`),
};
