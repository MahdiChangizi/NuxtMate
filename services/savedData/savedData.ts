/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My Github: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

import DB from "../storage";

class SavedData {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public get() {
        return DB.get(this.name) as string;
    }

    public set(token: string) {
        DB.set(this.name, token);
    }

    public del() {
        DB.remove(this.name);
    }

}

export default SavedData;