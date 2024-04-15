<h1 align="center">vite-plugin-construct-time</h1>

vite插件，记录下本次构建的时间并用于开发环境/生产环境

## 安装

推荐使用`pnpm`下载，`npm`/`yarn`都可以

```shell
pnpm install vite-plugin-construct-time --save-dev
```

## 用法

```js
// vite.config.js
import { defineConfig } from 'vite';
import { constructTimePlugin } from 'vite-plugin-construct-time';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ...其他配置
  plugins: [
    // 获取本次构建的时间，默认不传参仅production环境，传入vite参数表示任何构建环境
    constructTimePlugin([mode]),
  ],
}));
// ...
```

```vue
<!-- src/App.vue -->
<script>
import { getConstructTime } from 'vite-plugin-construct-time';

console.log('Construct Time: ', getConstructTime());
</script>
```
