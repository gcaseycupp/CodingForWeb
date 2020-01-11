export interface IStorageProvider<T> {
    get(): T;
    set(value:T):void;
    remove():void;
}