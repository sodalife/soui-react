# 通知 Notice (实验性)
> Notice 组件仍处实验性状态，后续版本 API 可能发生变化

## 如何使用
```jsx
import { Notice } from '@sodalife/soui-react'
const { NavbarItem } = Notice

class App extends React.Component {
  render () {
    return <Notice closable={true}>
      现在八点二十了
    </Notice>
  }
}

ReactDOM.render(<App />, document.body)
```


## API
### Notice
|   属性   |             说明              |   类型   | 默认值 |
| -------- | ----------------------------- | -------- | ------ |
| children | 内容                          | node     | -      |
| closable | 是否可关闭                    | boolean  | false  |
| onClose  | 当关闭时调用                  | function | -      |
| ...props | 其余继承所有原生 div 标签属性 | -        | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Notice } = soui

export default class App extends React.Component {
  render () {
    return <div style={{ width: 375 }}>
      <Notice closable={true} onClose={() => { console.log('closed') }}>
        现在八点二十了
      </Notice>
    </div>
  }
}
</script>
```


## 更多
[Storybook - 组件 / 通知 Notice](./storybook/?selectedKind=组件 / 通知 Notice ":ignore")
