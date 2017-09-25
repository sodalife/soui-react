# 节流阀 Throttle
> Throttle 组件仍处实验性状态，后续版本 API 可能发生变化

## 如何使用
```jsx
import { Throttle } from '@sodalife/soui-react'

class App extends React.Component {
	constructor () {
    super()
    this.state = {}
  }

  render () {
    return <Throttle
      waitText={({ countdown }) => `重获验证码 (${countdown})`}
      onClick={() => this.setState({ startedAt: +new Date() })}
      startedAt={this.state.startedAt}
      wait={10 * 1000}
      >
      获取验证码
    </Throttle>
	}
}

ReactDOM.render(<App />, document.body)
```


## API
### Throttle
|   属性    |                              说明                               |   类型   | 默认值 |
| --------- | --------------------------------------------------------------- | -------- | ------ |
| children  | 有效时展示的内容                                                | node     | -      |
| waitText  | 等待时展示的内容，函数将传入 { countdown (剩余时间，单位为秒) } | function | -      |
| startedAt | 倒计时开始的时间                                                | node     | -      |
| onClick   | 当有效点击时调用                                                | function | -      |
| onTick    | 当计时器跳动时调用                                              | function | -      |
| disabled  | 是否被禁用（如数据加载未完成）                                  | boolean  | false  |
| ...props  | 其余继承所有原生 div 标签属性                                   | -        | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Throttle } = soui

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return <Throttle
      waitText={({ countdown }) => `重获验证码 (${countdown})`}
      onClick={() => this.setState({ startedAt: +new Date() })}
      startedAt={this.state.startedAt}
      wait={10 * 1000}
      >
      获取验证码
    </Throttle>
  }
}
</script>
```


## 更多
[Storybook - 助手 / 节流阀 Throttle](./storybook/?selectedKind=助手 / 节流阀 Throttle ":ignore")
