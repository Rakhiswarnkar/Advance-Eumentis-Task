import React from 'react';
import Axios from 'axios';
import './style.scss';
import Cardcomp from './card/index';
import Loader from './Loader/Loader';


class App extends React.Component{
  state={
    userList: [],
    isLoading: true
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
      this.setState({ userList: response.data, isLoading: false });
    })
    .catch((error)=>{
      console.log("Error found in Api call",error);
    })
  }

  update_user = (key, values) =>{
    const newUser = this.state.userList.map((m)=>{
        if(m.id === key){
          return {...m, ...values};
        }
        return m;
    });
    this.setState({ userList: newUser });
  }

  handleClickDelete = (id) => {
    const filtered_list = this.state.userList.filter((f)=>{
      if(f.id !== id){
        return f;
      }
    })
    this.setState({ userList: filtered_list });
  }

  render() {
    return(
      <div className="app-container" >
        {this.state.isLoading === true? <Loader />:
        <div className="card" style={{ display: "flex", flexWrap: "wrap" }}>
        {(this.state.userList).map(user =>
            <Cardcomp
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
              website={`http://${user.website}`}
              image={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              update_user={this.update_user}
              handleClickDelete={this.handleClickDelete}
            />
          )};
          </div>
          }
      </div>
    );
  }
}

export default App;
