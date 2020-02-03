class EventBrite {
    constructor() {
        this.auth_token = "NOIT3HMLHN2TX45ILJU7"; 
        this.orderby = 'date';
    }
    async queryAPI(eventName, category) {
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&categories=${category}&sort_by=${this.orderby}&token=${ this.auth_token}`);

        // Wait for response, then return as json
       const events = await eventsResponse.json();

       return {
           events
       }
    }
    async getCategoriesAPI() {
        const categoriesResponse = await fetch(`
        https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        const categories = await categoriesResponse.json();

        return {
            categories
        }
    }
   
}

