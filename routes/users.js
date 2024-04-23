const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user list');
});

router.get('/new', (req, res) => {
    res.send('user new form');
});

router.route('/:id')
    .get((req, res) => {
        console.log(req.user);
        res.send(`get user with id: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`update user with id: ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`delete user with id: ${req.params.id}`);
    });

const users = [{name: 'foo'}, {name: 'bar'}];
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    console.log(id);
    next();
});

module.exports = router;