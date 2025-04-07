const config = useRuntimeConfig();

class ApiTwitch {

    token: string = "";
    data: Array<unknown> = []

    constructor() {}

    async getToken() {
        const params = new URLSearchParams({
            client_id: config.public.twitchClient as string,
            client_secret: config.twitchSecret as string,
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
                'ClientId: ': config.public.twitchClient as string,
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
        } catch (error) {
            console.error('Error in:', error);
        }
    }

}

export { ApiTwitch }