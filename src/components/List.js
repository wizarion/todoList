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
   }

   handleInputValue(e) {
      this.setState({
         input: e.target.value
      })
   }

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

   removeTask(e) {
      this.setState({
         toDoList: [...this.state.toDoList.filter((task, ind) => ind !== e)]
      })
      console.log(e)
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
                           <ItemList task={task} />
                        <button onClick={() => this.removeTask(ind)}>X</button>
                     </div>
                  )
               })}
            </ul>
         </div>
      )
   }
}