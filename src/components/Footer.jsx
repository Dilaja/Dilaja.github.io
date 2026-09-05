import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Dilip Ajantha. All rights reserved.</p>
    </footer>
  );
}