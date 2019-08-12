import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const addCourseAction = (title) => {
  return { type: 'ADD_COURSE', title}
}

export default function CourseList() {
  const [course, setCourse] = useState('');
  const qtd = 30;
  const courses = useSelector(state => state.data.slice(0, qtd ), [qtd])
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch(addCourseAction(course))
  }

  const updateInputValue = (e) => {
    setCourse(e.target.value);
  }

  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <form className='form-horizontal'>
        <input type="text" onChange={updateInputValue}></input>
        <button type="button" onClick={addCourse}>
            Add Course
        </button>
      </form>

    </>
  );
}
