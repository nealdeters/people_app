(function() {
  "use strict";

  angular.module("app").controller("peopleCtrl", 
    function($scope){
    
    $scope.peoples = [
        {
            name: "neal",
            bio: "neal's bio",
            bioVisible: false
        },
        {
            name: "bob",
            bio: "bob's bio",
            bioVisible: false
        },
        {
            name: "steve",
            bio: "steve's bio",
            bioVisible: false
        }
    ];


    $scope.toggle = function(people) {
        people.bioVisible = !people.bioVisible;
    };

    $scope.addPeople = function(peopleName, peopleBio){
        var newPeople = {
          name: peopleName, 
          bio: peopleBio, 
          bioVisible: false
        };

        console.log(newPeople);

        $scope.peoples.push(newPeople);
        $scope.newPeopleName = null;
        $scope.newPeopleBio = null;
    };

    $scope.removePeople = function(index){ 
      $scope.peoples.splice(index,1);     
    }

    window.scope = $scope;

  });

}());