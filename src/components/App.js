import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import visibilityFilter from '../reducers/visibilityFilter';

const App =()=>(
    <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
    </div>
)
export default App