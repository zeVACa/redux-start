import { connect } from 'react-redux';
import CounterPanel from './components/CounterPanel';

function App({ themeName }) {
  return (
    <div className={`app ${themeName}`}>
      <CounterPanel />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    themeName: state.theme.themeName,
  };
};

export default connect(mapStateToProps)(App);
