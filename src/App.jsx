/* eslint-disable react/prop-types */

import './App.scss'
// eslint-disable-next-line no-unused-vars
import { Routes,Route } from 'react-router-dom'
import { Suspense, useState } from 'react';

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
// eslint-disable-next-line no-unused-vars
import {useTranslation,withTranslation} from "react-i18next";
// import { Component } from 'react';


// class HighOrderComponent extends Component {
//   render() {
//       const { t } = this.props;

//       return (
//         <h1>{t('welcome.title', {framework:'React'})}</h1>
//         )
//   }
// }
// const HighOrderComponentTranslated = withTranslation('common')(HighOrderComponent)
const HeaderComponent=()=>
      {
    const [t, i18n] = useTranslation('common');
    const handleLanguage=(e)=>{
        i18n.changeLanguage(e.target.value)
    }
    return <div>
    <select onChange={handleLanguage} value={i18n.language}>
      <option>ar</option>
      <option>en</option>

    </select>
    <div>
      my name is {t('welcome.name',{myname:"sallah"})}
    </div>
        </div>
}

function  App () {

  return (
    <>
    <Suspense fallback="loading">
      <Routes>
        <Route path='/' element={<Layout />} >      
        <Route index  element={<Home/>} />
        </Route>
        </Routes>
    </Suspense>
    </>

  )
}

export default App
