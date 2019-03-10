export class FetchServices {

    async req(_URL) {
        const data =  await fetch(_URL);
        return data.json();
    }

    async req(_URL, _METHOD,_HEADERS,_BODY) {
        const fetchConfig = {
            "method": _METHOD,
            "headers": {"Content-Type":_HEADERS},
            "body": JSON.stringify(_BODY)
        }
        const data = await fetch(_URL,fetchConfig);
        return data.json();
    }
}

