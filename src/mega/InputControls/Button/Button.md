# Button组件

---

## Button.tsx

主文件，定义事件和回调，包括一些常规性渲染。

主文件规范应该为， interface接口 组件函数入口

在组件函数中应该包含
 - 需要定义的函数
 - style变量，为json格式，用于保存可以让开发者自定义的json数据，以及部分用于测试的样式数据

#### 参数接口

***注意*** ：
 - 命名规范为： 组件命 + Props， 如Button组件即为```ButtonProps```
 - 可选属性加上‘？’，如不确定用户是否传递color属性，则使用```color?:ButtonColorType```
 - 对于连结类型（多选），则在interface下面写type， 命名规范为 ```组件名+属性名+Type```，如Button的color属性，则为ButtonColorType


#### style数据

> 此数据保存为json格式，用于传递给自定义组件的style属性，用于直接操作样式。
> 此变量的意义是让开发者可以自定义属性。如Button有自定义属性‘color’，可以用于操作Button按钮默认的背景颜色，
> 此处可以让开发者自己定义，需要进行部分判断（条件渲染），将此处较为特殊，可定制化的文件写在style中。
> 而ButtonItem中则保存通用样式。

推荐使用三目运算符，也可以封装通用的模板函数，极其不建议在里面套函数，因为后期我不一定看得懂。

#### Return

在return中写组件的骨架，骨架统一使用有以下标签包裹，其中所有使用的标签统一使用styled编写，
并放置于 ButtonItem 中。
```tsx
<React.Fragment>
    <xxxWrapper>
    </xxxWrapper>
    <yyyWrapper>
    </yyyWrapper>
</React.Fragment>
```

而对于一些简单的标签，如仅用于占位或者需要用于撑元素的div可以考虑直接编写，如以下写法(可以但是不推荐，根据实际情况判断)：
```tsx
<React.Fragment>
    <xxxWrapper>
        <div style={{margin:'10px'}}>...</div>
    </xxxWrapper>
</React.Fragment>
```

---

## ButtonCss.tsx

此文件主要用于存放开发者自定义属性的样式，，可以与 ```/src/styles```中的文件进行联动，
如果对styles中定义的通用文件不熟悉，也可以在此中自定义样式。

唯一需要注意的是，所有的Css命名文件中命名规范为：```_ + Props中定义的属性```,
如Button.tsx中 color属性需要自定义类型，则在ButtonCss.tsx中编写```export const _color = {}```

---

## ButtonItem.tsx

此文件是通用文件定义， 即**此处定义的均为静态文件**，是不会导致组件渲染的静态样式。
统一采用styled-components包进行编写。

此包在ts环境下可能会报头文件错误，应该是我没有导入ts规范的包，使用ts警告镇压继续编写。



