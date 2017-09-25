# 警告 Alert

## 如何使用
### 调用方法
```jsx
import { alert } from '@sodalife/soui-react'

class App extends React.Component {
  render () {
    return <div style={{ width: 375, display: 'flex' }}>
      <a href="javascript: void 0" onClick={() => alert({ message: 'HIYA', title: 'Alert' })}>Show me</a>
    </div>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Alert
|    属性    |             说明              |   类型   | 默认值 |
| ---------- | ----------------------------- | -------- | ------ |
| title      | 标题                          | string   | -      |
| message    | 消息                          | node     | -      |
| visible    | 是否可见                      | boolean  | false  |
| onClosed   | 当关闭时调用                  | function | -      |
| onOk       | 当确定时调用                  | function | -      |
| okText     | 确定按钮的文字                | string   | "确认" |
| okDisabled | 是否确认按钮被禁用            | boolean  | false  |
| ...props   | 其余继承所有原生 div 标签属性 | -        | -      |


### alert(props)
|  props   |                                 说明                                  |
| -------- | --------------------------------------------------------------------- |
| onOk     | 当用户确认时调用。若返回为 Promise Reject 将阻止确认动作 |
| ...props | 其余继承所有 ``Alert`` 的属性                                         |

``alert`` 方法将返回一个 promise 对象；默认在用户确认后 **resolve**。


## 实例演示
### 方法式调用
```jsx
/*react*/
<script>
const { alert } = soui

export default class App extends React.Component {
  render () {
    return <div style={{ width: 375 }}>
      <a href="javascript: void 0" onClick={() => alert({ message: 'HIYA', title: 'Alert' })}>我弹</a>
    </div>
  }
}
</script>
```


### 组件式调用
```jsx
/*react*/
<script>
const { Alert } = soui

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false,
    }
  }

  render () {
    return <div style={{ width: 375 }}>
      <Alert
        message="HIYA"
        title="Alert"
        visible={this.state.show}
        onOk={() => this.setState({ show: false })}
        />
      <a href="javascript: void 0" onClick={() => { this.setState({ show: true }) }}>我弹</a>
    </div>
  }
}
</script>
```


## 更多
[Storybook - 对话 / 情景 / 警告 Alert](./storybook/?selectedKind=对话 / 情景 / 警告 Alert ":ignore")
