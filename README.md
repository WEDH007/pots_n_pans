# Let's Cook

<img width="1294" alt="Untitled" src="https://github.com/ghubnerr/pots_n_pans/assets/144561702/c9acc9d9-0100-4b78-958b-9a0fcb5dc837">

Let's Cook is a website that offers an effortless way for users to minimize food waste. Through Let's Cook, users have the ability to upload a photo of the contents of their refrigerator. The website then provides viable recipes using the ingredients present in their fridge.

## What's next for Let's Cook? 

We hope to promote our website with the intention of adding more users to our system. In the future, we would like to Incorporate a social element where users can share their own recipes, tips, and sustainability hacks on our website. Another suggestion we have for our website is providing the nutritional details for each recipe suggestion, helping users make healthier choices while creating a healthier planet.

## How we built it?
The backend uses a microservices and serverless architecture approach. It is packaged in a Docker container and deployed on RunPod. Some microservices include Ultralytic’s YOLOv8 object detection model and a recipe finder module. The orchestration of these microservices are controlled through a single serverless function which determines the exposed parameters.
The frontend is built using Next.js, leverages Tailwind CSS for efficient styling, and uses TypeScript for improved code quality. This interfaces with the backend through an API call, passing it a base64 image and getting a list of possible recipes which are then displayed for the user to browse through.

## Challenges we ran into
The 3 main challenges we faced were getting an accurate object detection model, acquiring suitable web-scraped ingredients to recipe data, and obtaining relevant images for the suggested recipes. Each of these were difficult to tackle alone and in a short period of time. We were able to work together to come up with satisfactory solutions for the model and web-scraped data, but had trouble solving the image recipe suggestions. 

## What we learned
On the back end, gaining a better understanding of how components interface in a web-app
On the front end, we learned how to add more complex animations to our user designs to create a more enjoyable and engaging user experience. 

## How do I deploy this?
