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
            
            //something is wrong
            var name = $scope.name
            if((/^[a-zA-Z]+$/).test(name)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "name has improper format";
                exit;
            }
            
            var address = $scope.address
            if((/^[0-9]+\s[a-zA-A]+$/).test(address)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "address has improper format";
                exit;
            }
            
            //could add dashes to regex
            var phoNum = $scope.phoNum
            if((/^[0-9]+$/).test(phoNum)){
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
            
            //somethng is wrong
            var plan = $scope.plan
            if((/^[a-zA-Z]+$/).test(plan)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "plan has improper format";
                exit;
            }
            
            //something is wrong
            var level = $scope.level
            if((/^[a-zA-Z]+$/).test(level)){
                $scope.alert = "Success";
            }else {
                $scope.alert = "level has improper format";
                exit;
            }
            
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
        };
    
        $scope.clear = function() {
            localStorage.setItem("students", "");
            $scope.data = [];
        };
});