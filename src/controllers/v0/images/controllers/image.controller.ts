import { filterImageFromURL, deleteLocalFiles } from "../../../../util/util";
import { Request, Response } from "express";

export const getFilteredImage = async (req: Request, res: Response) => {
    const {image_url} = req.query;

    if (image_url) {
        try {
            const filteredImage: string = await filterImageFromURL(image_url);
            const imageArray: Array<string> = [];
            console.log("Filtered image:", filteredImage)

            imageArray.push(filteredImage);

            res.sendFile(filteredImage);
            res.on("done", () => {
                deleteLocalFiles(imageArray);
            });
        }
        catch (err) {
            return res.status(500)
                    .send("Error while processing image, verify URL");
        }
    }
        else {
            return res.status(422)
                    .send("Enter a valid URL");
        
        }
};
