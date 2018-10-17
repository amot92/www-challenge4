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
            if((/^[0-9]+$/).test(stuNum)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "stuNum has improper format";
                exit;
            }
            
            var name = $scope.name
            if((/^[a-zA-Z]+\s[a-zA-Z]+$/).test(name)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "name has improper format";
                exit;
            }
            
            var address = $scope.address
            if((/^[0-9]+\s[a-zA-Z]+\s?[a-zA-Z]*\.?$/).test(address)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "address has improper format";
                exit;
            }
            
            var phoNum = $scope.phoNum
            if((/^[0-9]+\s?\-?\s?[0-9]*\s?\-?\s?[0-9]*$/).test(phoNum)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "Phone Number has improper format";
                exit;
            }
            
            var gpa = $scope.gpa
            if((/^[0-9]{1}\.[0-9]{2}$/).test(gpa)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "gpa has improper format";
                exit;
            }
            
            var plan = $scope.plan
            if((/^[a-zA-Z]+\s?\-?\s?[a-zA-Z]*$/).test(plan)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "plan has improper format";
                exit;
            }
            
            var level = $scope.level
            if((/^[a-zA-Z]+$/).test(level)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "level has improper format";
                exit;
            }
            
            var checkBox = $scope.checkboxModel;
            
            //make a new student out of the input values
            var student = {
                stuNum: stuNum,
                name: name,
                address: address,
                phoNum: phoNum,
                gpa: gpa,
                plan: plan,
                level: level,
                active: checkBox,
            }
 
            //pull the list from memory into the model ($scope)
            var unparsedList = localStorage.getItem("students");
            if(unparsedList == null || unparsedList == ""){
                $scope.data = [];
            } else {
                $scope.data = JSON.parse(unparsedList);
            }
            
            //push new entry onto model 
            $scope.data.push(student);
            
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
            $scope.checkBoxModel = false;
        };
    
        //need to do something about n = 0
        $scope.activeState = function(num) {
            //pull the list from memory into the model ($scope)
            var unparsedList = localStorage.getItem("students");
            if(unparsedList == null || unparsedList == ""){
                $scope.data = [];
            } else {
                $scope.data = JSON.parse(unparsedList);
            }
            
            //update the model
            var n = 0;
            $scope.data[n].active = !$scope.data[n].active 
            $scope.alert = $scope.data[n];
            
            //push updated model onto memory
            localStorage.setItem("students", JSON.stringify($scope.data));
        };
    
        $scope.clear = function() {
            localStorage.setItem("students", "");
            $scope.data = [];
        };
});