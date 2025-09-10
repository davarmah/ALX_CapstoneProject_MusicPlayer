import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import TrackList from "./components/TrackList"
import BottomMiniPlayer from "./components/BottomMiniPlayer"


function App() {
  
  return (
    <>
      <div className="min-h-screen bg-zinc-900 text-white">
        <Outlet />
      </div>
    </>
  )
}

export default App
