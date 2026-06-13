import React from 'react';

function Footer() {
  return (
    <footer className="pb-8 pt-4 flex justify-center w-full text-xs text-zinc-400 dark:text-zinc-650">
      <span>© {new Date().getFullYear()} Johann. All rights reserved.</span>
    </footer>
  );
}

export default Footer;
