import React, { Component } from 'react'

import {actionCreators} from './todoListRedux'
import List from './List'
import Input from './Input'
import Title from './Title'

export default class App extends Component {
  state = {}

  componentWillMount() {
    const {store} = this.props

    const {tasks} = store.getState();
    this.setState({tasks});

    this.unsubscribe = store.subscribe(() => {
      const {tasks} = store.getState();
      this.setState({tasks});
    });
  };

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAddTask = (task) => {
    const {store} = this.props;

    store.dispatch(actionCreators.add(task));
  };

  removeTask = index => {
    const {store} = this.props;

    store.dispatch(actionCreators.remove(index));
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
