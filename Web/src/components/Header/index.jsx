import { Layout } from 'antd';
import './index.less'


const { Header } = Layout;


function HeaderComponent() {
    return (
        <div class="header">
            <div class="logo">MiGPT</div>
            <div class="nav">
                <a href="/">首页</a>
                <a href="/config">配置服务</a>
                <a href="#">关于我</a>
            </div>
        </div>
    );
}

export default HeaderComponent;