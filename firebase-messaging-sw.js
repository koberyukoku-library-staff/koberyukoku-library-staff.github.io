importScripts("https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCN0xbBPlPJM1szoOik6yMFgkiNRy_QhZY",
  authDomain: "koberyukoku-library-staff.firebaseapp.com",
  projectId: "koberyukoku-library-staff",
  messagingSenderId: "138126502371",
  appId: "1:138126502371:web:1c0663c28861de6a87d8d6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.jpeg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
