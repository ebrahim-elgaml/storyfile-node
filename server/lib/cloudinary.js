const cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const upload = file => {
	return new Promise((resolve, reject) => {
		cloudinary.v2.uploader.upload(file, { resource_type: "video" },
	        (error, result) => {
	        	if(error) reject(error);
	        	resolve(result);
	        }
	    );

	});
}

const uploaBackGround = file => {
	cloudinary.v2.uploader.upload(file, { resource_type: "video" },
        (error, result) => {
        	if(error) console.log(error);
        	console.log(result);
        }
    );
}
module.exports = {
	upload,
	uploaBackGround
};