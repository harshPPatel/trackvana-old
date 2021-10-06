export interface RootProxy<T> {
  createEntity(details: any): T;
  createEntities?(details: any): T[];
}
