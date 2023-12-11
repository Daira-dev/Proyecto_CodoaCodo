import multer from 'multer'
<<<<<<< HEAD
import{resolve} from 'path'
=======
import {resolve} from 'path'
>>>>>>> main

const destination=(req,file,cb)=>{
  
    file.mimetype === 'image/jpeg'

    ?cb(null,resolve()+'/public/Assets/image_form')

    :cb( new Error('Formato de imagen invalido'))

}

const filename= (req,file,cb)=>{

    const time = new Date().toString()
    .replace ( / /g, '_')
    .replace(/:/g, '-')
    .slice(0,33)
    cb (null, time + '_'+file.originalname)
}
const config={destination,filename}

const storage = multer.diskStorage(config)

<<<<<<< HEAD
export const uploadMiddleware= multer({storage})




=======
export const uploadMiddleware= multer({storage})
>>>>>>> main
