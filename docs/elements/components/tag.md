# 标签 Tag

## 如何使用
```jsx
import { Tag } from '@sodalife/soui-react' 

class App extends React.Component {
  render () {
    return <Tag selected={true}>soui</Tag>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Tag
|   属性   |             说明              |  类型   | 默认值 |
| -------- | ----------------------------- | ------- | ------ |
| children | 内容                          | node    | -      |
| selected | 是否被选中                    | boolean | false  |
| ...props | 其余继承所有原生 div 标签属性 | -       | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Tag } = soui

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      value: null,
    }
  }

  render () {
    return <div style={{ width: 375, display: 'flex' }}>
      {
        ['react', 'vue', 'angular'].map((value) => {
          return <Tag
            selected={this.state.value === value}
            onClick={(selected) => this.setState({ value: selected ? value : null })}
            style={{ width: 100, marginLeft: 12 }}
            >
            {value}
          </Tag>
        })
      }
    </div>
  }
}
</script>
```


## 更多
[Storybook - 组件 / 标签 Tag](./storybook/?selectedKind=组件 / 标签 Tag ":ignore")
