// src/components/LoginButton.jsx
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../../firebase';

const LoginButton = () => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User info:", user);
      // Sau khi login thành công, bạn có thể redirect hoặc lưu thông tin user
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <button onClick={handleLogin} style={{ padding: '10px 20px', background: '#4285F4', color: 'white', border: 'none', borderRadius: '5px' }}>
      Đăng nhập với Google
    </button>
  );
};

export default LoginButton;
