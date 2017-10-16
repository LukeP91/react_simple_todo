import React, { Component } from 'react'

import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {
  state = {
    tasks: ["Take out trash", "Pay for internet", "Change phone provider"]
  }

  onAddTask = (task) => {
    const {tasks} = this.state;

    this.setState({
      tasks: [...tasks, task]
    });
  };

  removeTask = index => {
    const {tasks} = this.state;

    this.setState({
      tasks: tasks.filter((tasks, i) => i != index),
    });
  };

  render() {
    const {tasks} = this.state;

    return(
      <div style={styles.container}>
        <Title>
          Sample Todoist App
        </Title>
        <Input
          placeholder={"Type task and hit enter to add it"}
          onSubmitEditing={this.onAddTask}
        />
        <List
          tasks={tasks}
          onClickItem={this.removeTask}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
};
