// ----------- 📌 メニュー制御部分 -----------
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-item');
  const contentHeader = document.getElementById('content-title');
  const contentFrame = document.getElementById('content-frame');

  const pathMap = {
    'トップ': '/top',
    'カレンダー': '/calendar',
    'Googleドライブ': 'https://drive.google.com/drive/folders/1sqY8VGma4CLHXCtI-3WQh-g5qVOdiT9l',
    'メッセージ': 'message',
    'カウンターシフト': '/shift',
    'カウンター業務記録': '/report',
    '申請': '/petition',
    'マニュアル': '/manual',
    '本を貸し出す': '/lending',
    '本を返却する': '/return'
  };

  const initialTitle = 'トップ';
  contentHeader.textContent = initialTitle;
  contentFrame.src = pathMap[initialTitle];

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent.trim();
      if (text === 'Googleドライブ') {
        window.location.href = pathMap[text];
      } else {
        contentHeader.textContent = text;
        contentFrame.src = pathMap[text] || '/top';
      }
    });
  });
});


// ----------- 📌 Firebase 通知部分（追加）-----------
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyCN0xbBPlPJM1szoOik6yMFgkiNRy_QhZY",
  authDomain: "koberyukoku-library-staff.firebaseapp.com",
  projectId: "koberyukoku-library-staff",
  storageBucket: "koberyukoku-library-staff.appspot.com",
  messagingSenderId: "138126502371",
  appId: "1:138126502371:web:1c0663c28861de6a87d8d6"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

async function requestPermissionAndToken() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const swReg = await navigator.serviceWorker.register('/firebase-messaging-sw.js');
      const token = await getToken(messaging, {
        vapidKey: "BNeMPLurAI3ZFjLPT_Q5oTkq2txZdb_bEzzKQQnbdJZbKxDXNX8EVAe3DQiP0hDHH3Ajb76oSbfI7upGHM1-kDk",
        serviceWorkerRegistration: swReg
      });
      console.log('📱 通知トークン:', token);
    } else {
      console.warn('🚫 通知が拒否されました。');
    }
  } catch (error) {
    console.error('通知トークン取得に失敗:', error);
  }
}

requestPermissionAndToken();

onMessage(messaging, (payload) => {
  console.log('🔔 通知受信:', payload);
  alert(📢 ${payload.notification.title}\n${payload.notification.body});
});
