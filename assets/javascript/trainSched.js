var firebaseConfig = {
    apiKey: "AIzaSyANWwK0NZbyhhjxTWL7CbMj4wogn3EcJLA",
    authDomain: "trainschedule01-47f02.firebaseapp.com",
    databaseURL: "https://trainschedule01-47f02.firebaseio.com",
    projectId: "trainschedule01-47f02",
    storageBucket: "trainschedule01-47f02.appspot.com",
    messagingSenderId: "224104481454",
    appId: "1:224104481454:web:5c03e947fdec0a3c74233f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 $("#subBtn").on("click", function(event){
 event.preventDefault();

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
