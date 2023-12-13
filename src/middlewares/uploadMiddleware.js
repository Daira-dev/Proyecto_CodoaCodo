import multer from "multer"
import{resolve} from 'path'

const destination= (req, file, cb) => {
    

    (file.mimetype === 'image/jpeg')
    ?cb(null, resolve()+ '/public/assets/image_form' )
    :cb(new Error('Formato inválido'))
    

}

const filename = (req, file, cb)=>{

    const time = 
    new Date()
    .toString()
    .replace(/ /g,'-')
    .replace(/:/g,'_')
    .slice(0,33)

     
    cb(null, time + '_' + file.originalname)

}
const config = {destination, filename}

const storage = multer.diskStorage(config)



export const uploadMiddleware = multer({storage})



