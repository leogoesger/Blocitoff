 (function() {
     function LandingCtrl($scope, Todo, details) {
     	//details contain all the data, details[0], that is resolved and loaded
     	this.todos = Todo.todos;
     	this.current_time = (new Date()).getTime();

     	$scope.add = function(todo){
     		Todo.addToDo(todo);
     	};

     	$scope.update = function(todo){
     		Todo.updateToDo(todo);
     	};
     }
 
     angular
         .module('blocitoff')
         .controller('LandingCtrl', ['$scope', 'Todo', 'details', LandingCtrl]);
 })();