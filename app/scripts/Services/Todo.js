(function() {
  function Todo($firebaseArray) {
    var ref = firebase.database().ref().child("todos");
    var todos = $firebaseArray(ref);
    Todo.todos = todos;

    Todo.addToDo = function(todo){
      console.log("hello")
      todos.$add({ Description : todo.description }).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        todos.$indexFor(id); // returns location in the array
      });
    }

    return Todo;
  }

  angular
    .module('blocitoff')
    .factory('Todo', ['$firebaseArray', Todo]);
})();