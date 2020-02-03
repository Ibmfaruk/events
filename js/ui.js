class UI {
    constructor(){
        this.init();
    }
    init(){
        this.printCategories(); 
    }

    printCategories() {
        const categoriesList = eventbrite.getCategoriesAPI()
             .then( categories => {
                 const categoryList = categories.categories.categories;
                 const categoriesSelect = document.querySelector("#category");

                 categoryList.forEach( category => {
                     const option = document.createElement("option");
                     option.value = category.id;
                     option.appendChild(document.createTextNode(category.name));
                     categoriesSelect.appendChild(option)
                 });
                
         })
         .catch(error => console.log(error));
    }
    printMessage(message, className) {
            const div = document.createElement("div");
            div.className = className;
            div.appendChild(document.createTextNode(message));

             const searchDiv = document.querySelector("#search-events");
             searchDiv.appendChild(div); 
 // Remove the alert after 3 seconds
          setTimeout(() => {
               this.removeMessage();
          }, 3000);
     }
     // Remove the message
     removeMessage() {
          const alert = document.querySelector('.alert');
          if(alert) {
               alert.remove();
          }
     }
}