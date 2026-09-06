import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="bg-[#121212] border-t border-[#2c2c2c] py-8 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Dilip Ajantha. {t?.allRightsReserved || "All rights reserved."}</p>
    </footer>
  );
}