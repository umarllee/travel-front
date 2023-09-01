import './header.scss'
import { useCallback } from 'react';

function Header(props) {

    let handleClick = useCallback(() => {
        props.update(true);
    });

    return (
        <div className="row m-0 header justify-content-between">
            <div className="col-sm-3 p-0  ">
                <div className="logoSvg" onClick={handleClick}>
                        <img src="" alt="" />
                        <span>
                            Page title
                        </span>
                </div>
            </div>

            <div className="col-sm-4 d-flex justify-content-end">
                <span>
                    Name Surname
                </span>
                <img src="" alt="" className="ms-2" />
            </div>
        </div>
    );
}

export default Header;