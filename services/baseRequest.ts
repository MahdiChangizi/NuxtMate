/*
    Written by: "Mahdi Changizi"
    Feel free to reach out to me:
    My GitHub: @https://github.com/Mahdichangizi
    My Telegram: @https://t.me/Mahdi_changizi
*/

class BaseRequest {

    private readonly baseUrl: string;
    private readonly config: { headers: { [key: string]: any } };

    constructor(baseUrl: string, config: { headers: { [key: string]: any } }) {
        this.baseUrl = baseUrl;
        this.config = config;
    }

}

export default BaseRequest;