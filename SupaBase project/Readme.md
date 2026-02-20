import app from '../app.js'

export default app
 => {
  app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API' })
  })

  app.get('/api/health', (req, res) => {
    res.json({ message: 'API is healthy' })
  })
}