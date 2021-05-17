const STORAGE_KEY = 'APP';

export const Storage = {
  setItem(key, value, module_name = null) {
    if (module_name) {
      const val = this.getItem(key, module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      const val = this.getStorage();
      val[key] = value;
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },

  getItem(key, module_name = null) {
    if (module_name) {
      const val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },

  getStorage() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || `{}`);
  },

  clear(key, module_name = null) {
    const val = this.getStorage();
    if (module_name) {
      delete val[module_name][key];
    } else {
      delete val[key];
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}