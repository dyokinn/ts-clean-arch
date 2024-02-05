export class RepositoryException extends Error {
  
    constructor(message: string) {
      super(message);
  
      // 👇️ because we are extending a built-in class
      Object.setPrototypeOf(this, RepositoryException.prototype);
    }

  }