# 列表 List

## 如何使用
```jsx
import { List } from '@sodalife/soui-react'
const { ListTitle, ListItem, ListSubItem, ListButton, ListGroup, ListBrief } = List 

class App extends React.Component {
	render () {
		return <List>
			<ListTitle>
				列表标题
			</ListTitle>
			<ListItem icon="coding">
				列表项 1
			</ListItem>
			<ListItem icon="coding">
				列表项 2
			</ListItem>
		</List>
	}
}

ReactDOM.render(<App />, document.body)
```


## API
### List
|   属性   | 说明 | 类型 | 默认值 |
| -------- | ---- | ---- | ------ |
| children | 内容 | node | -      |

### ListItem
|   属性    |     说明     |  类型   | 默认值 |
| --------- | ------------ | ------- | ------ |
| children  | 内容         | node    | -      |
| icon      | 图标名       | string  | -      |
| thumbnail | 缩略图地址   | string  | -      |
| arrow     | 是否显示箭头 | boolean | false  |
| checked   | 是否被勾选   | boolean | false  |
| extra     | 额外信息     | string  | -      |

### ListSubItem
|   属性   |            说明            | 类型 | 默认值 |
| -------- | -------------------------- | ---- | ------ |
| ...props | 其余继承所有 ListItem 属性 | -    | -      |

### ListTitle
|   属性   | 说明 | 类型 | 默认值 |
| -------- | ---- | ---- | ------ |
| children | 内容 | node | -      |

### ListButton
|   属性   | 说明 | 类型 | 默认值 |
| -------- | ---- | ---- | ------ |
| children | 内容 | node | -      |

### ListGroup
|   属性   | 说明 | 类型 | 默认值 |
| -------- | ---- | ---- | ------ |
| children | 内容 | node | -      |

### ListBrief
|   属性   | 说明 | 类型 | 默认值 |
| -------- | ---- | ---- | ------ |
| children | 内容 | node | -      |


## 实例演示
```jsx
/*react*/
<script>
const { List } = soui
const { ListTitle, ListItem, ListSubItem, ListButton, ListGroup, ListBrief } = List

const style = {
	marginBottom: 24
}

export default class App extends React.Component {
	render () {
		return <div style={{ background: '#fafafa', padding: 12, width: 320 }}>
			<List style={style}>
				<ListTitle>列表标题</ListTitle>
				<ListItem>
					基础项
				</ListItem>
				<ListItem icon="coding">
					含图标项
				</ListItem>
				<ListItem thumbnail="https://imgplaceholder.com/24x24">
					含缩略图项
				</ListItem>
				<ListItem>
					<span>含摘要项</span>
					<ListBrief>摘要</ListBrief>
				</ListItem>
				<ListItem extra="附加内容">
					含附加内容项
				</ListItem>
				<ListItem arrow={true}>
					含箭头项
				</ListItem>
				<ListItem checked={true}>
					含勾选项
				</ListItem>
				<ListItem thumbnail="https://imgplaceholder.com/24x24" icon="coding" extra="附加内容" arrow={true} checked={true}>
					<span>技能全开项</span>
					<ListBrief>摘要</ListBrief>
				</ListItem>
				<ListButton>按钮</ListButton>
			</List>

			<List style={style}>
				<ListTitle>子列表</ListTitle>
				<ListSubItem>
					子项
				</ListSubItem>
				<ListSubItem thumbnail="https://imgplaceholder.com/24x24" icon="coding" extra="附加内容" arrow={true} checked={true}>
					<span>技能全开项</span>
					<ListBrief>摘要</ListBrief>
				</ListSubItem>
			</List>

			<List style={style}>
				<ListTitle>组合列表</ListTitle>
				<ListGroup>
					<ListItem>组合项 1</ListItem>
					<ListItem>组合项 2</ListItem>
					<ListItem>组合项 3</ListItem>
				</ListGroup>
			</List>
		</div>
	}
}
</script>
```


## 更多
[Storybook - 组件 / 列表 List](./storybook/?selectedKind=组件 / 列表 List ":ignore")
