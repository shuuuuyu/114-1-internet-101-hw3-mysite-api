# 🌟 個人網站 | Personal Portfolio

一個整合多項 API 服務的動態個人網站，展示前端技術與 API 串接能力。



---

## 📋 功能特色

### 🌤️ 即時天氣查詢
- 串接中央氣象署開放資料平台 API
- 顯示台北市大安區即時天氣、溫度範圍與降雨機率
- 自動錯誤處理與重試機制

### 💭 每日金句
- 整合 API Ninjas Quotes API
- 每日隨機顯示勵志名言
- 支援手動重新整理
- API 失敗時自動切換本地金句庫

### 🔮 塔羅占卜
- **自建 FastAPI 後端服務**
- 使用 **RAG (Retrieval-Augmented Generation)** 技術
- 整合 **Gemini AI** 生成個人化運勢解讀
- **FAISS 向量資料庫**儲存塔羅牌知識庫
- 支援 22 張大阿卡納牌正逆位解讀
- 精美的洗牌與翻牌動畫效果

---

## 🛠️ 技術架構

### 前端
- **框架**: React 18 + Vite
- **樣式**: 純 CSS（含響應式設計）
- **狀態管理**: React Hooks (useState, useEffect)
- **API 串接**: Fetch API

### 後端（塔羅占卜）
- **框架**: FastAPI
- **AI 模型**: Gemini (Google Generative AI)
- **LLM**: Groq (Llama 3.3 70B)
- **向量資料庫**: FAISS
- **嵌入模型**: Google Generative AI Embeddings
- **技術**: LangChain + RAG

### 部署
- **前端**: Vercel
- **後端**: Railway / Render

---

## 🚀 快速開始

### 前端

```bash
# 安裝依賴
npm install

# 設定環境變數
# 建立 .env.local 檔案並加入：
VITE_WEATHER_API_KEY=你的中央氣象署API金鑰
VITE_NINJA_API_KEY=你的APIninjas金鑰

# 啟動開發伺服器
npm run dev

```

### 後端（塔羅 API）

```bash
# 安裝依賴
pip install -r requirements.txt

# 設定環境變數
# 建立 .env 檔案並加入：
GROQ_API_KEY=你的Groq金鑰
GEMINI_API_KEY=你的Gemini金鑰

# 啟動 FastAPI 伺服器
uvicorn main:app --reload --port 8000
```

---

## 📁 專案結構

```
📦 前端專案
├── src/
│   ├── App.jsx                 # 主應用程式
│   ├── App.css                 # 全域樣式
│   ├── main.jsx                # 應用程式入口
│   └── components/
│       ├── ProfileHeader.jsx   # 個人資料區塊
│       ├── OriginalContent.jsx # 原創內容展示
│       ├── AnotherTab.jsx      # API 應用展示
│       └── TarotCard.jsx       # 塔羅占卜組件
├── .env.local                  # 環境變數（需自行建立）
├── package.json
└── vite.config.js

📦 後端專案（塔羅 API）
├── main.py                     # FastAPI 主程式
├── faiss_tarot_db/             # FAISS 向量資料庫
├── requirements.txt            # Python 依賴
└── .env                        # 環境變數（需自行建立）
```

---

## 🔑 API 金鑰申請

### 中央氣象署開放資料平台
1. 前往 [中央氣象署開放資料平台](https://opendata.cwa.gov.tw/)
2. 註冊帳號並申請 API 授權碼
3. 將授權碼設定到 `VITE_WEATHER_API_KEY`

### API Ninjas
1. 前往 [API Ninjas](https://api-ninjas.com/)
2. 註冊並取得 API Key
3. 將金鑰設定到 `VITE_NINJA_API_KEY`

### Gemini API
1. 前往 [Google AI Studio](https://aistudio.google.com/apikey)
2. 建立 API Key
3. 將金鑰設定到 `GEMINI_API_KEY`

### Groq API
1. 前往 [Groq Console](https://console.groq.com/)
2. 註冊並取得 API Key
3. 將金鑰設定到 `GROQ_API_KEY`

---

## 🎨 功能展示

### 響應式設計
- 📱 支援手機、平板、桌機
- 🎯 平板斷點: 768px
- 🎯 手機斷點: 480px

### 使用者體驗
- ⚡ 快速載入動畫
- 🔄 自動重試機制
- ❌ 完善錯誤處理
- 💾 本地備用資料

### 視覺效果
- 🎴 流暢的卡牌翻轉動畫
- 🌀 洗牌特效
- ✨ 毛玻璃效果
- 🎭 Hover 互動回饋

---

## 🧪 測試

### 本地測試
```bash
# 前端
npm run dev
# 訪問 http://localhost:5173

# 後端
uvicorn main:app --reload
# 訪問 http://localhost:8000/docs
```

### API 端點測試
```bash
# 健康檢查
curl https://your-api.railway.app/health

# 塔羅占卜
curl -X POST https://your-api.railway.app/tarot \
  -H "Content-Type: application/json" \
  -d '{"card": "the fool", "orientation": "upright"}'
```

---

## 📝 授權

本專案僅供個人學習與作品展示使用。

---

## 👤 作者

**Amy**

---

## 🙏 致謝

- [中央氣象署開放資料平台](https://opendata.cwa.gov.tw/)
- [API Ninjas](https://api-ninjas.com/)
- [Google Gemini API](https://ai.google.dev/)
- [Groq](https://groq.com/)
- [Vercel](https://vercel.com/)
- [Railway](https://railway.app/)

---

⭐ 如果這個專案對你有幫助，歡迎給個星星！
[簡短的介紹影片](https://youtu.be/urMNOVU1C9k)
