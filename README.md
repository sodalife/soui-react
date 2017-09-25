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
const { Button, Icon, alert } = soui
export default class Application extends React.Component {
  render() {
    return <Button type="ghost" onClick={() => alert({ message: 'Hello world.' })}><Icon type="heart-colored" /> Biu !</Button>
  }
}
</script>
```

## 谁在使用
- [Sodalife](https://m.sodalife.xyz/v1/?channel=githuab)
