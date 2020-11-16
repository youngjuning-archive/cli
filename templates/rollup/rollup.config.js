import typescript from 'rollup-plugin-typescript2'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'

// 输入
const input = 'index.ts'

// 插件
const plugins = [
  json(),
  nodeResolve(), // 告诉 Rollup 如何查找外部模块
  commonjs(), // 将 CommonJS 转换成 ES2015 模块
  typescript(),
  terser(), // 压缩文件
]

const config = [
  {
    input,
    // 输出
    output: {
      file: 'dist/index.umd.js', // 文件
      format: 'umd', // 格式
      name: '{{name}}', // 生成包名称，代表你的 iife/umd 包
      exports: 'named',
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    plugins,
  }
]

export default config
