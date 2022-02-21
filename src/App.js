import logo from './logo.svg';
import './App.css';
import QuestionCard from './QuestionCard';
import Stop from './Stop';
function App() {
  let title="Emergency Fund";
  let text="Do you have an emergency fund setup?"
  
  return (
    <div className="App">
      
      <QuestionCard questionTitle={title} questionText={text}/>
     
      <Stop title={title}/>
    </div>
  );
}

export default App;
