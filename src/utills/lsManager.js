/* eslint class-methods-use-this: ["error", { "exceptMethods": ["setRefreshToken", "setAccessToken", "getCurrentStorage", "clear", "getAccessToken", "getRefreshToken"] }] */
import Vue from "vue";

class LocalStorageManager {
  constructor() {
    this.eventBus = new Vue();
  }

  $on(a, b) {
    return this.eventBus.$on(a, b);
  }

  getCurrentStorage() {
    const state = localStorage.getItem("state");
    if (state) {
      return JSON.parse(state);
    }
    return {};
  }

  updateStorage(newState = {}) {
    const state = {
      ...this.getCurrentStorage(),
      ...newState
    };
    localStorage.setItem("state", JSON.stringify(state));
    return this;
  }

  getCacheStore() {
    return this.getCurrentStorage().cache;
  }

  updateCache(cache = {}) {
    this.updateStorage({
      cache: {
        ...this.getCacheStore(),
        ...cache
      }
    });
    return this;
  }

  clear() {
    localStorage.removeItem("state");
  }
}

if (!window.LocalStorageManager) {
  window.LocalStorageManager = new LocalStorageManager();
}

export default window.LocalStorageManager;
