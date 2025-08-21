
class ListUsersUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    
    return this.userRepository.search({}); 
  }
}

export default ListUsersUseCase;