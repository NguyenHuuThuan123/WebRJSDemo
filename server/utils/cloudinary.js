const cloudinary = require("cloudinary");


// Configuration 
cloudinary.config({
    cloud_name: "ddhskzbh6",
    api_key: "588254457391579",
    api_secret: "idyvVr6jThSeAlNEAnR0GfhirHA"
  });
  

// Upload
const uploadImage = async (fileToUploads) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploads, (result) => {
            resolve({
                url: result.secure_url,
                asset_id: result.asset_id,
                public_id: result.public_id,
            },
                {
                    resource_type: "auto"
                }
            );
        })
    })
}

//delete
const deleteImg = async (fileToDelete) => {
    return new Promise((resolve) => {
        cloudinary.uploader.destroy(fileToDelete, (result) => {
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id,
                },
                {
                    resource_type: "auto",
                }
            );
        });
    });
};

module.exports = { uploadImage, deleteImg };