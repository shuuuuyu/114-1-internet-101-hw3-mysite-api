import { useState } from 'react'

function TarotCard() {
  // 22 張大阿卡納牌
  const MAJOR_ARCANA = [
    "The Fool",
    "The Magician", 
    "The High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Strength",
    "The Hermit",
    "Wheel of Fortune",
    "Justice",
    "The Hanged Man",
    "Death",
    "Temperance",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "Judgement",
    "The World"
  ]

  const [isShuffling, setIsShuffling] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)
  const [drawnCard, setDrawnCard] = useState(null)
  const [orientation, setOrientation] = useState(null)
  const [reading, setReading] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // 開始抽牌
  const handleDrawCard = async () => {
    setError(null)
    setReading(null)
    setIsShuffling(true)
    setIsFlipping(false)
    
    // 洗牌動畫持續 2 秒
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // 隨機選擇一張牌
    const randomCard = MAJOR_ARCANA[Math.floor(Math.random() * MAJOR_ARCANA.length)]
    const randomOrientation = Math.random() > 0.5 ? 'upright' : 'reversed'
    
    setDrawnCard(randomCard)
    setOrientation(randomOrientation)
    setIsShuffling(false)
    
    // 翻牌動畫
    setIsFlipping(true)
    await new Promise(resolve => setTimeout(resolve, 800))
    setIsFlipping(false)
    
    // 呼叫 API
    await fetchTarotReading(randomCard, randomOrientation)
  }

  // 呼叫塔羅 API
  const fetchTarotReading = async (card, orientation) => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('🔮 呼叫塔羅 API...')
      console.log('📤 傳送資料:', { card, orientation })
      
      const response = await fetch('https://tarot-api-production-fcd9.up.railway.app/tarot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          card: card.toLowerCase(),
          orientation: orientation
        })
      })
      
      console.log('📥 API 回應狀態:', response.status, response.statusText)
      
      if (!response.ok) {
        throw new Error(`API 請求失敗 (${response.status})`)
      }
      
      const data = await response.json()
      console.log('✅ API 回應資料:', data)
      
      setReading(data.analysis)
      setLoading(false)
    } catch (err) {
      console.error('❌ API 錯誤:', err)
      setError(err.message)
      setLoading(false)
    }
  }

  // 重新抽牌
  const handleReset = () => {
    setDrawnCard(null)
    setOrientation(null)
    setReading(null)
    setError(null)
    setIsShuffling(false)
    setIsFlipping(false)
  }

  return (
    <div className="tarot-container">
      {/* 初始狀態 */}
      {!drawnCard && !isShuffling && (
        <div style={{ textAlign: 'center' }}>
          <div className="tarot-card-back" style={{
            width: '200px',
            height: '300px',
            margin: '0 auto 30px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onClick={handleDrawCard}
          >
            🃏
          </div>
          <button 
            onClick={handleDrawCard}
            className="portfolio-link"
            style={{ 
              cursor: 'pointer',
              fontSize: '1.1rem',
              padding: '12px 30px'
            }}
          >
            🔮 開始占卜
          </button>
          <p style={{ 
            marginTop: '20px', 
            color: 'rgba(30, 41, 59, 0.6)',
            fontSize: '0.95rem'
          }}>
            點擊卡牌或按鈕開始你的塔羅占卜
          </p>
        </div>
      )}

      {/* 洗牌動畫 */}
      {isShuffling && (
        <div style={{ textAlign: 'center' }}>
          <div className="shuffling-cards" style={{
            position: 'relative',
            width: '200px',
            height: '300px',
            margin: '0 auto 30px'
          }}>
            {[0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="tarot-card-back shuffle-animation"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  animationDelay: `${index * 0.1}s`,
                  zIndex: 5 - index
                }}
              >
                🃏
              </div>
            ))}
          </div>
          <p style={{ 
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#3b82f6',
            marginTop: '20px'
          }}>
            洗牌中...
          </p>
        </div>
      )}

      {/* 翻牌動畫與結果顯示 */}
      {drawnCard && (
        <div style={{ textAlign: 'center' }}>
          {/* 卡牌顯示 */}
          <div 
            className={`tarot-card ${isFlipping ? 'flipping' : ''}`}
            style={{
              width: '200px',
              height: '300px',
              margin: '0 auto 30px',
              position: 'relative',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
              transform: isFlipping ? 'rotateY(180deg)' : orientation === 'reversed' ? 'rotateY(180deg) rotateZ(180deg)' : 'rotateY(180deg)'
            }}
          >
            {/* 卡片背面 */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            }}>
              🃏
            </div>
            
            {/* 卡片正面 */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              background: 'white',
              borderRadius: '15px',
              transform: 'rotateY(180deg)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '15px'
              }}>
                ✨
              </div>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: '700',
                color: '#1e40af',
                textAlign: 'center'
              }}>
                {drawnCard}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: orientation === 'reversed' ? '#dc2626' : '#059669',
                fontWeight: '600',
                marginTop: '10px',
                padding: '5px 15px',
                background: orientation === 'reversed' ? 'rgba(220, 38, 38, 0.1)' : 'rgba(5, 150, 105, 0.1)',
                borderRadius: '20px'
              }}>
                {orientation === 'reversed' ? '逆位' : '正位'}
              </div>
            </div>
          </div>

          {/* 解讀結果 */}
          {loading ? (
            <div style={{ padding: '30px 0' }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid #f3f3f3',
                borderTop: '4px solid #3b82f6',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 15px'
              }}></div>
              <p style={{ color: '#3b82f6' }}>正在解讀你的運勢...</p>
            </div>
          ) : error ? (
            <div style={{ 
              padding: '20px',
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '10px',
              color: '#dc2626',
              marginBottom: '20px'
            }}>
              <p>❌ {error}</p>
              <button 
                onClick={() => fetchTarotReading(drawnCard, orientation)}
                className="portfolio-link"
                style={{ marginTop: '15px', cursor: 'pointer' }}
              >
                重試
              </button>
            </div>
          ) : reading ? (
            <div style={{
              padding: '25px',
              background: 'rgba(59, 130, 246, 0.05)',
              borderRadius: '15px',
              borderLeft: '4px solid #3b82f6',
              textAlign: 'left',
              marginBottom: '20px'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                color: '#1e40af',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🔮 今日運勢解讀
              </h4>
              <p style={{
                lineHeight: '1.8',
                color: 'rgba(30, 41, 59, 0.85)',
                whiteSpace: 'pre-line',
                fontSize: '1rem'
              }}>
                {reading}
              </p>
            </div>
          ) : null}

          {/* 重新抽牌按鈕 */}
          <button 
            onClick={handleReset}
            className="portfolio-link"
            style={{ 
              cursor: 'pointer',
              background: 'rgba(245, 158, 11, 0.1)',
              color: '#d97706',
              border: '2px solid rgba(245, 158, 11, 0.3)'
            }}
          >
            🔄 重新抽牌
          </button>
        </div>
      )}

      {/* CSS 動畫 */}
      <style>{`
        @keyframes shuffle {
          0%, 100% {
            transform: translateX(0) translateY(0) rotate(0deg);
          }
          25% {
            transform: translateX(30px) translateY(-20px) rotate(10deg);
          }
          50% {
            transform: translateX(-30px) translateY(-10px) rotate(-10deg);
          }
          75% {
            transform: translateX(20px) translateY(15px) rotate(5deg);
          }
        }
        
        .shuffle-animation {
          animation: shuffle 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default TarotCard
