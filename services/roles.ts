import api from "./main";

export const rolesApi = {
  getRoles: () => api.get("roles"),
  getRoleById: (id: number) => api.get(`role/${id}`),
};
