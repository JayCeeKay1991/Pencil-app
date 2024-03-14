import User from "../types/User";
import { apiClient } from "./ApiClient";

// login user with credentials POST
export const login = async (userData: Partial<User>) => {
    return await apiClient<User>('login', 'POST', userData)
}



