 (function() {
     function LandingCtrl($scope, Todo) {
     	//this.todos = Todo.todos;
     	this.todos = Todo.todos;
     	this.current_time = (new Date()).getTime();

     	console.log(this.todos)
     	
     	$scope.update = function(todo){
     		Todo.addToDo(todo);
     	};
     }
 
     angular
         .module('blocitoff')
         .controller('LandingCtrl', ['$scope', 'Todo', LandingCtrl]);
 })();