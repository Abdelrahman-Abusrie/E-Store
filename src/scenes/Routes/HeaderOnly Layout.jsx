import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
const HeaderOnlyLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default HeaderOnlyLayout;