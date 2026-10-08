import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Stadium Toggle Button */}
      <button
        type="button"
        id="theme-toggle-switch"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Click to switch to ${isDark ? 'light' : 'dark'} mode`}
        className={`relative w-[124px] h-[42px] p-[3.5px] rounded-full cursor-pointer transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 hover:scale-[1.03] active:scale-[0.97] ${
          isDark
            ? 'bg-[#282C34] border border-[#3A404D] shadow-[0_4px_16px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(0,0,0,0.3)]'
            : 'bg-[#ECEFF1] border border-[#DCE0E6] shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(0,0,0,0.06)]'
        }`}
      >
        {/* Soft Ambient Ground Shadow */}
        <div
          className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-1.5 rounded-full blur-[2px] transition-opacity duration-200 pointer-events-none ${
            isDark ? 'bg-black/35' : 'bg-slate-400/20'
          }`}
        />

        {/* Inner Content Area */}
        <div className="relative w-full h-full flex items-center justify-between">
          
          {/* Left Text: DARK MODE (visible when dark) */}
          <div
            className={`w-[74px] flex flex-col items-center justify-center transition-all duration-200 ease-out ${
              isDark
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none'
            }`}
          >
            <span className="text-[9px] font-extrabold tracking-[0.14em] uppercase text-[#7E8B9F] leading-[1.15] font-sans">
              DARK
            </span>
            <span className="text-[9px] font-extrabold tracking-[0.14em] uppercase text-[#7E8B9F] leading-[1.15] font-sans">
              MODE
            </span>
          </div>

          {/* Right Text: LIGHT MODE (visible when light) */}
          <div
            className={`w-[74px] flex flex-col items-center justify-center ml-auto transition-all duration-200 ease-out ${
              !isDark
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-2 pointer-events-none'
            }`}
          >
            <span className="text-[9px] font-extrabold tracking-[0.14em] uppercase text-[#94A0B2] leading-[1.15] font-sans">
              LIGHT
            </span>
            <span className="text-[9px] font-extrabold tracking-[0.14em] uppercase text-[#94A0B2] leading-[1.15] font-sans">
              MODE
            </span>
          </div>

          {/* Snappy Hardware-Accelerated Sliding Knob */}
          <div
            className={`absolute top-0 w-[35px] h-[35px] rounded-full bg-white flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.18)] will-change-transform ${
              isDark
                ? 'translate-x-[82px] border-[1.5px] border-[#22262E]'
                : 'translate-x-0 border-[1.5px] border-[#E2E6EB]'
            }`}
            style={{
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background-color 0.2s ease'
            }}
          >
            {/* Sun Icon (Light Mode) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out ${
                isDark
                  ? 'opacity-0 rotate-45 scale-75 pointer-events-none'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <svg
                className="w-[18px] h-[18px] text-[#9CA3AF]"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <line x1="12" y1="2.2" x2="12" y2="4.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="12" y1="19.2" x2="12" y2="21.8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="2.2" y1="12" x2="4.8" y2="12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="19.2" y1="12" x2="21.8" y2="12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="5.1" y1="5.1" x2="6.9" y2="6.9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="17.1" y1="17.1" x2="18.9" y2="18.9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="5.1" y1="18.9" x2="6.9" y2="17.1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <line x1="17.1" y1="6.9" x2="18.9" y2="5.1" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>

            {/* Moon with Stars Icon (Dark Mode) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ease-out ${
                isDark
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-45 scale-75 pointer-events-none'
              }`}
            >
              <svg
                className="w-[18px] h-[18px] text-[#8F9BB3]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Crescent Moon */}
                <path d="M11.5 5.2C8.2 5.6 5.6 8.5 5.6 12.1c0 3.9 3.1 7.1 7 7.1 3.2 0 6-2.1 6.8-5.2-.6.2-1.3.3-2 .3-3.6 0-6.6-2.9-6.6-6.6 0-1 .2-1.9.7-2.7z" />
                {/* Star 1 */}
                <path d="M19.2 5.5c-.1.8-.7 1.4-1.5 1.5.8.1 1.4.7 1.5 1.5.1-.8.7-1.4 1.5-1.5-.8-.1-1.4-.7-1.5-1.5z" />
                {/* Star 2 */}
                <path d="M16.2 3.2c-.08.6-.5.9-1.1 1 .6.08.9.5 1 1.1.08-.6.5-.9 1.1-1-.6-.08-.9-.5-1-1.1z" />
              </svg>
            </div>
          </div>

        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
