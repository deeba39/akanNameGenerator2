'use strict';

var s=angular.module('myApp.view1', ['ngRoute'])
 var genderFrmFab =""; 

s.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


s.controller('View1Ctrl', function($scope) {
	$scope.birthdaytext="9/12/2014";
    $scope.Obj ={"dayOfBirth": "","gender": genderFrmFab};
});

   s.filter('filterakanName', function(){
return function(input) {
	input = input || '';
	var result = input;
	return AkanNameGenerator((result.dayOfBirth).toUpperCase(), (genderFrmFab).toUpperCase());
};	
});


function AkanNameGenerator(dayOfBirth,gender){
var dob=getTheDay(dayOfBirth);
 if(dob == "MONDAY" & gender == "MALE"){
	 	return "Kwadwo";
	 }
	 	 else if(dob == "MONDAY" & gender == "FEMALE"){
	 	return "Adjoa";
	 }
	 	else if(dob == "TUESDAY" & gender == "MALE"){
	 	return "Kwabena";
	 }
	 	else if(dob == "TUESDAY" & gender == "FEMALE"){
	 	return "Abena";
	 }
	 	else if(dob== "WEDNESDAY" & gender == "MALE"){
	 	return "Kwaku";
	 }
	 	else if(dob == "WEDNESDAY" & gender == "FEMALE"){
	 	return "Akua";
	 }
	 	else if(dob == "THURSDAY" & gender == "MALE"){
	 	return "Yaw";
	 }
	 	else if(dob== "THURSDAY" & gender == "FEMALE"){
	 	return "Yaa";
	 }
	 	else if(dob == "FRIDAY" & gender == "MALE"){
	 	return "Kofi";
	 }
	 	else if(dob == "FRIDAY" & gender == "FEMALE"){
	 	return "Efia";
	 }
	 	else if(dob == "SATURDAY" & gender == "MALE"){
	 	return "Kwame";
	 }
	 	else if(dob == "SATURDAY" & gender == "FEMALE"){
	 	return "Ama";
	 }
	 	else if(dob == "SUNDAY" & gender == "MALE"){
	 	return "Kawsi";
	 }
	  else if(dob == "SUNDAY" & gender == "FEMALE"){
	 	return "Akosua";
	 }

	
}


function getTheDay(aDate)

{

var myDays=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];

var myDate=new Date(eval('"'+aDate+'"'));

return myDays[myDate.getDay()];
}



// This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
		}
		else if (response.status === 'not defined') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'logged-out';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
		//document.location.reload();
		
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : 1514807515427052,
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
  };
  
  
  function Logout()
    {
        FB.logout(function(){document.location.reload();});
    };
  
  

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
 
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log('Successful login for: ' + response.gender);
	  
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
        genderFrmFab = response.gender;
    });
  }


  