import React from 'react'
import './itemList.css'

export default class ItemList extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         editable: false
      }

      this.handleBlur = this.handleBlur.bind(this)
      this.handleEnter = this.handleEnter.bind(this)
   }

   /**
    * Chama a function de List.js para atualizar o valor da task.
    * @param {*} event 
    */
   handleBlur(event) {
      this.props.handleBlur(event.currentTarget.value)
      this.toggleState('editable')
   }

   /**
  * Habilita/desabilita a key passada no state.
  * @param {*} key 
  */
   toggleState(key) {
      this.setState({
         [key]: !this.state[key]
      })
   }

   /**
    * Captura key "Enter" para acionar a function handleBlur.
    * @param {*} event 
    */
   handleEnter(event) {
      if (event.key === 'Enter') this.handleBlur(event)
   }

   render() {
      let { editable } = this.state
      return (
         <li className="item">
            <input type="checkbox" checked={this.props.checked} onChange={() => this.props.toggleChecked()}></input>
            {!editable ?
               <label
                  onDoubleClick={() => this.toggleState('editable')}
                  className={this.props.checked ? 'taskDone' : ''}
               >{this.props.taskName}</label> :
               <input
                  autoFocus
                  onBlur={this.handleBlur}
                  onKeyPress={this.handleEnter}
                  defaultValue={this.props.taskName}
                  className="input" />}

            <button onClick={this.props.removeTask}>X</button>
         </li>
      )
   }
}