import React from 'react'

export default class ItemList extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         task: '',
         editable: false
      }

      this.toggleEditable = this.toggleEditable.bind(this)
      this.handleInput = this.handleInput.bind(this)
   }

   toggleEditable() {
      this.setState({
         editable: !this.state.editable
      })
   }

   componentWillMount() {
      this.setState({
         task: this.props.task
      })
   }

   handleInput(e) {
      this.setState({
         task: e.target.value
      })
   }

   render() {
      return(
         <li onDoubleClick={this.toggleEditable} >
            {!this.state.editable ? <label>{this.state.task}</label> : <input autoFocus onBlur={this.toggleEditable} value={this.state.task} onChange={this.handleInput}></input>}
         </li>
      )
   }
}