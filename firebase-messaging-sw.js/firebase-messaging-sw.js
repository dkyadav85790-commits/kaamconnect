
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAI12c7tYITeTK3jZPfvPy5YYawLMRuWw4",
  authDomain: "kaamconnect-51783.firebaseapp.com",
  projectId: "kaamconnect-51783",
  storageBucket: "kaamconnect-51783.firebasestorage.app",
  messagingSenderId: "333609478290",
  appId: "1:333609478290:web:f57fe6a75a536e26c85e4b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Kaamconnect";

  self.registration.showNotification(title, {
    body: payload.notification?.body || "आपके लिए नया अपडेट है।",
    icon: "/favicon.ico"
  });
});
