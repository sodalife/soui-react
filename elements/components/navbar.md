# 导航栏 Navbar

## 如何使用
```jsx
import { Navbar } from '@sodalife/soui-react'
const { NavbarItem } = Navbar

class App extends React.Component {
  render () {
    return <Navbar>
      <NavbarItem icon="home" title="首页" isActived={true} />
      <NavbarItem icon="gamepad" title="游戏" />
      <NavbarItem icon="order" title="订单" />
      <NavbarItem icon="user" title="我的" />
    </Navbar>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Navbar
|   属性   |             说明              | 类型 | 默认值 |
| -------- | ----------------------------- | ---- | ------ |
| children | 内容                          | node | -      |
| ...props | 其余继承所有原生 div 标签属性 | -    | -      |

### NavbarItem
|   属性    |             说明              |  类型   | 默认值 |
| --------- | ----------------------------- | ------- | ------ |
| icon      | 图标名                        | string  | -      |
| title     | 标题                          | string  | -      |
| isActived | 是否被激活                    | boolean | false  |
| ...props  | 其余继承所有原生 div 标签属性 | -       | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Navbar } = soui
const { NavbarItem } = Navbar

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      current: null,
    }
  }

  render () {
    return <div style={{ width: 375 }}>
      <Navbar>
        <NavbarItem icon="home" title="首页" isActived={this.state.current === 'home' } onClick={() => this.setState({ current: 'home' })} />
        <NavbarItem icon="gamepad" title="游戏" isActived={this.state.current === 'game' } onClick={() => this.setState({ current: 'game' })} />
        <NavbarItem icon="order" title="订单" isActived={this.state.current === 'order' } onClick={() => this.setState({ current: 'order' })} />
        <NavbarItem icon="user" title="我的" isActived={this.state.current === 'user' } onClick={() => this.setState({ current: 'user' })} />
      </Navbar>
    </div>
  }
}
</script>
```


## 更多
[Storybook - 组件 / 导航栏 Navbar](./storybook/?selectedKind=组件 / 导航栏 Navbar ":ignore")
