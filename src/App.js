import './App.css';
import 'react-select/dist/react-select.css';

import React, { Component } from 'react';

import List from './list';
import SearchBox from './searchBox';
import Select from 'react-select';
import Tags from './tags';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      keyWordTerm: '',
      isActive: {
        content: true,
        design: true,
        marketing: true,
        programming: true,
      },
      selectedOption: {value: 'interviewRef', label: 'Sort By ID'},
    }

    axios.get('https://ywc15.ywc.in.th/api/interview').then((data) => {
      console.log(data.data);
      let newObj = data.data;
      newObj.sort(function(a, b) { 
        return a.interviewRef.localeCompare(b.interviewRef);
      })
      this.setState({
        users: newObj,
      });
    }, (error) => {

    });
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.onTagClick = this.onTagClick.bind(this);
    this.filtered = this.filtered.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onKeyPressed(_this) {
    this.setState({
      ...this.state,
      keyWordTerm: _this.refs.search.value,
    });
    
  }

  onTagClick(major) {
    let activeObj = this.state.isActive;
    activeObj[major] = !activeObj[major];
    this.setState({
      ...this.state,
      isActive: activeObj,
    });
    console.log(this.state.isActive);
  }

  tagFilter(Users) {
    let Result = Users.filter((user) => (
      // (!this.state.isActive["content"] && !this.state.isActive["design"] && !this.state.isActive["programming"] && !this.state.isActive["marketing"]) ||
      this.state.isActive[user.major]
    ));
    return Result;
  }

  filtered(Users, keyword) {
      let Result = Users.filter((user) => (
        keyword == '' || 
        user.firstName.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        user.lastName.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        user.interviewRef.toLowerCase().search(keyword.toLowerCase()) !== -1 ||
        user.major.toLowerCase().search(keyword.toLowerCase()) !== -1
      ));
      return this.tagFilter(Result);
  }

  handleChange = (selectedOption) => {
    let key = selectedOption.value;
    let newObj = this.state.users;
    newObj.sort(function(a, b) { 
      if(!a[key].localeCompare(b[key]) && key === 'firstName') {
        return a['lastName'].localeCompare(b['lastName']); 
      }
      else {
        return a[key].localeCompare(b[key]);
      }
    })
    console.log(newObj);
    this.setState({ 
      ...this.state,
      users: newObj,
      selectedOption: selectedOption, 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require('./image/logo.png')} className="App-logo" alt="logo" />
          <h1 className="App-title">ประกาศรายชื่อผู้มีสิทธิ์เข้าสัมภาษณ์</h1>
        </header>
        <div className="main-container">
          <div style={{ 
            width: '80%', 
            left: 0, 
            right: 0, 
            marginRight: 'auto', 
            marginLeft: 'auto', 
            marginTop: 32, 
            marginBottom: 32, 
            padding: 32, 
            backgroundColor: 'rgba(0, 0, 0, 0.1)', 
            // borderRadius: 16,
            padding: 32, 
          }}>
            <div style={{ 
                verticalAlign: 'middle', 
                display: 'flex', 
            }}>
              <SearchBox 
                style={{ width: '60%', display: 'inline-block', marginRight: 32, marginLeft: 48 }} 
                value={this.state.keyWordTerm} 
                onKeyPressed={this.onKeyPressed} 
              />
              <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                className="mk-inline"
                placeholder="Sort by ..."
                clearable={false}
                options={[
                  // { value: 'major', label: 'Sort By Major' },
                  { value: 'firstName', label: 'Sort By Name' },
                  { value: 'interviewRef', label: 'Sort By ID' },
                ]}
              />  
            </div>  
            <Tags isActive={this.state.isActive} onTagClick={this.onTagClick} />
            
          </div>  
        
          <List users={this.filtered(this.state.users, this.state.keyWordTerm)} />
        </div>
      </div>
    );
  }
}

export default App;
 