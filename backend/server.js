const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 5000;
const todoRoutes = require('./routes/todos');
const cors = require('cors');
const dbURI = 'mongodb://localhost:27017/MernTodoDB';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
