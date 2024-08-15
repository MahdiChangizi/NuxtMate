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