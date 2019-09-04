import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // input 값을 입력할 때 리렌더링 방지
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      /* 리덕스 사용 전 코드
      todo => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}>
          {todo.text}
        </TodoItem>
      )
      */
      todo => (
        <TodoItem
         key={todo.get('id')}
         done={todo.get('done')}
         onToggle={() => onToggle(todo.get('id'))}
         onRemove={() => onRemove(todo.get('id'))}>
          {todo.get('text')}
        </TodoItem>
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoList;