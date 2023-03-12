import HttpClient from './HttpClient';

class ModalitiesService {
  private httpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001/api');
  }

  async list() {
    return this.httpClient.get('/modality');
  }
}

export default new ModalitiesService();
