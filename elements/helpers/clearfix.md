# 清除浮动 Clearfix

## 如何使用
```jsx
import { Clearfix } from '@sodalife/soui-react'

const box = {
  width: 100,
  height: 100,
  margin: 10,
  background: '#eee',
}

class App extends React.Component {
  render () {
    return (<div>
      <div style={{ ...box, float: "left" }} />
      <Clearfix />
      <div style={{ ...box, float: "left" }} />
      <div style={{ ...box, float: "left" }} />
    </div>)
  }
}

ReactDOM.render(<App />, document.body)
```


## 实例演示
```jsx
/*react*/
<script>
const { Clearfix } = soui

const box = {
  width: 100,
  height: 100,
  margin: 10,
  background: '#eee',
}

export default class App extends React.Component {
  render () {
    return (<div style={{ width: 375 }}>
    <div style={{ ...box, float: "left" }} />
    <Clearfix />
    <div style={{ ...box, float: "left" }} />
    <div style={{ ...box, float: "left" }} />
    </div>)
  }
}
</script>
```


## 更多
[Storybook - 助手 / 清除浮动 Clearfix](./storybook/?selectedKind=助手 / 清除浮动 Clearfix ":ignore")
