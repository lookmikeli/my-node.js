# npm 安装包： 命令

## 命令：

### 安装包步骤一：

### 命令：

npm install 包的完整名称

### 安装包步骤二：

### 命令：

npm i 包的完整名称

### 指定要安装那个版本 @跟指定的版本

### 命令：

npm i 包的完整名称@2.22.2

### 在执行命令所处的目录下，快速新建 package.json 文件

### 命令：

npm init -y

#### 注意：

1.项目只需执行一次
2.npm 包管理工具会自动把包的名称和版本号记录到 package.json 中

3.项目文件夹名称不要使用中文，和出现空格

### dependencies 节点

记录使用 npm install 命令装了那些包

### 一次性安装多个包

### 命令：

npm i axios jquery

#### 开发记得把 node_modules 文件夹，添加到.gitignore 忽略文件中

#### package.json 配置文件记录添加了那些包

### 删除包

### 命令：

npm uninstall 包名称

### 注意：package.json 文件的 dependencies 节点的包属性也会被删除

### 指定包，并记录到 devDependencies 中； devDependencies 项目结束不在需要

### 命令：

npm i 包名 -D 或者 npm install 包名 --save-dev

### 切换 npm 的下包镜像源

### 查看当前的下包镜像源

npm config get registry

### 镜像源切换为 taobao

npm config set registry=https://registry.npm.taobao.org/
