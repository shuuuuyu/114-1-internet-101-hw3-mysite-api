import { useState, useEffect } from 'react'
import TarotCard from './TarotCard' // 引入塔羅組件

function AnotherTab() {
  const [weather, setWeather] = useState(null)
  const [quote, setQuote] = useState(null)
  const [weatherLoading, setWeatherLoading] = useState(true)
  const [quoteLoading, setQuoteLoading] = useState(true)
  const [weatherError, setWeatherError] = useState(null)
  const [quoteError, setQuoteError] = useState(null)
  const [quoteSource, setQuoteSource] = useState('') // 記錄金句來源

  // 獲取天氣資料
  useEffect(() => {
    fetchWeather()
  }, [])

  // 獲取每日金句
  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchWeather = async () => {
    try {
      setWeatherLoading(true)
      setWeatherError(null)
      
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
      
      if (!API_KEY) {
        throw new Error('請在 .env 檔案中設定 VITE_WEATHER_API_KEY')
      }

      const url = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${API_KEY}&locationName=臺北市`
      
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error('無法獲取天氣資料')
      }
      
      const data = await response.json()
      const location = data.records.location.find(loc => loc.locationName === '臺北市')
      
      if (!location) {
        throw new Error('找不到台北市的天氣資料')
      }

      const weatherElements = location.weatherElement
      const weatherDesc = weatherElements.find(el => el.elementName === 'Wx')?.time[0]?.parameter?.parameterName || '資料載入中'
      const minTemp = weatherElements.find(el => el.elementName === 'MinT')?.time[0]?.parameter?.parameterName || '--'
      const maxTemp = weatherElements.find(el => el.elementName === 'MaxT')?.time[0]?.parameter?.parameterName || '--'
      const pop = weatherElements.find(el => el.elementName === 'PoP')?.time[0]?.parameter?.parameterName || '--'
      
      setWeather({
        location: '台北市大安區',
        description: weatherDesc,
        minTemp: minTemp,
        maxTemp: maxTemp,
        rainProbability: pop
      })
      
      setWeatherLoading(false)
    } catch (error) {
      console.error('獲取天氣失敗:', error)
      setWeatherError(error.message)
      setWeatherLoading(false)
    }
  }

  const fetchQuote = async () => {
    try {
      setQuoteLoading(true)
      setQuoteError(null)
      
      console.log('🔍 開始獲取金句...')
      console.log('📡 嘗試從 API Ninjas 載入...')
      
      // 從環境變數讀取 API Ninjas Key
      const API_KEY = import.meta.env.VITE_NINJA_API_KEY
      
      if (!API_KEY) {
        throw new Error('請在 .env 檔案中設定 VITE_NINJA_API_KEY')
      }
      
      console.log('🔑 API Key 已載入，長度:', API_KEY.length)
      
      // 使用 API Ninjas Quotes API
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY
        }
      })
      
      console.log('📥 回應狀態:', response.status, response.statusText)
      
      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ API 錯誤回應:', errorText)
        throw new Error(`API Ninjas 回應錯誤 (${response.status})`)
      }
      
      const data = await response.json()
      console.log('✅ 成功從 API Ninjas 取得金句:', data)
      
      // API Ninjas 回傳的是陣列,取第一個
      setQuote({
        text: data[0].quote,
        author: data[0].author
      })
      setQuoteSource('API Ninjas') // 記錄來源
      
      setQuoteLoading(false)
    } catch (error) {
      console.error('❌ API Ninjas 失敗:', error.message)
      console.log('🔄 切換到本地金句陣列...')
      
      // 備用方案：使用本地金句陣列
      const localQuotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "In the end, we only regret the chances we didn't take.", author: "Lewis Carroll" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
      ]
      
      const randomQuote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
      console.log('✅ 使用本地金句:', randomQuote)
      
      setQuote(randomQuote)
      setQuoteSource('本地金句陣列') // 記錄來源
      setQuoteLoading(false)
    }
  }

  const handleRefreshQuote = () => {
    console.log('🔄 手動重新載入金句')
    fetchQuote()
  }

  return (
    <div className="another-tab">
      <section className="section">
        <h2 className="section-title">API 應用展示</h2>
        
        <div className="placeholder-content">
          {/* 天氣卡片 */}
          <div className="placeholder-card">
            <h3>🌤️ 即時天氣</h3>
            {weatherLoading ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #3b82f6',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 15px'
                }}></div>
                <p>載入天氣資料中...</p>
              </div>
            ) : weatherError ? (
              <div style={{ textAlign: 'center', padding: '20px 0', color: '#e74c3c' }}>
                <p>❌ {weatherError}</p>
                <button 
                  onClick={fetchWeather}
                  className="portfolio-link"
                  style={{ marginTop: '15px', cursor: 'pointer' }}
                >
                  重試
                </button>
              </div>
            ) : weather ? (
              <div>
                <p style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '600', 
                  color: '#1e40af',
                  marginBottom: '15px'
                }}>
                  📍 {weather.location}
                </p>
                <ul>
                  <li>
                    <strong>天氣狀況：</strong>{weather.description}
                  </li>
                  <li>
                    <strong>溫度範圍：</strong>{weather.minTemp}°C - {weather.maxTemp}°C
                  </li>
                  <li>
                    <strong>降雨機率：</strong>💧 {weather.rainProbability}%
                  </li>
                </ul>
              </div>
            ) : null}
          </div>

          {/* 每日金句卡片 */}
          <div className="placeholder-card">
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h3 style={{ margin: 0 }}>💭 每日金句</h3>
              <button 
                onClick={handleRefreshQuote}
                disabled={quoteLoading}
                style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  fontSize: '1.2rem',
                  cursor: quoteLoading ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: quoteLoading ? 0.5 : 1
                }}
                onMouseOver={(e) => {
                  if (!quoteLoading) {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                    e.currentTarget.style.transform = 'rotate(180deg)'
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                  e.currentTarget.style.transform = 'rotate(0deg)'
                }}
              >
                🔄
              </button>
            </div>
            
            {quoteLoading ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #3b82f6',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 15px'
                }}></div>
                <p>載入金句中...</p>
              </div>
            ) : quoteError ? (
              <div style={{ textAlign: 'center', padding: '20px 0', color: '#e74c3c' }}>
                <p>❌ {quoteError}</p>
                <button 
                  onClick={fetchQuote}
                  className="portfolio-link"
                  style={{ marginTop: '15px', cursor: 'pointer' }}
                >
                  重試
                </button>
              </div>
            ) : quote ? (
              <div>
                {/* 顯示金句來源 */}
                <div style={{
                  background: quoteSource === 'API Ninjas' 
                    ? 'rgba(16, 185, 129, 0.1)' 
                    : 'rgba(245, 158, 11, 0.1)',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: quoteSource === 'API Ninjas' ? '#059669' : '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  {quoteSource === 'API Ninjas' ? '🌐' : '💾'}
                  來源：{quoteSource}
                </div>
                
                <div style={{ 
                  padding: '20px',
                  background: 'rgba(59, 130, 246, 0.05)',
                  borderRadius: '15px',
                  borderLeft: '4px solid #3b82f6'
                }}>
                  <p style={{ 
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    color: 'rgba(30, 41, 59, 0.9)',
                    marginBottom: '15px',
                    lineHeight: '1.7'
                  }}>
                    "{quote.text}"
                  </p>
                  <p style={{ 
                    textAlign: 'right',
                    fontWeight: '600',
                    color: '#3b82f6',
                    fontSize: '1rem'
                  }}>
                    — {quote.author}
                  </p>
                </div>
              </div>
            ) : null}
          </div>

          {/* 塔羅占卜卡片 - 使用 TarotCard 組件 */}
          <div className="placeholder-card">
            <h3>🔮 塔羅占卜</h3>
            <TarotCard />
          </div>
        </div>
      </section>
      
      {/* 加入需要的 CSS 動畫 */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default AnotherTab
