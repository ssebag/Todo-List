import React, {useState, useContext} from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css'
export default function Navbar() {
  
 //============================== Lang =======================
 const lang= localStorage.getItem("language");
 const { t, i18n } = useTranslation();
 const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); 
  };

  return (
    <div className="lang container">
        {
           lang == 'ar' ? (
            <button onClick={()=> changeLanguage('en')}>English</button>
            ):(
            <button onClick={()=> changeLanguage('ar')}>العربية</button>
            )
        }
    </div>
  );
}
