# 对话框 Dialog

## 如何使用
```jsx
import { Dialog } from '@sodalife/soui-react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false,
    }
  }

  render () {
    return <div style={{ width: 375 }}>
      <Dialog
        title="SouI"
        visible={this.state.show}
        footer={<a href="javascript: void 0;"  onClick={() => { this.setState({ show: false })}}>关闭</a>}
        >
        你好呀
      </Dialog>
      <a href="javascript: void 0" onClick={() => { this.setState({ show: true }) }}>我弹</a>
    </div>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Dialog
|   属性   |             说明              |   类型   | 默认值 |
| -------- | ----------------------------- | -------- | ------ |
| children | 内容                          | node     | -      |
| title    | 标题                          | string   | -      |
| visible  | 是否可见                      | boolean  | false  |
| onClosed | 当关闭时调用                  | function | -      |
| footer   | 页底内容                      | node     | -      |
| ...props | 其余继承所有原生 div 标签属性 | -        | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Dialog } = soui

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false,
    }
  }

  render () {
    return <div style={{ width: 375 }}>
      <Dialog
        title="SouI"
        visible={this.state.show}
        footer={<a href="javascript: void 0"  onClick={() => { this.setState({ show: false })}}>关闭</a>}
        >
        你好呀
      </Dialog>
      <a href="javascript: void 0" onClick={() => { this.setState({ show: true }) }}>我弹</a>
    </div>
  }
}
</script>
```


## 更多
[Storybook - 对话 / 对话框 Dialog](./storybook/?selectedKind=对话 / 对话框 Dialog ":ignore")
