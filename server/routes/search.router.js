const express = require('express');
const {default: axios} = require('axios');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('hit server', req.query.search);
    axios.get(`http://openlibrary.org/search.json?q=${req.query.search}`)
        .then((response)=>{
            console.log('sending back:', response.data.docs)
            res.send(response.data.docs);
        })
        .catch((error)=>{
            console.log('error getting trending', error);
            res.sendStatus(500);
        })
})

module.exports = router;
