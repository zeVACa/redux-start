import { connect } from 'react-redux';

const CounterPanel = () => {
  return (
    <div className="py-2 container">
      <h1 className="counter-holder">counter holder</h1>
      <div className="counting">
        <button onClick={(e) => console.log('1')} type="button" className="btn btn-danger dec">
          decrement
        </button>
        <button onClick={(e) => console.log('1')} type="button" className="btn btn-success inc">
          increment
        </button>
        <button onClick={(e) => console.log('1')} type="button" className="btn btn-primary rnd">
          delayed random
        </button>
      </div>

      <div className="py-2 theme-toggler mt-20">
        <button
          onClick={(e) => console.log('1')}
          className="theme-toggler__button btn btn-secondary">
          change theme
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(CounterPanel);
