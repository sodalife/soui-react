# 大荧幕 Jumbotron

## 如何使用
```jsx
import { Jumbotron } from '@sodalife/soui-react' 
const { JumbotronButton } = Jumbotron

class App extends React.Component {
  render () {
    return <Jumbotron>
      <h3>欢迎回来</h3>
      <JumbotronButton size="small">登出</JumbotronButton>
    </Jumbotron>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Jumbotron
|   属性   |             说明              | 类型 | 默认值 |
| -------- | ----------------------------- | ---- | ------ |
| children | 内容                          | node | -      |
| ...props | 其余继承所有原生 div 标签属性 | -    | -      |

### JumbotronButton
|   属性   |                 说明                 |  类型  | 默认值 |
| -------- | ------------------------------------ | ------ | ------ |
| children | 内容                                 | node   | -      |
| size     | 尺寸，可选值为 ``small`` 或者留空 | string | -      |
| ...props | 其余继承所有原生 a 标签属性        | -      | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Jumbotron } = soui
const { JumbotronButton } = Jumbotron

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

export default class App extends React.Component {
  render () {
    return <div style={{ background: '#fefefe', width: 375 }}>
      <Jumbotron style={style}>
        <h3 style={{ margin: '24px 0', color: '#fff', fontSize: 18 }}>欢迎回来</h3>
        <JumbotronButton style={{ color: '#fff' }} size="small">登出</JumbotronButton>
      </Jumbotron>
    </div>
  }
}
</script>
```


## 更多
[Storybook - 组件 / 大荧幕 Jumbotron](./storybook/?selectedKind=组件 / 大荧幕 Jumbotron ":ignore")
