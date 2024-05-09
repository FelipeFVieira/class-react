import './App.css';
import LogButton from './components/button';

function App() {
  return (
    <div className="App">
      <div className="panel">
        <div className='title'>
          <h1>Hello World!</h1>
          <p>React class PWFE - First Component</p>
        </div>

        <form className="form-react">
            <div className="form-input">
              <div className="form-inputs">
                <label>User: </label>
                <input/>
              </div>
              <div className= "form-inputs">
                <label>Password: </label>
                <input/>
              </div>
            </div>
            <div className="buttons">
            <LogButton description="Log in" name="login"></LogButton>
            <LogButton description="Forget Password" name="forget-password"></LogButton>
            </div>
        </form>
      </div>
    </div>
  );
}

export default App;
