# 视图 View
> 为移动端垂直向网页提供便捷的布局方案

## 特性
- 与同级别元素搭配使用时（如 [导航栏 Navbar]()），主体 (ViewMain) 的高度将自适应调整
- 当弹出系统键盘时，自动聚焦视图内正在输入文字的节点
- 便于去除浏览器的滚动回弹效果


## 如何使用
```jsx
import { View } from '@sodalife/soui-react'

const { ViewMain } = View

class App extends React.Component {
	render () {
		return <View>
			<ViewMain>
				Hi
			</ViewMain>
		</View>
	}
}

ReactDOM.render(<App />, document.body)
```


## API
### View
|    属性     |                     说明                     |  类型  | 默认值 |
| ----------- | -------------------------------------------- | ------ | ------ |
| children         | 子内容                                     | node | -      |

### ViewMain
|    属性     |                     说明                     |  类型  | 默认值 |
| ----------- | -------------------------------------------- | ------ | ------ |
| children         | 子内容                                     | node | -      |


## 更多
[Storybook - 基础元素 / 视图 View](./storybook/?selectedKind=基础元素 / 视图 View ":ignore")
