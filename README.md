# XUE's Space

个人网站 v0.0.2。纯 HTML、CSS、JavaScript 实现，无需安装依赖或构建，可托管于 GitHub Pages。

## 文件结构

- `index.html`：主页、公共导航及子页面结构。
- `styles.css`：深浅主题和响应式布局。
- `content.js`：按内容分组的三语文案、工具名称、图标路径与介绍。
- `app.js`：页面导航和偏好保存。
- `cv.js`：简历下载入口与简单算术验证。
- `assets/cv/`：中英法三份原始 PDF 简历。
- `globe.js`：球体渲染、24 个技能节点和两侧轮播介绍。
- `assets/icons/`：真实产品图标及来源、许可说明。
- `assets/avatar.png`：站点图标。
- `assets/portrait.png`：首页个人介绍肖像。

- `assets/fonts/`：首页标题使用的 Space Grotesk 字体、Sora 与 Noto Serif SC 字体子集及 OFL 许可。

## 本地运行

在项目根目录执行（需安装 Python）：

```sh
python -m http.server 4174 --bind 127.0.0.1
```

访问 http://127.0.0.1:4174 。也可以使用其他静态文件服务器。

## 当前功能

首页中央欢迎词使用本地字体：英文 Space Grotesk、法文 Sora、中文 Noto Serif SC。字体及许可保存在 `assets/fonts/`。

页面文案统一在 `content.js` 中修改：`pageCopy` 保存页面文字，`skillCatalog` 保存工具名称、图标路径、分类与介绍；`experienceContent` 保存经历页面的分组与条目。同一内容的 `zh`（中文）、`en`（英文）、`fr`（法文）相邻。字体与布局由 `styles.css` 管理。法文和中文标题字体目前仅包含现有欢迎词，改用其他文字时需扩充字体子集。

- 默认英语和深色主题；支持中文、英语、法语及深浅风格切换，选择保存在浏览器中。
- Canvas 技能球自动旋转，支持鼠标拖动；滚轮用于正常滚动页面。
- 自我介绍区域、个人肖像、版本号及固定的版本更新日期。
- 经历页面提供中英法三语的教育经历、学术经历和其他经历三个部分。学习资料库提供未来分享专业资料的三语说明；联系方式页面提供邮箱与微信。
- 简历页支持中英法三语界面，当前界面语言对应的 CV 优先显示；完成简单加法验证后可打开或下载三份 PDF。此验证仅为前端交互门槛，公开静态 PDF 仍可通过直接链接访问，不构成访问控制。
- 使用 hash 导航，子页面刷新无需服务器路由配置。

球面展示 21 类工具、学习领域与在读大学，共 24 个节点；Python、GitHub、GPT / Codex 各出现两次，重复项处于相对两侧，背面重复项淡出。图标使用真实产品标识，每轮两个节点移至两侧介绍后返回；介绍随语言切换。开启系统减少动画选项时停用自动旋转和轮播。首页简介提供教育背景、工作方式与研究兴趣的三语介绍。

图标来源：Devicon、GNU Octave 官方源码、Lobe Icons。详细来源和许可保存在 `assets/icons/NOTICE.txt` 及同目录许可文件中。

## GitHub Pages

网站地址：https://xue32613731.github.io/ （需所有者完成发布设置后生效）。

将网站代码、assets 资源目录和中英文 README 上传至仓库根目录，确保 index.html 位于根目录。本站是纯静态页面，无需安装依赖或启动 Python 服务。

在仓库 Settings → Pages 中选择 Deploy from a branch，分支选择 main，目录选择 /(root)，保存。等待 GitHub Pages 部署成功后访问上述地址。

英文说明见 [README.en.md](README.en.md)。
