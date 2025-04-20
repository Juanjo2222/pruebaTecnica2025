class ApiTwitch {

    token: string = "";
    data: Array<unknown> = []
    total: number = 0;

    constructor() {}

    async getToken() {
        const params = new URLSearchParams({
            client_id:'i4f2pvsj5fkpcqm8uwk459su21l4bj',
            client_secret: 'w2sx4qn36dv6cr6qif23m9psphtvr4',
            grant_type: 'client_credentials'
        });

        try {
            const response = await fetch('https://id.twitch.tv/oauth2/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params,
            });

            if (!response.ok) {
                throw new Error(`Error in: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            this.token = data.access_token;
        } catch (error) {
            console.error('Error in:', error);
        }
    }

    async requestApi<T>(url: string) {
        const twitchOptions = {
            method: 'GET',
            headers: {
                'Client-ID':'i4f2pvsj5fkpcqm8uwk459su21l4bj',
                'Authorization': `Bearer ${this.token}`,
            },
        };

        try {
            const response = await fetch(url, twitchOptions);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(
                    `Error in: ${response.status} - ${response.statusText}\n${errorText}`,
                );
            }

            const data = await response.json();
            this.data = data.data as T[];
            this.total = data.total;
        } catch (error) {
            console.error('Error in:', error);
        }
    }

}

export { ApiTwitch }