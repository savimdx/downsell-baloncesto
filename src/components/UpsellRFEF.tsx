import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Check, 
  Sparkles, 
  Clock, 
  Lock, 
  Shield, 
  Zap, 
  Activity, 
  Trophy, 
  Dumbbell, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

import ebookMockupImg from '../assets/images/basketball_ebook_mockup_1784727049246.jpg';
import trainingActionImg from '../assets/images/basketball_training_action_1784727063913.jpg';

interface UpsellRFEFProps {
  onAccept: () => void;
  onDecline: () => void;
}

declare global {
  interface Window {
    checkoutElements?: any;
  }
}

export default function UpsellRFEF({ onAccept, onDecline }: UpsellRFEFProps) {
  const [secondsLeft, setSecondsLeft] = useState(1800); // 30:00 countdown timer
  const [activeTab, setActiveTab] = useState(0);

  // Hotmart Sales Funnel Widget script loader
  useEffect(() => {
    const scriptId = 'hotmart-checkout-elements-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initHotmartWidget = () => {
      if (window.checkoutElements) {
        try {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        } catch (e) {
          console.error('Error mounting Hotmart sales funnel:', e);
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
      script.async = true;
      script.onload = () => {
        initHotmartWidget();
      };
      document.body.appendChild(script);
    } else {
      initHotmartWidget();
    }
  }, []);

  // Countdown Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 1800;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const scrollToCheckout = () => {
    const checkoutElem = document.getElementById('oferta-final');
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const transformationPillars = [
    {
      title: "Velocidad y Agilidad",
      desc: "Ejercicios de pies y cambios de dirección para superar a la defensa y recuperar rápido en transición."
    },
    {
      title: "Fuerza y Potencia Explosiva",
      desc: "Rutinas específicas de tren inferior y superior para ganar contactos en la pintura y mejorar el salto vertical."
    },
    {
      title: "Resistencia Específica",
      desc: "Capacidad para mantener la intensidad defensiva y el porcentaje de tiro en el cuarto periodo."
    },
    {
      title: "Prevención de Lesiones",
      desc: "Trabajo de estabilidad articular y movilidad adaptada a las exigencias del baloncesto moderno."
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-blue-600 selection:text-white font-sans pb-20">
      
      {/* Background Basketball Court Line Patterns */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      {/* Modern Blue & Golden Ambient Glow Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* ================= 1. BARRA SUPERIOR DE URGENCIA ================= */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-red-500 to-amber-600 text-white py-2.5 px-4 shadow-[0_4px_25px_rgba(239,68,68,0.3)] flex items-center justify-center gap-2 sm:gap-4 border-b border-white/10">
        <span className="text-base sm:text-lg animate-pulse">🔥</span>
        <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase font-sans">
          ¡OFERTA ESPECIAL DISPONIBLE AHORA!
        </span>
        <div className="flex items-center gap-1.5 bg-black/25 border border-white/20 rounded-xl px-2.5 py-1 text-xs sm:text-sm font-black text-amber-300 font-mono shadow-inner">
          <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
          <span>{formatTimer(secondsLeft)}</span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 space-y-12 sm:space-y-16 relative z-10">
        
        {/* Step Progress Indicator Bar */}
        <div className="bg-slate-900/80 border border-blue-500/30 py-3 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left rounded-2xl max-w-3xl mx-auto shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-black text-slate-200 tracking-wider uppercase">
              PASO 2 DE 3: <span className="text-amber-400 font-black">¡FALTA POCO PARA FINALIZAR!</span> TU PEDIDO PRINCIPAL YA ESTÁ RESERVADO
            </span>
          </div>
          <div className="flex items-center gap-2.5 w-full md:w-auto min-w-[180px]">
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-white/10">
              <div className="bg-gradient-to-r from-blue-500 via-cyan-400 to-amber-400 h-full rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]" style={{ width: '85%' }}></div>
            </div>
            <span className="text-[10px] font-mono font-black text-amber-400 shrink-0">85% COMPLETADO</span>
          </div>
        </div>

        {/* ================= 2. HERO PRINCIPAL ================= */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-xs font-bold font-mono uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>METODOLOGÍA FÍSICA PARA BALONCESTO</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white uppercase">
            MEJORA EL RENDIMIENTO FÍSICO DE TUS JUGADORES DE BALONCESTO
          </h1>

          <div className="py-1">
            <h2 className="text-lg sm:text-2xl font-bold text-amber-400 uppercase tracking-wide">
              Preparación Física Completa para el Baloncesto
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Accede a una metodología práctica para desarrollar fuerza, velocidad, resistencia, agilidad, potencia y condición física específica para el baloncesto.
          </p>


        </div>

        {/* ================= 3. PRESENTACIÓN DEL PRODUCTO ================= */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden space-y-8">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">SISTEMA COMPLETO Y PRÁCTICO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight">
              TODO LO QUE NECESITAS PARA UNA PREPARACIÓN FÍSICA MÁS COMPLETA
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Product Mockup Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
              <div className="relative group w-full max-w-full rounded-2xl bg-slate-950 p-2 border border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-amber-400/50">
                <img 
                  src="https://i.postimg.cc/5yhDtSc7/Chat-GPT-Image-19-de-jul-de-2026-01-43-27.png" 
                  alt="Preparación Física Completa para el Baloncesto" 
                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[11px] text-slate-400 font-mono text-center">
                📘 Manual Digital de Acceso Inmediato
              </span>
            </div>

            {/* Benefits Bullet List Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Ejercicios de preparación física",
                  "Desarrollo de fuerza y potencia",
                  "Velocidad y agilidad",
                  "Resistencia específica para el baloncesto",
                  "Mejor condición física para el juego",
                  "Ejercicios prácticos y progresivos"
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 bg-slate-950/80 border border-slate-800 hover:border-blue-500/40 p-4 rounded-xl transition-all"
                  >
                    <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= 4. BENEFICIOS PRINCIPALES ================= */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block">BENEFICIOS CLAVE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase">BENEFICIOS PRINCIPALES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">1. MÁS VELOCIDAD</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mejora la rapidez y la capacidad de reacción en la cancha.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Dumbbell className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">2. MÁS FUERZA Y POTENCIA</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Desarrolla capacidades físicas esenciales para el rendimiento.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">3. MÁS RESISTENCIA</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ayuda a mantener un alto nivel de rendimiento durante el partido.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 p-6 rounded-2xl space-y-3 transition-all group relative overflow-hidden">
              <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="font-extrabold text-white text-base uppercase tracking-tight">4. MEJOR RENDIMIENTO</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prepara a tus jugadores para responder mejor a las exigencias del baloncesto.
              </p>
            </div>

          </div>
        </div>

        {/* ================= 5. SECCIÓN DE RESULTADOS / TRANSFORMACIÓN ================= */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 backdrop-blur-md">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">METODOLOGÍA DE CAMPO</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase leading-tight">
              LLEVA EL RENDIMIENTO FÍSICO DE TU EQUIPO AL SIGUIENTE NIVEL
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Una preparación física bien estructurada puede marcar la diferencia en la velocidad, resistencia, potencia y rendimiento de tus jugadores.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Action Image */}
            <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-blue-500/20 shadow-2xl group">
              <img 
                src={trainingActionImg} 
                alt="Entrenador y jugadores de baloncesto realizando ejercicios de preparación física" 
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-[1.03] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>

            {/* Interactive Pillar Highlights */}
            <div className="lg:col-span-6 space-y-3">
              {transformationPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    activeTab === idx 
                      ? 'bg-blue-950/60 border-blue-500/60 shadow-lg' 
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-white flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                      <span>{pillar.title}</span>
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ================= 6. GARANTÍA ================= */}
        <div className="bg-gradient-to-br from-blue-950/50 via-slate-900/80 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="h-20 w-20 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
            <Shield className="h-10 w-10 stroke-[1.75]" />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                🛡️ GARANTÍA DE SATISFACCIÓN
              </span>
            </div>
            <h3 className="text-xl font-black text-white uppercase">
              7 DÍAS DE GARANTÍA
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Prueba el contenido y descubre cómo puede ayudarte en la preparación física de tus jugadores. Si no estás satisfecho, podrás solicitar tu garantía dentro del plazo establecido.
            </p>
          </div>
        </div>

        {/* ================= 7. OFERTA FINAL / CHECKOUT ================= */}
        <div id="oferta-final" className="bg-gradient-to-b from-slate-900 via-blue-950/80 to-slate-950 border-2 border-amber-400 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(37,99,235,0.25)] space-y-6 max-w-3xl mx-auto">
          
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest animate-pulse mx-auto">
              ⚡ OFERTA EXCLUSIVA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase leading-tight">
              MEJORA LA PREPARACIÓN FÍSICA DE TU EQUIPO HOY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Accede ahora a Preparación Física Completa para el Baloncesto y lleva a tus entrenamientos una metodología práctica para desarrollar las capacidades físicas que tus jugadores necesitan.
            </p>
          </div>

          {/* Price Callout */}
          <div className="py-5 border-y border-white/10 max-w-md mx-auto space-y-2">
            <span className="text-xs text-slate-400 uppercase font-mono tracking-widest block">
              PRECIO ESPECIAL POR TIEMPO LIMITADO
            </span>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl sm:text-7xl font-black text-amber-400 font-mono tracking-tight drop-shadow-md">
                $5.90
              </span>
              <span className="text-xl font-bold text-amber-400 font-mono">
                USD
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium">
              (Pago único • Sin suscripciones • Acceso de por vida)
            </p>
          </div>

          {/* HOTMART - Sales Funnel Widget */}
          <div id="hotmart-sales-funnel" className="my-4 min-h-[50px] flex flex-col justify-center items-center w-full text-center [&>iframe]:mx-auto [&>div]:mx-auto"></div>

          {/* Main CTA Block */}
          <div className="space-y-4 max-w-md mx-auto">
            {/* Micro indicators */}
            <div className="flex justify-center items-center gap-4 text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider pt-2">
              <span className="flex items-center gap-1">🔒 Pago seguro</span>
              <span className="flex items-center gap-1">⚡ Acceso inmediato</span>
              <span className="flex items-center gap-1">🛡️ Garantía de 7 días</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
