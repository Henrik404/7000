# 7000 Vocabulary

[繁體中文說明](#繁體中文說明) | [English Guide](#english-guide)

---

## 目錄 (Table of Contents)

- [繁體中文說明](#繁體中文說明)
  - [簡介](#簡介)
  - [特點](#特點)
  - [操作指南](#操作指南)
  - [安裝指南](#安裝指南)
  - [檔案結構與技術細節](#檔案結構與技術細節)
  - [貢獻方式](#貢獻方式)
  - [授權](#授權)
- [English Guide](#english-guide)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Usage Instructions](#usage-instructions)
  - [Installation Guide](#installation-guide)
  - [File Structure & Technical Details](#file-structure--technical-details)
  - [Contributing](#contributing)
  - [License](#license)

---

## 繁體中文說明

### 簡介

7000 Vocabulary 是一款進階學習英語單字的漸進式網頁應用程式 (PWA)。  
用戶可以透過隨機化的單字排序、搜尋功能，以及離線訪問，快速提升學習效率。  
該應用提供安裝功能，可輕鬆加入桌面或主畫面，隨時隨地開始學習。

---

### 特點

- **隨機化單字排序**  
  輸入種子 (格式：`seed-number`，例如：`12248-22`)，即可生成特定順序的單字列表，適合分組學習與進度追蹤。若未輸入種子，應用會自動生成一個隨機種子。

- **單字搜尋**  
  透過搜尋功能快速找到並導航到特定單字，方便快速查詢或集中學習某些單字。

- **進度顯示**  
  當前的種子與單字位置顯示於螢幕底部，例如：`位置：12248-22`，幫助用戶隨時掌握學習進度。

- **離線訪問**  
  首次加載後，應用會緩存所有資源，之後即使無網路連接，也可正常訪問與學習。

- **可安裝**  
  支援將應用安裝至桌面或主畫面，方便用戶快速打開並使用。

---

### 操作指南

1. **啟動應用**  
   - 開啟 `index.html` 文件，或將應用部署到本地伺服器（如 VS Code 的 Live Server 插件）。

2. **輸入種子**  
   - 啟動後，應用會提示用戶輸入種子，格式為 `seed-number`（例如：`12248-22`）。  
   - 若未輸入種子，可點擊「隨機產生種子」按鈕，系統將自動生成一個隨機種子（例如：`82633-1`）。

3. **導航單字**  
   - 點擊螢幕右側：前往下一個單字。  
   - 點擊螢幕左側：返回上一個單字。  

4. **搜尋單字**  
   - 點擊右上角搜尋按鈕，輸入單字後點擊搜尋，應用會自動跳轉至該單字的位置。

---

### 安裝指南

1. **安裝到桌面或主畫面**  
   - 瀏覽器將在首次打開應用時提示安裝，點擊安裝按鈕即可。  
   - 若未顯示提示，可在瀏覽器選單中選擇「新增至主畫面」。  

2. **測試離線功能**  
   - 打開應用並等待所有資源加載完成後，斷開網絡連接。  
   - 再次打開應用，確認內容可正常顯示。

---

### 檔案結構與技術細節

#### 檔案結構

/7000-vocabulary
├── 7000單.csv         # 單字資料檔案
├── README.md          # 說明文件
├── icon.png           # PWA 的小圖示 (192x192)
├── icon-large.png     # PWA 的大圖示 (512x512)
├── index.html         # 主應用 HTML
├── manifest.json      # PWA 配置檔案
└── service-worker.js  # Service Worker 用於緩存與離線訪問

#### 技術細節

- **隨機化單字排序**  
  使用種子演算法 (Seed-based Algorithm)，確保相同種子輸出一致的順序，方便跨裝置學習與記錄進度。

- **進階緩存**  
  使用 Service Worker 技術實現應用資源的緩存與離線訪問，首次加載後即可無網絡運行。

---

### 貢獻方式

歡迎任何形式的貢獻！  
您可以 Fork 此專案並提交 Pull Request，幫助改進功能、修復問題或優化代碼。

---

### 授權

此專案採用 MIT 授權。  
您可以自由使用、修改與分發，但需保留原作者資訊。

---

## English Guide

### Introduction

7000 Vocabulary is a Progressive Web App (PWA) designed to help users advance their English vocabulary learning.  
With randomized word order, search functionality, and offline access, users can efficiently enhance their learning experience.  
The app is installable and can be added to your desktop or home screen for easy access.

---

### Features

- **Seed-based Randomization**  
  Shuffle word lists using a seed in the format `seed-number`, e.g., `12248-22`.  
  If no seed is provided, the app generates a random seed, e.g., `82633-1`.

- **Word Search**  
  Quickly search for and navigate to specific words for focused study.

- **Progress Display**  
  View the current seed and word position at the bottom of the screen, e.g., `Location: 12248-22`.

- **Offline Access**  
  After the first load, the app caches all resources, allowing it to function without an internet connection.

- **Installable**  
  Install the app on your desktop or mobile home screen for quick access.

---

### Usage Instructions

1. **Launch the App**  
   - Open the `index.html` file directly, or deploy the app to a local server (e.g., using VS Code's Live Server plugin).

2. **Enter a Seed**  
   - On launch, you’ll be prompted to enter a seed in the format `seed-number` (e.g., `12248-22`).  
   - If no seed is entered, click "Generate Random Seed" to create a random one.

3. **Navigate Words**  
   - Click the right side of the screen to move to the next word.  
   - Click the left side of the screen to go back to the previous word.

4. **Search for a Word**  
   - Click the search button in the top-right corner, enter the word, and hit search.  
   - The app will automatically navigate to the word if found.

---

### Installation Guide

1. **Install to Desktop or Home Screen**  
   - The browser will prompt you to install the app when you first open it. Click the install button.  
   - If no prompt appears, open the browser menu and select "Add to Home Screen".

2. **Test Offline Functionality**  
   - Open the app and ensure all resources are fully loaded.  
   - Disconnect from the internet and confirm the app functions normally.

---

### File Structure & Technical Details

#### File Structure

/7000-vocabulary
├── 7000單.csv         # Word data file
├── README.md          # Documentation
├── icon.png           # Small PWA icon (192x192)
├── icon-large.png     # Large PWA icon (512x512)
├── index.html         # Main application HTML
├── manifest.json      # PWA configuration file
└── service-worker.js  # Service Worker for caching and offline functionality

#### Technical Details

- **Randomized Word Order**  
  A seed-based algorithm ensures consistent output for the same seed, enabling cross-device progress tracking.

- **Advanced Caching**  
  Uses Service Worker technology to cache resources for offline access after the first load.

---

### Contributing

Contributions are welcome!  
Feel free to fork this repository and submit a pull request to help improve functionality, fix bugs, or optimize the code.

---

### License

This project is licensed under the MIT License.  
You are free to use, modify, and distribute it, provided that the original author is credited.
