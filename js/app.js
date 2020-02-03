
const eventbrite = new EventBrite();
const ui = new UI();


document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    
    const eventName = document.getElementById("event-name").value;
    const category = document.getElementById("category").value;
         
    
    if(eventName !== ""){
            eventbrite.queryAPI(eventName, category)
             .then(events => {
                console.log(events);
             })
            
    } else {
        ui.printMessage("Add an Event or City", "text-center alert alert-danger mt-4");

     
    }
})