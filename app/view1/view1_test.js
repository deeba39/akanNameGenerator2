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
	
	
	
  });
  //************************************************************************//
  //************************************************************************//
  
  
  
  
});