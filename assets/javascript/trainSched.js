 // Your web app's Firebase configuration

// Initialize Firebase



 $("#subBtn").on("click", function(event){
 event.preventDefault();
 var database = firebase.database();
 
    var trainName= $("#trainName").val().trim();
    var trainFrequency= $("#frequency").val().trim();
    var trainDestination = $("#Destination").val().trim();
    var firstTrainTime = $("#firstTrainTime").val().trim();


    var newTrainInfo= {
        train: trainName,
        frequency: trainFrequency,
        destination: trainDestination,
        firstTrain: firstTrainTime,
      }

    database.ref().push(newTrainInfo);


 });
