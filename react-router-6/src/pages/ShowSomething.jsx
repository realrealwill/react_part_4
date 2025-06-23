import {useParams} from 'react-router-dom'  // 自定义hook

export default function ShowSomething() {
  const {name, age} = useParams()
  return (
    <div>
      ShowSomething
      <br />
      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}