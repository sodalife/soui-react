# SouI for react
> 苏打 React UI 组件

## 快速开始
### 安装
```bash
npm i --save @sodalife/soui-react
```

### 引入并使用
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '@sodalife/soui-react'

ReactDOM.render(<Button>Hello Soda</Button>, document.getElementsByTagName('body')[0])
```

## 马上试试
```jsx
/*react*/
<script>
export default class Application extends React.Component {
	render() {
		return <soui.Button>Hello Soda</soui.Button>
	}
}
</script>
```
