class BaseRequest {

    private readonly baseUrl: string;
    private readonly config: { headers: { [key: string]: any } };

    constructor(baseUrl: string, config: { headers: { [key: string]: any } }) {
        this.baseUrl = baseUrl;
        this.config = config;
    }

}

export default BaseRequest;