/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import { compress, decompress } from 'lz-string';

class CacheManager {

/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

    private readonly dbName: string;
    private readonly storeName: string;
    private readonly isBrowser: boolean;

    constructor(dbName: string = 'myAppCache', storeName: string = 'apiCache') {
        this.dbName = dbName;
        this.storeName = storeName;
        this.isBrowser = typeof window !== 'undefined';
        if (this.isBrowser) {
            this.initDB();
        }
    }

    private initDB(): void {
        if (!this.isBrowser) return;

        const request = indexedDB.open(this.dbName, 1);
        request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(this.storeName)) {
                db.createObjectStore(this.storeName, { keyPath: 'url' });
            }
        };
    }

    public async get(url: string): Promise<any> {
        if (!this.isBrowser) return null;

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName);
            request.onsuccess = (event: Event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                const transaction = db.transaction(this.storeName, 'readonly');
                const store = transaction.objectStore(this.storeName);
                const getRequest = store.get(url);

                getRequest.onsuccess = () => {
                    if (getRequest.result) {
                        const decompressedData = decompress(getRequest.result.data);
                        resolve(JSON.parse(decompressedData));
                    } else {
                        resolve(null);
                    }
                };

                getRequest.onerror = () => {
                    reject(getRequest.error);
                };
            };

            request.onerror = () => {
                reject(request.error);
            };
        });
    }

    public async set(url: string, data: any): Promise<boolean> {
        if (!this.isBrowser) return false;

        const compressedData = compress(JSON.stringify(data));
        if (compressedData.length > 50 * 1024 * 1024) { // 50MB limit
            console.warn('Data too large to cache');
            return false;
        }

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName);

            request.onsuccess = (event: Event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                const transaction = db.transaction(this.storeName, 'readwrite');
                const store = transaction.objectStore(this.storeName);
                const putRequest = store.put({ url, data: compressedData });

                putRequest.onsuccess = () => resolve(true);
                putRequest.onerror = () => reject(putRequest.error);
            };

            request.onerror = () => reject(request.error);
        });
    }

    public async remove(url: string): Promise<boolean> {
        if (!this.isBrowser) return false;

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName);

            request.onsuccess = (event: Event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                const transaction = db.transaction(this.storeName, 'readwrite');
                const store = transaction.objectStore(this.storeName);
                const deleteRequest = store.delete(url);

                deleteRequest.onsuccess = () => resolve(true);
                deleteRequest.onerror = () => reject(deleteRequest.error);
            };

            request.onerror = () => reject(request.error);
        });
    }

    public async clear(): Promise<boolean> {
        if (!this.isBrowser) return false;

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName);

            request.onsuccess = (event: Event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                const transaction = db.transaction(this.storeName, 'readwrite');
                const store = transaction.objectStore(this.storeName);
                const clearRequest = store.clear();

                clearRequest.onsuccess = () => resolve(true);
                clearRequest.onerror = () => reject(clearRequest.error);
            };

            request.onerror = () => reject(request.error);
        });
    }
}

/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

export default CacheManager;