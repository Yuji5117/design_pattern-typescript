import { RedisClient } from "./redisClient";

class User {
  private store;
  constructor(public readonly name: string) {
    this.store = new RedisClient();
  }
  async addProfileViews() {
    const profileViews = Number(this.store.get(this.name) || 0);
    return this.store.set(this.name, (profileViews + 1).toString());
  }
  async getProfileViews() {
    return this.store.get(this.name);
  }
}

// import { MongoAdapter } from "./mongoAdapter";

class User {
  private store;
  constructor(public readonly name: string) {
    this.store = new MongoAdapter();
  }
  async addProfileViews() {
    const profileViews = Number(this.store.get(this.name) || 0);
    return this.store.set(this.name, (profileViews + 1).toString());
  }
  async getProfileViews() {
    return this.store.get(this.name);
  }
}