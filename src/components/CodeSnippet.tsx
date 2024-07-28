import React from 'react';

interface CodeSnippetProps {
  snippet: {
    _id: string;
    title: string;
    code: string;
    language: string;
    tags: string[];
  };
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ snippet }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{snippet.title}</h3>
      <pre className="bg-gray-100 p-2 rounded-md overflow-auto">
        <code>{snippet.code}</code>
      </pre>
      <p className="text-sm text-gray-600 mt-2">{snippet.language}</p>
      <div className="mt-2">
        {snippet.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CodeSnippet;
