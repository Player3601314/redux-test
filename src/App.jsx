import Card from "./components/Card";
import { useSelector } from "react-redux";

const App = () => {

  const todoData = useSelector((state)=>{
    return state.todo
  })

  return (
    <>
      <div>
        {todoData.data.map(value => (
          <Card {...value} key={value.id}/>
        ))}
      </div>
    </>
  );
};

export default App;
