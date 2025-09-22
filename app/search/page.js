// app/search/page.js

import CustomHeader from '@/components/CustomHeader';
import content from '../../lib/contentIndex';
import Link from 'next/link';

async function SearchPage({ searchParams }) {
  const query = searchParams.q || '';
  const decodedQuery = decodeURIComponent(query);

  // Filter content based on the search query
  const results = decodedQuery
    ? content.filter(item =>
        item.title.toLowerCase().includes(decodedQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(decodedQuery.toLowerCase()) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(decodedQuery.toLowerCase()))
      )
    : [];

  return (
    <>
    <CustomHeader title="Search" />
    <div className="container mx-auto py-16 px-8">
      <h1 className="text-4xl font-bold text-white mb-8">
        Search Results for "{decodedQuery}"
      </h1>
      {results.length > 0 ? (
        <div className="space-y-6 mx-auto">
          {results.map(result => (
            <Link key={result.id} href={result.path}>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">{result.title}</h2>
                <p className="text-gray-300">{result.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-400">No results found for your query.</p>
      )}
    </div>
    </>
  );
}

export default SearchPage;