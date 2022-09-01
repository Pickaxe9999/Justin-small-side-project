const router = require('express').Router();
const {promises : fs} = require('fs');
const imageDir = './public/images';

//retrive string array of all images ex: [layer1.jpeg, layer2.jpeg, layer3.jpeg]
const getImages = async (imageDir) => {
    const images = await fs.readdir(imageDir);
    return images;
}

//create api route to send img name info
router.get('/', async (req, res) => {
    const images = await getImages(imageDir);
    res.json(images);
})

module.exports = router;