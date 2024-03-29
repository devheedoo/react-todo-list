import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// input과 버튼이 함게 있는 컴포넌트
/**
 * value: input 값
 * onChange: input 변경 이벤트
 * onInsert: 추가 버튼 클릭 이벤트
 */

const TodoInput = ({ value, onChange, onInsert }) => {
  // Enter 키 입력 시 onInsert 실행
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onInsert();
    }
  }

  return (
    <div className={cx('todo-input')}>
      <input
        onChange={onChange}
        value={value}
        onKeyPress={handleKeyPress}
      />
      <div
        className={cx('add-button')}
        onClick={onInsert}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;