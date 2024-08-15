/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

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
