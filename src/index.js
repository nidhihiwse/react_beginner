import React, { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function GitHubUser({login}) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https:github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .error(console.error);
  }, []);
  
  if(data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100}/>
      </div>
    );
  }

  return null;
}

function FectchGitHubUser() {
  return <GitHubUser login="moonhighway"/>
}

function Inputda() {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`input1: ${val}`);
  }, [val])

  useEffect(() => {
    console.log(`input2: ${val2}`);
  }, [val2])

  return(
    <>
      <lable>input1
        <input value={val}
        onChange={e => setVal(e.target.value)}
        />
      </lable>
      <br/>
      <lable>input12
        <input value={val2}
        onChange={e => setVal2(e.target.value)}
        />
      </lable>
    </>
  )
}

function Check() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });
  return(
    <>
    <div>
    <input type="checkbox"
    value={checked}
    onChange={() => setChecked(checked => !checked)}
    />
    {checked ? "box checked" : "Not checked"}
    </div>
    </>
  )
}
 
function App(props) {
  return(
    console.log(first),
    <ul>
      {props.lakes.map(lake => <li>{lake}</li>)}
    </ul>
  )

}

function State() {
  const [status, setStatus] = useState("Open");
  const [manager, setManager] = useState("Alex");
  const [year, setYear] = useState(2050);
  return(
    <>
      <div>
        <h1>{manager}</h1>
        <button onClick={() => setManager("Nidhi")}>Set Manager</button>     
      </div>
      <div>
        <h1>{year}</h1>
        <button onClick={() => setYear(year +1)}>Set Year/counter</button>  
      </div>
      <div>
      <h1>{status}</h1>,
      <button onClick={() => setStatus('closed')}>closed</button>
      <button onClick={() => setStatus('open')}>Open</button>
      <button onClick={() => setStatus('Back in 5')}>Back in 5</button>
      </div>
    </>
  )

}

function Hello(props) {
  return(
    console.log(props),
    console.log(Object.keys(props)),
    <div>
      <h1>Mycomponent {props.library}</h1>
      <p>Created by react {props.message}</p>
      <p>Also number {props.number}</p>
      <p>{Object.keys(props).length} Props total </p>
    </div>
  )
}

function Child({name}) {
  return(
    <div>
      {/* <h1>{props.name}</h1> */}
       <h1>{name}</h1>
    </div>
  )
}

function Parent(props) {
  return(<div>
    <Child name="Nidhi" />
    <Child name="Hiwse" />
    <Child name="Ak" />
    </div>
  )
}


let name = {
  name: "NIdhi",
  age: 27,
};

const [first, , fruit] = [
  "nid",
  "Hiw",
  "best"
];
let lakeList = [
  "U lake",
  "M lake",
  "L lake"
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Inputda />,
  // <Check />,
  // <App lakes={lakeList} />,
  // <State />,
  // <Parent/>,
  // <Hello library="React" 
  //   message="Have fun!"
  //   number = {6}
  // />,
  <h1>Hello from {name.age}!</h1>,
  <ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
    <li>item4</li>
  </ul>,
  React.createElement('div', {style : {color : "red"}}, React.createElement('h1', 'null', "hello"))
);
