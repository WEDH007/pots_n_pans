# [Let's Cook](https://pots-n-pans.vercel.app/)! (View on [Devpost](https://devpost.com/software/let-s-cook-41wpbt))

Let's Cook! is a website that offers an effortless way for users to minimize food waste. Through Let's Cook, users have the ability to upload a photo of the contents of their refrigerator. The website then provides viable recipes using the ingredients present in their fridge.

<img width="1294" alt="Untitled" src="https://github.com/ghubnerr/pots_n_pans/assets/144561702/c9acc9d9-0100-4b78-958b-9a0fcb5dc837">

## How we built it?
The backend uses a microservices and serverless architecture approach. It is packaged in a Docker container and deployed on RunPod. Some microservices include Ultralytic’s YOLOv8 object detection model and a recipe finder module. The orchestration of these microservices are controlled through a single serverless function which determines the exposed parameters.
The frontend is built using Next.js, leverages Tailwind CSS for efficient styling, and uses TypeScript for improved code quality. This interfaces with the backend through an API call, passing it a base64 image and getting a list of possible recipes which are then displayed for the user to browse through.

<img width="1191" alt="Screenshot 2023-10-15 at 5 02 22 AM" src="https://github.com/ghubnerr/pots_n_pans/assets/144561702/13c3377a-c22c-4e21-95da-204e69a88d2b">

## What's next for Let's Cook? 
We hope to promote our website with the intention of adding more users to our system. In the future, we would like to Incorporate a social element where users can share their own recipes, tips, and sustainability hacks on our website. Another suggestion we have for our website is providing the nutritional details for each recipe suggestion, helping users make healthier choices while creating a healthier planet.


## Interested in testing?
- In a terminal, run `git clone https://github.com/ghubnerr/pots_n_pans.git`
- Navigate to the repo `cd pots_n_pans/`
- run `npm run dev`
- Open a browser and navigate to `localhost:3000` to play around with our web app
- NOTE: You will need an API key to fetch data from our backend. Reach out to us if you're interested!

## Our Model API: 
```https://github.com/Acty101/hackgtX-pots-and-pans```

You can find info on our backend scripts for the Computer Vision model in [this](https://github.com/Acty101/hackgtX-pots-and-pans) repository
