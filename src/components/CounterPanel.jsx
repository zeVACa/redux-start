import { connect } from 'react-redux';
import { inc, dec, rndAsync, themeToggle } from '../redux/actionCreators';

const CounterPanel = ({ counter, inc, dec, rndAsync, themeToggle }) => {
  console.log(counter);
  return (
    <div className="py-2 container">
      <h1 className="counter-holder">{counter}</h1>
      <div className="counting">
        <button onClick={dec} type="button" className="btn btn-danger dec">
          decrement
        </button>
        <button onClick={inc} type="button" className="btn btn-success inc">
          increment
        </button>
        <button onClick={rndAsync} type="button" className="btn btn-primary rnd">
          delayed random
        </button>
      </div>

      <div className="py-2 theme-toggler mt-20">
        <button onClick={themeToggle} className="theme-toggler__button btn btn-secondary">
          change theme
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    rndAsync: () => dispatch(rndAsync()),
    themeToggle: () => dispatch(themeToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPanel);
