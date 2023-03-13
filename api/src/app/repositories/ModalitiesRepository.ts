import Modality from '../models/Modality';

class ModalitiesRepository {
  create(name: string, icon: string) {
    return Modality.create({ name, icon });
  }

  findByName(name: string) {
    return Modality.findOne({ name });
  }

  findAll() {
    return Modality.find().sort({ name: 1 });
  }

  delete(id: string) {
    return Modality.findByIdAndDelete(id);
  }
}

export default new ModalitiesRepository();
