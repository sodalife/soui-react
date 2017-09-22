# 图片 Image
> 支持根据加载状态展示不同内容的图片扩展组件


## 如何使用
```jsx
import { Image } from '@sodalife/soui-react'

class App extends React.Component {
	render () {
		return <Image 
			src="https://unsplash.it/320/200/?random"
			placeholder="https://imgplaceholder.com/320x200/cccccc/757575/ion-android-more-horizontal"
			error="https://imgplaceholder.com/320x200/cccccc/757575/fa-bug"
		 />
	}
}

ReactDOM.render(<App />, document.body)
```


## API
### Image
|    属性     |                     说明                     |  类型  | 默认值 |
| ----------- | -------------------------------------------- | ------ | ------ |
| src         | 图片地址                                     | string | -      |
| placeholder | 图片未设定或未加载完成时，代替展示的图片地址 | string | -      |
| error       | 图片加载错误时，代替展示的图片地址           | string | -      |

## 实例演示
```jsx
/*react*/
<script>
const { Image } = soui

export default class App extends React.Component {
	render () {
		return <Image 
			src="https://unsplash.it/320/200/?random"
			placeholder="https://imgplaceholder.com/320x200/cccccc/757575/ion-android-more-horizontal"
			error="https://imgplaceholder.com/320x200/cccccc/757575/fa-bug"
		 />
	}
}
</script>
```


## 更多
[Storybook - 基础元素 / 图片 Image](./storybook/?selectedKind=基础元素 / 图片 Image ":ignore")
