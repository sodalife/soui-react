# 确认 Confirm

## 如何使用
### 调用方法
```jsx
import { confirm } from '@sodalife/soui-react'

class App extends React.Component {
  render () {
    return <div style={{ width: 375, display: 'flex' }}>
      <a
        href="javascript: void 0"
        onClick={() => {
          confirm({ message: '确认吗?', title: '请确认' })
            .then(() => { console.log('confirm') }, () => { console.log('nope') })
        }}>
        Show me
      </a>
    </div>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Confirm
|      属性      |             说明              |   类型   | 默认值 |
| -------------- | ----------------------------- | -------- | ------ |
| title          | 标题                          | string   | -      |
| message        | 消息                          | node     | -      |
| visible        | 是否可见                      | boolean  | false  |
| onClosed       | 当关闭时调用                  | function | -      |
| onOk           | 当确定时调用                  | function | -      |
| okText         | 确定按钮的文字                | string   | "确认" |
| okDisabled     | 是否确认按钮被禁用            | boolean  | false  |
| onCancel       | 当取消时调用                  | function | -      |
| cancelText     | 取消按钮的文字                | string   | "取消" |
| cancelDisabled | 是否取消按钮被禁用            | boolean  | false  |
| ...props       | 其余继承所有原生 div 标签属性 | -        | -      |


### confirm(props)
|  props   |                                 说明                                  |
| -------- | --------------------------------------------------------------------- |
| onOk     | 当用户确认时调用。若返回为 Promise Reject 或抛出 Error 将阻止确认动作 |
| onCancel | 当用户取消时调用。若返回为 Promise Reject 或抛出 Error 将阻止取消动作 |
| ...props | 其余继承所有 ``Confirm`` 的属性                                       |

``confirm`` 方法将返回一个 promise 对象；默认在用户确认后 **resolve**；在用户取消后 **reject** 一个 ``message = 'cancelled'`` 的 Error。


## 实例演示
### 方法式调用
```jsx
/*react*/
<script>
const { confirm } = soui

export default class App extends React.Component {
  render () {
    return <div style={{ width: 375 }}>
      <a
        href="javascript: void 0"
        onClick={() => {
          confirm({ message: '确认吗?', title: '请确认' })
            .then(() => { console.log('confirm') }, () => { console.log('nope') })
        }}>
        我弹
      </a>
    </div>
  }
}
</script>
```


### 组件式调用
```jsx
/*react*/
<script>
const { Confirm } = soui

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false,
    }
  }

  render () {
    return <div style={{ width: 375 }}>
      <Confirm
        message="确认吗？"
        title="请确认"
        visible={this.state.show}
        onOk={() => this.setState({ show: false }, () => console.log('ok'))}
        onCancel={() => this.setState({ show: false }, () => console.log('cancel'))}
        />
      <a href="javascript: void 0" onClick={() => { this.setState({ show: true }) }}>我弹</a>
    </div>
  }
}
</script>
```


## 更多
[Storybook - 对话 / 情景 / 确认 Confirm](./storybook/?selectedKind=对话 / 情景 / 确认 Confirm ":ignore")
