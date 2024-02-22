class LocalStorage {
    constructor() {
      this.store = {};
      this.length = 0;
    }
  
    getItem = (...args) => {
      if (!args.length) {
        throw new TypeError(
          "Failed to execute 'getItem'. 1 argument required, but only 0 present."
        );
      }
  
      const key = args[0];
  
      if (Object.prototype.hasOwnProperty.call(this.store, key)) {
        return this.store[key];
      }
  
      return undefined;
    };
  
    setItem = (...args) => {
      if (!args.length || args.length < 2) {
        throw new TypeError(
          `Failed to execute 'setItem'. 2 argument required, but only ${args.length} present.`
        );
      }
  
      const key = args[0];
      const value = args[1];
  
      this.store[String(key)] = String(value);
      this.length += 1;
    };
  
    removeItem = (...args) => {
      if (!args.length) {
        throw new TypeError(
          "Failed to execute 'removeItem'. 1 argument required, but only 0 present."
        );
      }
  
      const key = args[0];
  
      if (Object.prototype.hasOwnProperty.call(this.store, key)) {
        delete this.store[key];
      }
  
      this.length -= 1;
    };
  
    clear = () => {
      this.store = {};
      this.length = 0;
    };
  }
  
  const localStorage = new LocalStorage();
  Implementation using Map
  class LocalStorage {
    constructor() {
      this.store = new Map();
    }
    
    get length() {
      return this.store.size;
    }
    
    getItem = (...args) => {
      if (!args.length) {
        throw new TypeError(
          "Failed to execute 'getItem'. 1 argument required, but only 0 present."
        );
      }
  
      const key = args[0];
      
      return this.store.get(String(key));
    };
  
    setItem = (...args) => {
      if (!args.length || args.length < 2) {
        throw new TypeError(
          `Failed to execute 'setItem'. 2 argument required, but only ${args.length} present.`
        );
      }
  
      const key = args[0];
      const value = args[1];
      
      this.store.set(String(key), String(value));
    };
  
    removeItem = (...args) => {
      if (!args.length) {
        throw new TypeError(
          "Failed to execute 'removeItem'. 1 argument required, but only 0 present."
        );
      }
  
      const key = args[0];
      
      this.store.delete(String(key));
    };
  
    clear = () => {
      this.store.clear();
    };
  }
  
  const localStorage = new LocalStorage()