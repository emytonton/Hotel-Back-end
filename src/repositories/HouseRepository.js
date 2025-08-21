
class HouseRepository {
  constructor(houseModel) {
    this.houseModel = houseModel;
  }


  async save(houseData) {
    
    if (houseData._id) {
      return this.houseModel.updateOne({ _id: houseData._id }, houseData);
    }
    
    return this.houseModel.create(houseData);
  }

 
  async search(params) {
    return this.houseModel.find(params);
  }

  
  async delete(houseId) {
    return this.houseModel.findByIdAndDelete(houseId);
  }
}

export default HouseRepository;