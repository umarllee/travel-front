import { useCallback, useState } from 'react';
import Header from './layouts/header/header';
import Sidebar from './layouts/sidebar/sidebar';
import './public.scss'
import { Outlet } from 'react-router-dom';



function Public() {

    const [sideState, setSideState] = useState(false);

    let headerCalling = useCallback((response) => {
        let bool = response;
        setSideState(bool);
    });

    let sideCalling = useCallback((response) => {
        let bool = response;
        setSideState(bool);
    });




    return (

        <div className="row m-0" style={{ position: 'relative' }} >
            <div className={sideState ? "p-0 side-cont bg-white" : 'p-0 side-cont bg-white close '} style={{ width: sideState ? '18%' : '0%', transition: '1s' }}>
                <Sidebar update={sideCalling} />
            </div>

            <div className="p-0 m-0 content-cont">
                <div className="p-0 m-0">
                    <Header update={headerCalling} />
                </div>
                <div className="px-4 pt-4  ">
                    <Outlet />
                </div>

            </div >
        </div>
    );
}

export default Public;