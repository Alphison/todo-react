import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  const [skills, setSkills] = useState(['Front-End', 'Back-End', 'CI/CD'])

  const [form, setForm] = useState({
    email: "",
    pass: ""
  })

  const onChangeHandle = (e) => {
    setName(e.target.value)
    setCount(e.target.value.length)
  }

  const onSubmitAddSkill = (e) => {
    console.log(e)
    if (e.keyCode === 13) {
      setSkills((prevState) => {
        return [...prevState, e.target.value];
      });

    }

    
    
  }

  const onChangeFormHandle = (e) => {
    setForm((prevState) =>{
      prevState = {...prevState}

      prevState[e.target.name] = e.target.value

      return prevState
    })
  }

  return (
    <>
      <p>Вы нажали на меня {count}</p>
      <button onClick={() => setCount((prev) => prev + 1 )}>
        click me
      </button>
      <button onClick={() => setCount(count + 5)}>
        +5
      </button>
      <h1>Привет, {name}!</h1>
      <input type="text" onChange={(e) => onChangeHandle(e)}/>

      <br />

      <input type="text" onKeyDown={(e) => onSubmitAddSkill(e)} />

      <ul>
        {
          skills.map((skill) => {
            return (
              <li>{skill}</li>
            )
          })
        }
        <li></li>
      </ul>
      <br></br>
      <form onSubmit={(e) => e.preventDefault}>
        <input type="email" name='email' placeholder='email' onChange={(e) => onChangeFormHandle(e)} value={form.email}/>
        <input type="password" name='pass' placeholder='pass' onChange={(e) => onChangeFormHandle(e)} value={form.pass}/>
        <input type="submit" value="кукишь" />
      </form>
    </>
  ) 
}

export default App
