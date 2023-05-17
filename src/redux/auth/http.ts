import axios from "axios";
import BASE_URL from "redux/baseURL";

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log("Пользователь не авторизован");
      }
    }
    throw err;
  }
);

export default $api;
