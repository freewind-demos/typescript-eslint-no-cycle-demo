TypeScript Eslint "import/no-cycle" Demo
=====================================

不知道为什么"import/no-cycle"在js中生效，在ts中不生效。

js版本：https://github.com/freewind-demos/javascript-eslint-no-cycle-demo

解决：发现了关键点，原来在eslint config中，要

```
"extends": ["plugin:import/typescript"],
```

里面专门为typescript进行了各种设置，比如文件后缀等

```
npm install
npm run lint
```

将报预期的错误：

```
src/dep-a.ts
  2:1  error  Dependency cycle detected  import/no-cycle

src/dep-b.ts
  1:1  error  Dependency cycle detected  import/no-cycle

✖ 2 problems (2 errors, 0 warnings)
```
