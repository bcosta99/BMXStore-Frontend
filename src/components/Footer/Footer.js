import React from 'react';
import {CDBBox, CDBBtn, CDBFooter, CDBIcon} from 'cdbreact';

export const Footer = () => {
    return (
        <CDBFooter className="shadow">
            <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{width: '80%'}}>
                <CDBBox display="flex" justifyContent="between" className="flex-wrap">
                    <CDBBox>
                        <a href="/home" className="d-flex align-items-center p-0 text-dark">
                            <img
                                alt="logo"
                                src="/logobmx.jpg"
                                width="30px"
                            />
                            <span className="ml-3 h5 font-weight-bold">BMXStore</span>
                        </a>
                    </CDBBox>
                    <CDBBox display="flex" style={{width: '50%'}} justifyContent="between">
                        <CDBBox>
                            <p className="h5 mb-4" style={{fontWeight: '600'}}>
                                BMXStore
                            </p>
                            <CDBBox flex="column" display="flex" style={{cursor: 'pointer', padding: '0'}}>
                            </CDBBox>
                            <h6> +34 666 444 333</h6>
                            <h6> Calle Playa de Liencres, 24 </h6>
                            <h6> Las Rozas, Madrid </h6>
                        </CDBBox>
                        <CDBBox>
                            <p className="h5 mb-4" style={{fontWeight: '600'}}>
                                Products
                            </p>
                            <CDBBox display="flex" flex="column" style={{cursor: 'pointer', padding: '0'}}>
                            </CDBBox>
                        </CDBBox>
                    </CDBBox>
                </CDBBox>
                <CDBBox display="flex" className="mt-4" justifyContent="between">
                    <small className="ml-2">&copy; BMXStore, 2022. All rights reserved.</small>
                    <CDBBox display="flex">
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="facebook-f"/>
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="mx-3 p-2">
                            <CDBIcon fab icon="twitter"/>
                        </CDBBtn>
                        <CDBBtn flat color="dark" className="p-2">
                            <CDBIcon fab icon="instagram"/>
                        </CDBBtn>
                    </CDBBox>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};

export default Footer;