import React, { useState }  from 'react';
import Button from './components/Button';
import Text from './components/Text';


function App() {
  const [count, setCount] = useState(0);

  function onAddition () {
    const newCount = count + 1;
    setCount(newCount);
  }

  function  onReset() {
    setCount(0);
  }

  function onSubtraction () {
    const newCount = count - 1;
    setCount(newCount);
  }



return (
  <div>
    <Text count={count} type="h1">Counter</Text>
    <div style={{display:"flex", flexDirection: "row"}}>
      <Button onClick={onAddition}>Increase</Button>
      <Button onClick={onReset}>Reset</Button>
      <Button onClick={onSubtraction}>Increase</Button>
    </div>
    
</div>
);
}
export default App;