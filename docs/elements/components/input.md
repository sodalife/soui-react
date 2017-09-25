# 输入框 Input

## 如何使用
```jsx
import { Input } from '@sodalife/soui-react'

class App extends React.Component {
	render () {
		return <Input icon="user" placeholder="yourname" onChange={(e) => console.log(e.currentTarget.value)} />
	}
}

ReactDOM.render(<App />, document.body)
```


## API
### Input
|     属性     |              说明               |   类型   | 默认值 |
| ------------ | ------------------------------- | -------- | ------ |
| icon         | 图标名                          | string   | -      |
| error        | 是否标记错误                    | boolean  | false  |
| addon        | 右侧附加信息                    | node     | -      |
| onClickAddon | 点击 addon 时调用               | function | -      |
| ...props     | 其余继承所有原生 input 标签属性 | -        | -      |

### InputPassword
|   属性   |              说明               |  类型   | 默认值 |
| -------- | ------------------------------- | ------- | ------ |
| icon     | 图标名                          | string  | -      |
| error    | 是否标记错误                    | boolean | false  |
| ...props | 其余继承所有原生 input 标签属性 | -       | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Input } = soui
const { InputPassword } = Input

export default class App extends React.Component {
	render () {
		return <div>
			<Input icon="user" placeholder="your name" onChange={(e) => console.log(e.currentTarget.value)} />
			<InputPassword icon="lock" placeholder="secret word" onChange={(e) => console.log(e.currentTarget.value)} />
		</div>
	}
}
</script>
```


## 更多
[Storybook - 组件 / 输入框 Input](./storybook/?selectedKind=组件 / 输入框 Input ":ignore")
