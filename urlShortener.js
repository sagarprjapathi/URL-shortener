class URLShortener {
    constructor() {
        this.urlMap = new Map(); 
        this.baseUrl = 'https://short.url/'; 
        this.shortUrlLength = 6; 
    }

    encodeURL(longURL) {
        
        const shortCode = this.generateShortCode(longURL);
        
       
        if (!this.urlMap.has(shortCode)) {
            this.urlMap.set(shortCode, longURL);
            return this.baseUrl + shortCode;
        } else {
            
            return this.encodeURL(longURL);
        }
    }

    decodeURL(shortURL) {
        
        const shortCode = shortURL.substring(this.baseUrl.length);

        if (this.urlMap.has(shortCode)) {
            
            const longURL = this.urlMap.get(shortCode);
            
            
            window.open(longURL, '_blank');
        } else {
           
            console.error('Short URL not found');
        }
    }

    generateShortCode(longURL) {
        
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < this.shortUrlLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
