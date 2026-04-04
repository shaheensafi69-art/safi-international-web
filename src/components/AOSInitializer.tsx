'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // سرعت انیمیشن‌ها (۱ ثانیه)
      once: false,    // انیمیشن با هر بار اسکرول اجرا شود
    });
  }, []);
  return null;
}