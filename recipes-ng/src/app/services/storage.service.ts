import { Injectable } from '@angular/core';
import { SessionStorageProvider } from '../models/storage/session-storage-provider';
import { IStorageProvider } from '../models/storage/i.storage-provider';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  id:IStorageProvider<string> = new SessionStorageProvider<string>('id');

  constructor() { }
}
