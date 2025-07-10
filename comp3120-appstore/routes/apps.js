const express = require('express');
const router = express.Router();
const App = require('../models/apps');

router.get('/api/apps', async (req, res) => {
    try {
        const apps = await App.find({});
        res.json(apps);
    } catch (error) {
        console.error('Error fetching apps:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/api/apps/:id', (req, res) => {
    App.findById(req.params.id).then(apps => {
      response.json(apps)
    })
  })

module.exports = router;