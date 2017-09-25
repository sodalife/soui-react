# 面板 Panel

## 如何使用
```jsx
import { Panel } from '@sodalife/soui-react'
const { PanelItem } = Panel 

class App extends React.Component {
	render () {
		return <Panel title="主标题" subtitle="副标题">
			<PanelItem title="标题 1" description="描述 1" thumbnail="https://imgplaceholder.com/100x54" />
			<PanelItem title="标题 2" description="描述 2" thumbnail="https://imgplaceholder.com/100x54" />
		</Panel>
	}
}

ReactDOM.render(<App />, document.body)
```


## API
### Panel
|   属性   |             说明              |  类型  | 默认值 |
| -------- | ----------------------------- | ------ | ------ |
| title    | 主标题                        | string | -      |
| subtitle | 副标题                        | string | -      |
| ...props | 其余继承所有原生 div 标签属性 | -      | -      |

### PanelItem
|    属性     |             说明              |  类型  | 默认值 |
| ----------- | ----------------------------- | ------ | ------ |
| title       | 标题                          | string | -      |
| description | 描述                          | string | -      |
| thumbnail   | 缩略图地址                    | string | -      |
| ...props    | 其余继承所有原生 div 标签属性 | -      | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Panel } = soui
const { PanelItem } = Panel

export default class App extends React.Component {
	render () {
		return <div style={{ background: '#fafafa', padding: 12, width: 375 }}>
			<Panel title="主标题" subtitle="副标题">
				<PanelItem title="标题 1" description="描述 1" thumbnail="https://imgplaceholder.com/100x54" />
				<PanelItem title="标题 2" description="描述 2" thumbnail="https://imgplaceholder.com/100x54" />
			</Panel>
		</div>
	}
}
</script>
```


## 更多
[Storybook - 组件 / 面板 Panel](./storybook/?selectedKind=组件 / 面板 Panel ":ignore")
