// src/repositories/UserRepository.js

class UserRepository {
  constructor(userModel) {
    this.userModel = userModel;
  }


  async save(userData) {
    
    if (userData._id) {
      return this.userModel.updateOne({ _id: userData._id }, userData);
    }
   
    return this.userModel.create(userData);
  }

  
  async search(params) {
    return this.userModel.find(params);
  }


  async delete(userId) {
    return this.userModel.findByIdAndDelete(userId);
  }
}

export default UserRepository;