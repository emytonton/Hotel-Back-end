
class ReserveRepository {

  constructor(reserveModel) {
    this.reserveModel = reserveModel;
  }


  async save(reserveData) {
    
    if (reserveData._id) {
      return this.reserveModel.updateOne({ _id: reserveData._id }, reserveData);
    }

    return this.reserveModel.create(reserveData);
  }

  
  async search(params) {
    return this.reserveModel.find(params).populate('house');
  }

  async delete(reserveId) {
    return this.reserveModel.findByIdAndDelete(reserveId);
  }
}

export default ReserveRepository;