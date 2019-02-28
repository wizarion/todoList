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
   handleSubmit(e) {
      this.setState({
         toDoList: [
            ...this.state.toDoList, 
            this.state.input
         ],
         input: ''
      })
      e.preventDefault()
   }

   /**
    * Altera o nome da task no array de tarefas (acionado pelo handleBlur do ItemList.js)
    * @param {*} event 
    * @param {*} index
    */
   handleInput(e, index) {
      this.setState({
         toDoList: this.state.toDoList.map((task, ind) => ind === index ? e : task)
      })
   }

   /**
    * Remove a task clicada.
    * @param {*} event 
    */
   removeTask(e) {
      this.setState({
         toDoList: this.state.toDoList.filter((task, ind) => ind !== e)
      })
   }

   render() {
      return(
         <div>
            <h1>Listinha dos Afazeres</h1>
            <form onSubmit={this.handleSubmit}>
               <input onChange={this.handleInputValue} value={this.state.input} />
            </form>
            <ul>
               {this.state.toDoList.map((task, ind) => {
                  return (
                     <div key={ind}>
                        <ItemList task={task} handleBlur={(e) => this.handleInput(e, ind)} />
                        <button onClick={() => this.removeTask(ind)}>X</button>
                     </div>
                  )
               })}
            </ul>
         </div>
      )
   }
}