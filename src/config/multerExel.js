const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname,'..','..','tmp','uploads'),
    storage: multer.diskStorage({
        destination: (res,file,cb) =>{
            cb(null, path.resolve(__dirname,'..','..','tmp','uploads'));
        },
        filename: (res,file,cb) => {
            crypto.randomBytes(1,(err,hash) => {
                if(err) cb(err);
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            });
        },

    }),
    limits:{
        fileSize: 5* 1024 *1024,
    },
    fileFilter: (res,file,cb) =>{
        const allwedMimes = [
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',,
            'application/vnd.ms-excel',
            
        ];
        
        if (allwedMimes.includes(file.mimetype)){
            cb(null,true);
        } else{
            
            cb(null,false);
        }

    }
}