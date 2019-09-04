import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 액션 타입 정의하기
const INSERT = 'todos/INSERT';  // todo 추가
const TOGGLE = 'todos/TOGGLE';  // todo 완료 체크/해제
const REMOVE = 'todos/REMOVE';  // todo 제거

// 액션 생성 함수 만들기
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

// 초기 상태 정의하기
const initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: true
  }),
  Map({
    id: 1,
    text: '컴포넌트 스타일링 해보기',
    done: false
  })
]);

// 리듀서 정의하기
export default handleActions({
  [INSERT]: (state, action) => {
    // return state.push(Map(action.payload));
    const { id, text, done } = action.payload;
    return state.push(Map({
      id,
      text,
      done
    }));
  },
  [TOGGLE]: (state, action) => {
    // const { payload: index } = action;
    // return state.updateIn([index, 'done'], done => !done);
    const { payload: id } = action;
    const index = state.findIndex(todo => todo.id === id);
    return state.updateIn([index, 'done'], done => !done);
  },
  [REMOVE]: (state, action) => {
    // const { payload: index } = action;
    // return state.delete(index);
    const { payload: id } = action;
    const index = state.findIndex(todo => todo.id === id);
    return state.delete(index);
  }
}, initialState);

/* 리덕스 사용 전 코드 (비교용)
  handleInsert = () => {
    const { todos, input } = this.state;

    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ''
    });
  }
  
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }
*/