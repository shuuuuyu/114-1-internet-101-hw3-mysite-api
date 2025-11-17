import { useState } from 'react'
import './App.css'
import ProfileHeader from './components/ProfileHeader'
import OriginalContent from './components/OriginalContent'
import AnotherTab from './components/AnotherTab'

function App() {
  const [activeTab, setActiveTab] = useState('original')

  return (
    <div className="app-container">
      {/* 頂部個人資料區塊 - 固定不變 */}
      <ProfileHeader />
      
      {/* 分頁切換按鈕 - IG 風格 */}
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'original' ? 'active' : ''}`}
          onClick={() => setActiveTab('original')}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/>
          </svg>
          作品集
        </button>
        <button 
          className={`tab-button ${activeTab === 'another' ? 'active' : ''}`}
          onClick={() => setActiveTab('another')}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
          其他內容
        </button>
      </div>

      {/* 內容區塊 - 根據 activeTab 切換 */}
      <div className="tab-content">
        {activeTab === 'original' ? <OriginalContent /> : <AnotherTab />}
      </div>
    </div>
  )
}

export default App
