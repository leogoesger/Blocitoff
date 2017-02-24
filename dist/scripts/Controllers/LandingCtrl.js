 (function() {
     function LandingCtrl($scope, Todo) {
     	this.todos = Todo.todos;

     	$scope.update = function(todo){
     		console.log("hello")
     		Todo.addToDo(todo);
     	};
     }
 
     angular
         .module('blocitoff')
         .controller('LandingCtrl', ['$scope', 'Todo', LandingCtrl]);
 })();