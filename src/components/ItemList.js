import React from 'react'

export default class ItemList extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         editable: false
      }

      this.toggleEditable = this.toggleEditable.bind(this)
      this.handleBlur = this.handleBlur.bind(this)
      this.handleEnter = this.handleEnter.bind(this)
   }

   /**
    * Habilita/desabilita a edição de cada task.
    */
   toggleEditable() {
      this.setState({
         editable: !this.state.editable
      })
   }

   /**
    * Chama a function de List.js para atualizar o valor da task.
    * @param {*} event 
    */
   handleBlur(e) {
      this.props.handleBlur(e.currentTarget.value)
      this.toggleEditable()
   }

   /**
    * Captura key "Enter" para acionar a function handleBlur.
    * @param {*} event 
    */
   handleEnter(e) {
      if (e.key === 'Enter') this.handleBlur(e)
   }

   render() {
      return (
         <li onDoubleClick={this.toggleEditable} >
            {!this.state.editable ? <label>{this.props.task}</label> :
               <input
                  autoFocus
                  onBlur={this.handleBlur}
                  onKeyPress={this.handleEnter}
                  defaultValue={this.props.task}>
               </input>}
         </li>
      )
   }
}