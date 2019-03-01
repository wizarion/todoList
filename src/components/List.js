import React from 'react'
import ItemList from './ItemList'

export default class List extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         input: '',
         toDoList: []
      }

      this.handleInputValue = this.handleInputValue.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.removeTask = this.removeTask.bind(this)
      this.handleInput = this.handleInput.bind(this)
      this.toggleChecked = this.toggleChecked.bind(this)
      this.checkAll = this.checkAll.bind(this)
   }

   /**
    * Altera o valor do input de novas tarefas no state.
    * @param {*} event
    */
   handleInputValue(e) {
      this.setState({
         input: e.target.value
      })
   }

   /**
    * Acrescenta a nova task na listagem dentro do state
    * @param {*} event 
    */
   handleSubmit(event) {
      this.setState({
         toDoList: [
            ...this.state.toDoList,
            {
               name: this.state.input,
               checked: false
            }
         ],
         input: ''
      })
      event.preventDefault()
   }

   /**
    * Altera o nome da task no array de tarefas (acionado pelo handleBlur do ItemList.js)
    * @param {*} name 
    * @param {*} index
    */
   handleInput(name, index) {
      this.setState(state => {
         state.toDoList[index].name = name
         return state
      })
   }

   /**
    * Remove a task clicada.
    * @param {*} index 
    */
   removeTask(index) {
      this.setState(state => {
         state.toDoList.splice(index, 1)
         return state
      })
   }
   
   /**
    * Habilita/desabilita a key passada no state.
    * @param {*} key 
    */
   toggleChecked(index) {
      this.setState(state => {
         state.toDoList[index].checked = !state.toDoList[index].checked
         return state
      })
   }

   /**
    * 
    * @param {*} event 
    */
   checkAll(event) {
      this.setState({
         toDoList: this.state.toDoList.map(task => ({...task, checked: event.target.checked}))
      })
   }

   render() {
      let { input, toDoList } = this.state
      return (
         <div>
            <h1>Listinha dos Afazeres</h1>
            <form onSubmit={this.handleSubmit}>
               <input type="checkbox" onChange={this.checkAll}></input>
               <input onChange={this.handleInputValue} value={input} />
            </form>
            <ul>
               {toDoList.map((task, ind) => {

                  return (
                     <ItemList
                        key={ind}
                        taskName={task.name}
                        handleBlur={(e) => this.handleInput(e, ind)}
                        removeTask={() => this.removeTask(ind)}
                        toggleChecked={() => this.toggleChecked(ind)}
                        checked={task.checked}
                     />
                  )
               })}
            </ul>
         </div>
      )
   }
}