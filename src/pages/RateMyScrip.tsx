import { useState } from 'react';

const initialPosts = [
  { id: 1, user: 'Genvest User 1', avatarColor: '#007bff', text: 'This is an example discussion post. You can write about market trends, investment strategies, or ask for advice here!', liked: false },
  { id: 2, user: 'Genvest User 2', avatarColor: '#ff6600', text: 'Looking for insights on long-term retirement planning. Any tips or resources from the community would be greatly appreciated!', liked: false },
  { id: 3, user: 'Genvest User 3', avatarColor: '#28a745', text: 'What are your thoughts on the recent changes in the stock market? Is it a good time to consider diversifying portfolios?', liked: false },
  { id: 4, user: 'Genvest User 4', avatarColor: '#cccccc', text: 'Empty discussion post. Ready for your thoughts!', liked: false },
];

export default function RateMyScrip() {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id: number) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)));
  };

  return (
    <>
      <section id="discussion-board" style={{ padding: '60px 0', backgroundColor: '#f0f2f5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2.5em', color: '#333', marginBottom: 20, fontWeight: 'bold', textAlign: 'center' }}>Community Discussions</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1em', color: '#555', lineHeight: 1.6, maxWidth: 700, margin: '0 auto 40px' }}>
            Share your thoughts, ask questions, and engage with the Genvest community on various financial topics.
          </p>

          {posts.map((post) => (
            <div key={post.id} style={{
              backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginBottom: 20, padding: 20, display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', marginRight: 10,
                  backgroundColor: post.avatarColor, color: '#fff', display: 'flex',
                  justifyContent: 'center', alignItems: 'center', fontSize: '1.2em', fontWeight: 'bold',
                }}>
                  {post.user.split(' ').pop()?.slice(0, 2).toUpperCase()}
                </div>
                <span style={{ fontWeight: 'bold', color: '#333', fontSize: '1.1em' }}>{post.user}</span>
              </div>
              <div style={{ color: '#333', lineHeight: 1.6, margin: '0 0 15px 0' }}>
                <p style={{ margin: 0, color: '#333' }}>{post.text}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 10, borderTop: '1px solid #eee' }}>
                <button
                  onClick={() => toggleLike(post.id)}
                  style={{
                    backgroundColor: post.liked ? '#007bff' : '#e0e0e0',
                    color: post.liked ? '#fff' : '#555',
                    border: 'none', padding: '8px 15px', borderRadius: 5, cursor: 'pointer',
                    fontSize: '0.95em', display: 'flex', alignItems: 'center', gap: 5,
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                >
                  <i className="fas fa-thumbs-up" style={{ marginRight: 5 }}></i>
                  {post.liked ? 'Liked!' : 'Rate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
