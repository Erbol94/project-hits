import React from 'react';
import Skidki from "../../components/skidki/Skidki";
import Popular from "../../components/popular/Popular";
import Slide from "../../components/popular/Slide";
import Hity from "../../components/popular/Hity";
import SpecBlock from "../../components/specBlock/SpecBlock";
import PreimBlock from "../../components/preimushestva/PreimBlock";
import Partnery from "../../components/partnery/Partnery";
import RegistrationPage from '../registrationPage/RegistrationPage';


const MainPage = () => {
    return (
        <div>
            {/* <Skidki/>
            <Popular/>
            <Slide/>
            <Hity/>
            <SpecBlock/>
            <PreimBlock/>
            <Partnery/> */}
            <RegistrationPage />

        </div>
    );
};

export default MainPage;