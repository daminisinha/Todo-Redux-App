import {connect} from 'react-redux';
import {toggleTodo, toggleToDo} from '../actions'
//import TodoList from '../components/TodoList'
import ToDoList from '../components/ToDoList';

const getVisibleTodos =(todos,filter) =>{
    switch(filter){
        case 'SHOW_COMPLETED':
         return todos.filter(t=>t.completed)
        case 'SHOW_ACTIVE':
         return todos.filter(t=>!t.completed)
        case 'SHOW_ALL':
          default:
           return todos  
    }
}
const mapStateToProps = state =>{
    return {
        todos:getVisibleTodos(state.todos,state.visibilityFilter)
        }
    }


const mapDispatchToProps = dispatch =>{
    return {
        onTodoClick: id => {
          dispatch(toggleTodo(id))
        }
      }

}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)

export default VisibleTodoList