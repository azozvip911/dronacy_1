/*
 * Security contexts
 */

/*
 * Service settings
 */

/*
 * Services
 */

var CameraService = new Apperyio.CameraService({
    'defaultRequest': {
        "data": {
            "quality": 80,
            "destinationType": "Data URL",
            "sourceType": "Camera",
            "allowEdit": true,
            "encodingType": "JPEG",
            "targetWidth": 1024,
            "targetHeight": 768
        }
    }
});