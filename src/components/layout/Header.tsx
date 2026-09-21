import React from 'react';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenQuoteModal }) => {
  return (
    <header id="masthead">
      <TopBar />
      <Navbar 
        currentPage={currentPage} 
        onNavigate={onNavigate} 
        onOpenQuoteModal={onOpenQuoteModal} 
      />
    </header>
  );
};
