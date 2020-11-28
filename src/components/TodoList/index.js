import React, {Component} from 'react'
import TodoItens from '../TodoItens'


class TodoList extends Component{

  constructor(props){
    super(props);
      this.state= {
        tarefa:"",
        item: []
      }
    
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    
    
  }

  addItem(e){
    let state = this.state;
    if(this._tarefaInput.value !== ''){
      let newIntem = {
        text: this._tarefaInput.value,
        key: Date.now()
      };

      this.setState({item : [...state.item,newIntem] });
      
    }
    this.setState({tarefa : ''});
    e.preventDefault();
  }

  deleteItem(key){
    alert('Item a ser deletado: ' + key);
    let filtro = this.state.item.filter( (item) =>{
        // Retorna apenas os items que tiverem a key diferente da key que recebe por parametro na funcao
        return(item.key !== key);
    })
    this.setState({item: filtro});
}


  render(){

    return(
      <div>
        <form onSubmit={this.addItem}>
          <input type="texte" placeholder="Nova Tarefa" name="tarefa" 
            value={this.state.tarefa} 
            onChange={(ev) => this.setState({tarefa : ev.target.value})}
            ref={(event) => this._tarefaInput = event}/>
          <button type="submit">
            Adicionar
          </button>

        </form>

        <TodoItens lista={this.state.item} delete={this.deleteItem} />

      </div>

    );

  }


}


export default TodoList;