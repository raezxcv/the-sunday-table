import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { KitchenProvider } from './context/KitchenContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './pages/RecipeDetail';
import { Stories } from './pages/Stories';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <KitchenProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:slug" element={<RecipeDetail />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </KitchenProvider>
    </BrowserRouter>
  );
};

export default App;

