import './footer.css'
import TaskFilter from '../task-filter/task-filter.js'

const Footer = (props) => {
  const { filter, onFilterChange, onAllDeleted } = props
  return (
    <footer className="footer">
      <span className="todo-count">{props.toDo} items left</span>
      <TaskFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={onAllDeleted}>
        Clear completed
      </button>
    </footer>
  )
}

export default Footer
