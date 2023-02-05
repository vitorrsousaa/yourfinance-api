import HttpClient from './HttpClient';

class ModalitiesService {
  async list() {
    return HttpClient.get('modality');
  }
}

export default new ModalitiesService();
