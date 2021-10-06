import { environment } from "src/environments/environment";

export const withEndpoint = (endpoint: string) => {
    return (url: string = '') => environment.apiUrl + endpoint + url;
};
  