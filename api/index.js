import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file if not in production
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const { Pool } = pg;
const app = express();

// Configure PostgreSQL connection using Neon DB connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false
});

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Ganti dengan URL frontend Anda jika berbeda
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Route for getting all posts
app.get('/api/posts', async (req, res) => {
  console.log("Fetching all posts...");
  try {
    const result = await pool.query('SELECT * FROM blog_posts ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Route for adding a new post
app.post('/api/posts', async (req, res) => {
  const { title, excerpt, content, author, category, image, tags } = req.body;
  if (!title || !excerpt || !content || !author || !category || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO blog_posts (title, excerpt, content, author, date, category, image, tags) VALUES ($1, $2, $3, $4, NOW(), $5, $6, $7) RETURNING *',
      [title, excerpt, content, author, category, image, tags]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding post:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Route for liking a post
app.post('/api/posts/:postId/like', async (req, res) => {
  const { postId } = req.params;
  console.log(`Received like request for postId: ${postId}`);
  try {
    const result = await pool.query(
      'UPDATE blog_posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
      [postId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error liking post:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Route for getting all comments
app.get('/api/comments', async (req, res) => {
  console.log("Fetching all comments...");
  try {
    const result = await pool.query('SELECT * FROM blog_comments ORDER BY created_at ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching comments:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// Route for adding a new comment to a post
app.post('/api/posts/:postId/comments', async (req, res) => {
  const { postId } = req.params;
  const { commenter_name, comment_text } = req.body;
  if (!commenter_name || !comment_text) {
    return res.status(400).json({ error: 'Commenter name and comment text are required' });
  }
  try {
    const result = await pool.query(
      'INSERT INTO blog_comments (post_id, commenter_name, comment_text, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
      [postId, commenter_name, comment_text]
    );
    // Update comment count in blog_posts
    await pool.query(
      'UPDATE blog_posts SET comments = comments + 1 WHERE id = $1',
      [postId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding comment:', err);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
});

// 404 Handler
app.use((req, res) => {
  console.warn(`404 Not Found: ${req.method} ${req.url}`);
  res.status(404).send('404: Not Found');
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).send('500: Internal Server Error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
