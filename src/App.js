import './App.css';
import Team from './Components/Team';

function App() {
  const teamProfile1 =[{
    TeamName:"Chennai super Kings",
    FoundedYear: 2008,
    Captain: "M S Dhoni",
    Home: "Chepak stadium, Chennai",
    titles:"3 times"
  },
  {
    TeamName:"Royal Challengers Bangalore",
    FoundedYear: 2008,
    Captain: "Virat Kohli",
    Home: "Chinnaswami stadium, bangalore",
    titles:"0"
  }
  ,
  {
    TeamName:"Mumbai Indians",
    FoundedYear: 2008,
    Captain: "Rohit Sharma",
    Home: "Wankadeh stadium, Mumbai",
    titles:"5"
  },
  {
    TeamName:"Punjab Kings",
    FoundedYear: 2008,
    Captain: "KL Rahul",
    Home: "Punjab Stadium",
    titles:"0"
  }
  ];
  
  return (
    <div className="App">
      <Team info={teamProfile1}/>
    </div>
  );
}


export default App;
