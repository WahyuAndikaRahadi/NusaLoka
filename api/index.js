import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';
import { VercelRequest, VercelResponse } from '@vercel/node';

// Load environment variables from .env file if not in production
// Vercel handles this automatically via its environment variables
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const { Pool } = pg;
const app = express();

// Configure PostgreSQL connection using environment variable for security
// It's highly recommended to use Vercel's environment variables for this.
const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_T5eti2yERPnK@ep-plain-block-adunlwuy-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require",
  ssl: {
    rejectUnauthorized: false
  }
});

// Middleware
app.use(cors({
  origin: '*', // Set to a specific domain in production for security
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Routes
// Route for getting all posts
app.get('/posts', async (req, res) => {
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
app.post('/posts', async (req, res) => {
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
app.post('/posts/:postId/like', async (req, res) => {
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
app.get('/comments', async (req, res) => {
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
app.post('/posts/:postId/comments', async (req, res) => {
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

// Export the Express app as a serverless function
export default app;
