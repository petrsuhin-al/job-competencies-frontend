import axios, { AxiosInstance } from 'axios';

export default class ApiClient {
  public baseURL: string;
  public httpClient: AxiosInstance;

  constructor(baseURL = process.env.REACT_APP_API_URL || '') {
    this.baseURL = baseURL;
    this.httpClient = axios.create({ baseURL });
  }

  delete({ endpoint, params, options }: {
    endpoint: string;
    params?: any;
    options?: any;
  }): Promise<any> {
    return this.httpClient.delete(endpoint, {
      params,
      ...options
    });
  }

  get({ endpoint, params, options }: {
    endpoint: string;
    params?: any;
    options?: any;
  }): Promise<any> {
    return this.httpClient.get(endpoint, {
      params,
      ...options
    });
  }

  patch({ endpoint, data, options }: {
    endpoint: string;
    data: any;
    options?: any;
  }): Promise<any> {
    return this.httpClient.patch(endpoint, data, options);
  }

  post({ endpoint, data, options }: {
    endpoint: string;
    data: any;
    options?: any;
  }): Promise<any> {
    return this.httpClient.post(endpoint, data, options);
  }

  put({ endpoint, data, options }: {
    endpoint: string;
    data: any;
    options?: any;
  }): Promise<any> {
    return this.httpClient.put(endpoint, data, options);
  }

  postUrlencoded({ endpoint, data, options }: {
    endpoint: string;
    data: any;
    options?: any;
  }): Promise<any> {
    options = options || {};

    return this.httpClient.post(endpoint, data, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }

  upload({ endpoint, data, options }: {
    endpoint: string;
    data: any;
    options?: any;
  }): Promise<any> {
    options = options || {};

    return this.httpClient.post(endpoint, data, {
      ...options,
      headers: {
        'Content-Type': 'multipart/form-data',
        ...options.headers
      }
    });
  }

  uploadPut({ endpoint, data, options }: {
    endpoint: string;
    data: any;
    options?: any;
  }): Promise<any> {
    options = options || {};

    return this.httpClient.put(endpoint, data, {
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  download({ endpoint, data, options }: {
    endpoint: string;
    data?: any;
    options?: any;
  }): Promise<any> {
    return this.httpClient({
      url: endpoint,
      method: 'GET',
      responseType: 'blob'
    });
  }
}
