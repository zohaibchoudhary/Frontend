const isBrowser = typeof window !== "undefined";

export class LocalStorage {
  static get(key) {
    if (!isBrowser) return;
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return null
  }

  static set(key, value) {
    if(!isBrowser) return;
    localStorage.setItem(key, JSON.stringify(value))
  }

  static remove(key) {
    if(!isBrowser) return;
    localStorage.removeItem(key)
  }

  static clear() {
    if(!isBrowser) return;
    localStorage.clear()
  }
}