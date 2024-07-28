"use client";

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import axios from '@/utils/axiosInstance';
import CodeSnippet from '@/components/CodeSnippet';
import NewSnippetModal from '@/components/NewSnippetModal';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [snippets, setSnippets] = useState([]) as any;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getInitials = (name: string) => {
    if (!name) return "";
    const [firstName, lastName] = name.split(" ");
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const { data } = await axios.get('/snippets');
        setSnippets(data);
      } catch (error) {
        console.error("Error fetching snippets:", error);
      }
    };
    fetchSnippets();
  }, []);

  const handleSignOut = () => {
    signOut();
  };

  const handleSnippetCreated = (snippet: any) => {
    setSnippets([...snippets, snippet]);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span>{getInitials(user.name)}</span>
          <button onClick={handleSignOut} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">
            Sign Out
          </button>
        </div>
      </header>
      <main className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Code Snippets</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            New Snippet
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {snippets.length === 0 ? (
            <h1>No Snippets yet</h1>
          ) : (
            snippets.map((snippet: any) => <CodeSnippet key={snippet._id} snippet={snippet} />)
          )}
        </div>
      </main>
      <NewSnippetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSnippetCreated={handleSnippetCreated}
      />
    </div>
  );
};

export default Dashboard;
