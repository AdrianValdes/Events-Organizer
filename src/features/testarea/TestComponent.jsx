import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions';

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        The data is: {data}
        <Button onClick={() => incrementCounter()} positive>
          Increment
        </Button>
        <Button onClick={() => decrementCounter()} negative>
          Decrement
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.test.data,
  };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
