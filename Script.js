const { ocrSpace } = require("ocr-space-api-wrapper");

async function main() {
  try {
    const urls = [
      { type: "s", url: "https://i.ibb.co/jTKYQqP/Captcha-United.png" },
      { type: "n", url: "https://i.ibb.co/R4BB4DW/Captcha-Bajaj.jpg" },
      
    ];
    // loop over the array and call ocrSpace for each URL
    for (let url of urls) {

      // Here we are setting the value of engine because engine 1 works best when it comes to text and engine 5 works best when it comes 
      // to number recognition in image.
      let engine;
      if (url.type === "s") {
        engine = 1;
      } else if (url.type === "n") {
        engine = 5;
      }
  
      const res1 = await ocrSpace(url.url, {
        apikey: "4b6c5028cd88957", //ddec64892588957
        language: "eng",
        isOverlayRequired: true,
        OCREngine: engine,
      });

      console.log(res1.ParsedResults[0].ParsedText);
    }
  } catch (error) {
    console.error(error);
  }
}

main();
