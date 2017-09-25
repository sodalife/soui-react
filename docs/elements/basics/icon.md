# 图标 Icon

## 如何使用
```jsx
import { Icon } from '@sodalife/soui-react'

class App extends React.Component {
	render () {
		return <Icon type="coding" style={{ fontSize: 72, color: 'gray' }} />
	}
}

ReactDOM.render(<App />, document.body)
```


## 特性和规范
- 图标均使用 [Iconfont](http://iconfont.cn/) 导出，支持以字体的形式修改样式。
- 均为 SVG 图标，支持多色图标。*[Seriously, Don’t Use Icon Fonts](https://cloudfour.com/thinks/seriously-dont-use-icon-fonts/)*
- 命名规范参考 [Icon - Ant Design](https://ant.design/components/icon-cn/#图标的命名规范)，具体规则为：``[特殊业务名?] - [图标名] - [形状?] - [描边?] - [着色?]``
	- 形状包含：
		- ``circle``, 圆形
		- ``ellipse``, 椭圆形
		- ``shield``, 盾形
		- ``tall``, 高形
	- 描边固定使用 ``o`` 表示，与之对应的类型为实心
	- 着色包含：
	  - ``highlight``, 高亮
		- ``colored``, 彩色着色

## API
### Icon
|   属性   |             说明              |  类型  | 默认值 |
| -------- | ----------------------------- | ------ | ------ |
| type     | 图标名                        | string | -      |
| ...props | 其余继承所有原生 svg 标签属性 | -      | -      |


## 实例演示
```jsx
/*react*/
<script>
const { Icon } = soui

export default class App extends React.Component {
	render () {
		return <Icon type="coding" style={{ fontSize: 72, color: 'gray' }} />
	}
}
</script>
```


## 所有图标
[Storybook - 基础元素 / 图标 Icon - 全部图标](./storybook/?selectedKind=基础元素 / 图标 Icon&selectedStory=全部图标 ":ignore")


## 更多
[Storybook - 基础元素 / 图标 Icon](./storybook/?selectedKind=基础元素 / 图标 Icon ":ignore")
