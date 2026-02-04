import express from 'express';
import multer from 'multer';
import fs from 'fs';
import supabase from '../config/supabase.js'; // Add .js extension

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/login', (req, res) => {
    res.send("user router is running!");
});

router.get('/upload',(req,res)=>{
    res.render('upload')
})

// POST route to handle file upload
router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded');
        }

        const buffer = fs.readFileSync(file.path);

        const { error } = await supabase.storage
            .from('drive')
            .upload(
                `files/${Date.now()}-${file.originalname}`,
                buffer,
                { contentType: file.mimetype }
            );

        fs.unlinkSync(file.path); // remove temp file

        if (error) {
            console.error('Upload error:', error);
            return res.status(500).send(error.message);
        }

        // ✅ This should render the thank you page
        // res.send('✔️ File uploaded Successfully'); // Make sure thankyou.ejs exists in views folder
        res.render('thankyou'); // Make sure thankyou.ejs exists in views folder
        // res.redirect('/user/thankyou');
        
    } catch (error) {
        console.error('Server error:', error);
        res.status(400).send('Upload failed');
    }
});

router.get('/thankyou', (req, res) => {
    res.render('thankyou');
})

export default router;