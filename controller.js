angular
    .module('stuApp', [])
	.controller('StudentController', function($scope) {
    
    //check if local storage is empty
        //If not...populate the view with initial entries
        var unparsedList = localStorage.getItem("students")
        if(unparsedList == null || unparsedList == ""){
            $scope.data = [];
        } else {
            $scope.data = JSON.parse(unparsedList);
        }
    
        $scope.addStudent = function() {  
            //grab the html input values
            var stuNum = $scope.stuNum;
            if (stuNum == "" || stuNum == null){
                exit;
            }
            var name = $scope.name
            var address = $scope.address
            var phoNum = $scope.phoNum
            var gpa = $scope.gpa
            var plan = $scope.plan
            var level = $scope.level
            
            //make a new student out of the input values
            var student = {
                stuNum: stuNum,
                name: name,
                address: address,
                phoNum: phoNum,
                gpa: gpa,
                plan: plan,
                level: level,
            }
 
            //pull the list from memory into the model ($scope)
            var unparsedList = localStorage.getItem("students");
            if(unparsedList == null || unparsedList == ""){
                $scope.data = [];
                $scope.alert = "unparsed list is empty";
            } else {
                $scope.data = JSON.parse(unparsedList);
                $scope.alert = "unparsed list is not empty";
            }
            
            //push new entry onto model 
            $scope.data.push(student);
            $scope.fred = student;
            
            //push updated model onto memory
            localStorage.setItem("students", JSON.stringify($scope.data));
            
            //clear the html inputs
            $scope.stuNum = "";
            $scope.name = "";
            $scope.address = "";
            $scope.phoNum = "";
            $scope.gpa = "";
            $scope.plan = "";
            $scope.level = "";
        };
    
        $scope.clear = function() {
            localStorage.setItem("students", "");
            $scope.data = [];
        };
});