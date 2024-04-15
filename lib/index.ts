import { Plugin } from 'vite';

// 版本关键字
const constructTimeKey = '__VITE_PLUGIN_CONSTRUCT_TIME__';
// 插件是否可以运行
let isRun = false;

// 写入构建时间
const constructTimePlugin = (modes: string[] = []): Plugin => {
  return {
    name: 'vite-plugin-construct-time',
    config(_uc, { mode }) {
      isRun = mode === 'production' || modes.includes(mode);
    },
    transformIndexHtml() {
      if (!isRun) return;
      return [
        {
          tag: 'script',
          children: `window.${constructTimeKey}=${Date.now()}`,
        },
      ];
    },
  }
};

// 获取构建时间
const getConstructTime = (): number => {
  if (typeof window === 'undefined') {
    console.warn('[vite-plugin-construct-time] -> window未定义');
    return 0;
  }
  const __window__ = window as typeof window & { [constructTimeKey]?: number };
  const constructTime = __window__[constructTimeKey] || 0;
  if (!constructTime) console.warn('[vite-plugin-construct-time] -> 无法获取构建时间');
  return constructTime;
};

export { constructTimePlugin, getConstructTime };
