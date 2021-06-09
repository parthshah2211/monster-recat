import React,{ Component } from 'react';
import './App.css';
import { Cardlist } from './component/cardlist/cardlist.component';
import { SerchBox} from './component/serch-box/serchbox.component.jsx';

class App extends Component {

constructor()
  {
super();
this.state={

monster:[],

serchField: ''


};
}

hendalchnage = (a) => this.setState({ serchField: a.target.value})

componentDidMount(){
 fetch('https://jsonplaceholder.typicode.com/users')
.then(Response =>Response.json())
.then(users => this.setState({monster: users })); 
}
    render(){
      const {monster,serchField} =this.state;
      const fillteredMonster =monster.filter(monster =>
      monster.name.toLowerCase().includes(serchField.toLowerCase())  
        );
    return (
<div className="App">
<h1>Monster Index</h1>
        <SerchBox 
        placeholder='serch heros!!'
        hendalchnage={this.hendalchnage}        />
        <Cardlist monster={fillteredMonster} />


       
      </div>
    );
  }
}

export default App;
