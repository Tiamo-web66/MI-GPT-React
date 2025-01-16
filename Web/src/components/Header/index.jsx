import { Layout } from 'antd';


const { Header } = Layout;


function HeaderComponent() {
    return (
        <Header style={{ textAlign: 'center', background: 'pink', borderRadius: '4px' }}>
            顶部导航
        </Header>
    );
}

export default HeaderComponent;