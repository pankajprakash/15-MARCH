import logo from './logo.svg';
import './App.css';

function App() {
  let curDate=new Date(2021,3,12,12);
  curDate=curDate.getHours();
  let greetings="";
  const cssstyle={}
  if (curDate>=1 && curDate<12){
    greetings="Good Morning have a good day"
    cssstyle.color='green';

  } else if(curDate>=12 && curDate<19)
  {
    greetings="gud afternoon Have a good day"
    cssstyle.color='red';
  }
  else{
    greetings="good night"
    cssstyle.color='black';
  }
  return (
    <div className="App">
     <h1>Hello sir,<span style={cssstyle}> {greetings}</span></h1>
    </div>
  );
}

export default App;
