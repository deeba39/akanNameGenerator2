'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){
    it('should ....', inject(function($controller) {
      //spec body
	  var mockScope={};
      var view1Ctrl = $controller('View1Ctrl',{$scope:mockScope});
      expect(view1Ctrl).toBeDefined();
    }));

     it('should define a date of birthday in the scope', inject(function($controller) {
        //spec body
     var mockScope={},
         BirthdayCtrl = $controller('View1Ctrl',{$scope:mockScope});
       expect(mockScope.Obj.dayOfBirth).toBeDefined();
    }));
	
	it('should define gender from facebook', inject(function($controller) {
        //spec body
     var mockScope={},
         BirthdayCtrl = $controller('View1Ctrl',{$scope:mockScope});
       expect(mockScope.Obj.dayOfBirth).toBeDefined();
    }));
	
	it('should display the akan name in the scope', inject(function($controller){
//spec body
		var mockScope={},
			BirthdayCtrl = $controller('View1Ctrl',{$scope:mockScope});
		 expect(mockScope.Obj.gender).toBeDefined()'
		 }));
	
	it ('should check the connectivity to facebook', inject(function($controller){
//spec body
		var mockScope={},
			BirthdayCtrl = $controller('View1Ctrl',{$scope:mockScope});
		 expect(mockScope.Obj.checkLoginState()).toBeDefined()'
		 }));
		 
	it ('should get the day of birth when the name of the person is entered', inject(function($controller){
//spec body
		var mockScope={},
			BirthdayCtrl = $controller('View1Ctrl',{$scope:mockScope});
		 expect(mockScope.Obj.dayOfBirth).toBeDefined()'
		 }));
  });
  //************************************************************************//
  //************************************************************************//
  
  
  
  
});