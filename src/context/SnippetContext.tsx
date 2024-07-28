// src/contexts/SnippetContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const SnippetContext = createContext<{ snippets: any[]; addSnippet: (snippet: any) => Promise<void> } | null>(null);

import { ReactNode } from 'react';

export const SnippetProvider = ({ children }: { children: ReactNode }) => {
  const [snippets, setSnippets] = useState<any[]>([]);

  useEffect(() => {
    const fetchSnippets = async () => {
      const response = await axios.get('/api/snippets');
      setSnippets(response.data);
    };
    fetchSnippets();
  }, []);

  const addSnippet = async (snippet: any) => {
    const response = await axios.post('/api/snippets', snippet);
    setSnippets([...snippets, response.data]);
  };

  return (
    <SnippetContext.Provider value={{ snippets, addSnippet }}>
      {children}
    </SnippetContext.Provider>
  );
};

export const useSnippets = () => useContext(SnippetContext);
