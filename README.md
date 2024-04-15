<h1 align="center">vite-plugin-construct-time</h1>

vite插件，记录下本次构建的时间并用于开发环境/生产环境

> 请注意，为了适应未来vite移除CommonJS的支持，插件仅适用于ES6的Module

## 安装

推荐使用`pnpm`下载，`npm`/`yarn`都可以

```shell
pnpm install vite-plugin-construct-time --save-dev
```

## 用法
### 记录构建时间
```js
// vite.config.js
import { defineConfig } from 'vite';
import { constructTimePlugin } from 'vite-plugin-construct-time';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ...其他配置
  plugins: [
    // 获取本次构建的时间，默认不传参仅production环境，传入mode参数表示任何构建环境
    constructTimePlugin([mode]),
  ],
}));
// ...
```

### 获取构建时间
```vue
<!-- src/App.vue -->
<script>
import { getConstructTime } from 'vite-plugin-construct-time';

const options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
};
const constructTime = new Intl.DateTimeFormat('zh-CN', options).format(getConstructTime());

console.log('Construct Time: ', constructTime);
</script>
```
