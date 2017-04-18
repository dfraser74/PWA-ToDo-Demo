'use strict';

angular
	.module('app.core')
	.controller('MainController', ['$scope', function($scope) {
		$scope.saved = localStorage.getItem('todos');
		$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [  ];
		localStorage.setItem('todos', JSON.stringify($scope.todos))
		var oldTodos;
		$scope.addLocalStorage = function() {
			$scope.todos.push({
				text: $scope.todoText,
				content: $scope.todoContent,
				done: false
			});
			$scope.todoText = '';
			$scope.todoContent = '';
			localStorage.setItem('todos', JSON.stringify($scope.todos));
			console.log('Adicionado ao local storage com sucesso!');
			window.location = '#/list';
		};

		$scope.remaining = function() {
			var count = 0;
			angular.forEach($scope.todos, function(todo){
				count+= todo.done ? 0 : 1;
			});
			return count;
		};

		$scope.removeLocalStorage = function() {
			oldTodos = $scope.todos;
			$scope.todos = [];

			angular.forEach(oldTodos, function(todo){
				if (!todo.done)
					$scope.todos.push(todo);
				console.log('Removido do local storage com sucesso!');
			});

			localStorage.setItem('todos', JSON.stringify($scope.todos));
		};

		$scope.prefillingDataLocalStorage = function() {
			oldTodos = $scope.todos;
			var objetos = JSON.parse(localStorage.getItem('todos'));
			angular.forEach(oldTodos, function(todo){
				var title = objetos[0].text;
				var content = objetos[0].content;
				$scope.title = title;
				$scope.content = content;
				localStorage.setItem('todos', JSON.stringify($scope.todos));
			});
		}

		$scope.updateListLocalStorage = function(index) {
			$scope.todos.push({
				text: $scope.todoText,
				content: $scope.todoContent,
				done: false
			});
			$scope.todoText = '';
			$scope.todoContent = '';
			localStorage.setItem('todos', JSON.stringify($scope.todos));
			console.log('local storage atualizado com sucesso!');
			window.location = '#/list';
		}
	}]);