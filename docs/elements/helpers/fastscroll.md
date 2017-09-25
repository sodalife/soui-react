# 灵敏滚动 Fastscroll
> 即便在 iOS 设备上也实时地触发滚动事件

## 如何使用
```jsx
import { Fastscroll } from '@sodalife/soui-react'

const container = {
  width: '100%',
  height: 180,
  overflowY: 'scroll',
  marginBottom: 24,
}

const content = {
  background: '#color',
  width: 100,
  height: 1000,
  textAlign: 'center',
}

class App extends React.Component {
  render () {
    return <Fastscroll onFastscroll={() => console.log('scroll')}>
      <div style={container}>
        <div style={content}>
        </div>
      </div>
    </Fastscroll>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Fastscroll
|     属性     |     说明     |   类型   | 默认值 |
| ------------ | ------------ | -------- | ------ |
| children     | 滚动容器节点 | node     | -      |
| onFastscroll | 当滚动时调用 | function | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Fastscroll } = soui

const container = {
  width: '100%',
  height: 180,
  overflowY: 'scroll',
  marginBottom: 24,
}

const content = {
  background: '#color',
  width: 100,
  height: 1000,
  textAlign: 'center',
}

export default class App extends React.Component {
  render () {
    return <Fastscroll onFastscroll={() => console.log('scroll')}>
      <div style={container}>
        <div style={content}>
        </div>
      </div>
    </Fastscroll>
  }
}
</script>
```


## 更多
[Storybook - 助手 / 灵敏滚动 Fastscroll](./storybook/?selectedKind=助手 / 灵敏滚动 Fastscroll ":ignore")
