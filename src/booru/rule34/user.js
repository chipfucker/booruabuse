export class User {
    #api_key;
    #pass_hash;

    async constructor({ auth, config }) {
        (function authentication() {
            const login = (() => {
                if (
                    !(auth.user_id && auth.api_key && auth.pass_hash)
                    && auth.username && auth.password
                ) {
                    const response = await fetch("https://...", { headers: {
                        method: "POST"
                    }});

                    if ("invalid credentials") {
                        throw new Error();
                    } else {
                        return response;
                    }
                } else {
                    throw new Error();
                }
            })();

            if (auth.user_id) {
                this.user_id = auth.user_id;
            } else {
                // get from response
            }

            if (auth.api_key) {
                this.#api_key = auth.api_key;
            } else {
                // get from response
            }

            if (auth.pass_hash) {
                this.#pass_hash = auth.pass_hash;
            } else {
                // get from response
            }
        })();

        (function configuration() {
            if (config.exposeCredentials) {
                this.api_key = this.#api_key;
                this.pass_hash = this.#pass_hash;
            }
        })();
    }

    async getPost(id) {
        // return only item from "id:" + id
    }

    async search(query) {
        // return array of items using query
    }

    async getRelevantTags(query, offset) {
        // TODO: or whatever rule34 calls them. "related tags"?
    }
}
