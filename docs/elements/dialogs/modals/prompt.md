# 提词 Prompt

## 如何使用
### 调用方法
```jsx
import { prompt } from '@sodalife/soui-react'

class App extends React.Component {
  render () {
    return <div style={{ width: 375, display: 'flex' }}>
      <a
        href="javascript: void 0"
        onClick={() => {
          prompt({ title: '请输入', placeholder: '一句话' })
            .then(() => { console.log('submit') }, () => { console.log('nope') })
        }}>
        Show me
      </a>
    </div>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Prompt
|      属性      |             说明              |   类型   | 默认值 |
| -------------- | ----------------------------- | -------- | ------ |
| title          | 标题                          | string   | -      |
| initialValue   | 输入框初始值                  | string   | -      |
| placeholder    | 输入框占位符                  | string   | -      |
| message        | 提示消息                      | node     | -      |
| visible        | 是否可见                      | boolean  | false  |
| onClosed       | 当关闭时调用                  | function | -      |
| onOk           | 当确定时调用                  | function | -      |
| okText         | 确定按钮的文字                | string   | "提交" |
| okDisabled     | 是否确认按钮被禁用            | boolean  | false  |
| onCancel       | 当取消时调用                  | function | -      |
| cancelText     | 取消按钮的文字                | string   | "取消" |
| cancelDisabled | 是否取消按钮被禁用            | boolean  | false  |
| ...props       | 其余继承所有原生 div 标签属性 | -        | -      |


### prompt(props)
|  props   |                           说明                           |
| -------- | -------------------------------------------------------- |
| onOk     | 当用户确认时调用。若返回为 Promise Reject 将阻止提交动作 |
| onCancel | 当用户取消时调用。若返回为 Promise Reject 将阻止取消动作 |
| ...props | 其余继承所有 ``Prompt`` 的属性                           |

``prompt`` 方法将返回一个 promise 对象；默认在用户确认后 **resolve** 输入的字符串；在用户取消后 **reject** 一个 ``message = 'cancelled'`` 的 Error。


## 实例演示
### 方法式调用
```jsx
/*react*/
<script>
const { prompt } = soui

export default class App extends React.Component {
  render () {
    return <div style={{ width: 375 }}>
      <a
        href="javascript: void 0"
        onClick={() => {
          prompt({ title: '请输入', placeholder: '一句话' })
            .then((result) => { console.log(`submit: ${result}`) }, () => { console.log('nope') })
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
const { Prompt } = soui

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      show: false,
    }
  }

  render () {
    return <div style={{ width: 375 }}>
      <Prompt
        message="Lorem Ipsum?"
        title="请输入"
        visible={this.state.show}
        placeholder="一句话"
        initialValue="Neque porro quisquam"
        onOk={(result) => this.setState({ show: false }, () => console.log(`ok: ${result}`))}
        onCancel={() => this.setState({ show: false }, () => console.log('cancel'))}
        />
      <a href="javascript: void 0" onClick={() => { this.setState({ show: true }) }}>我弹</a>
    </div>
  }
}
</script>
```


## 更多
[Storybook - 对话 / 情景 / 提词 Prompt](./storybook/?selectedKind=对话 / 情景 / 提词 Prompt ":ignore")
