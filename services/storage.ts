class DB {
    public get(key: string): string|null {
        return localStorage.getItem(key);
    }
    public set(key: string, value: any): boolean {
        try {
            localStorage.setItem(key, value);
            return true;
        }catch (e) {
            console.error(e);
            return  false;
        }
    }
    public remove(key: string): boolean {
        try {
            localStorage.removeItem(key);
            return true;
        }catch (e) {
            console.error(e);
            return false;
        }
    }
}
export default new DB();
