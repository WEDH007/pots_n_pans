import { useState } from "react";
import NotLoading from "./NotLoading";
import Loading from "./Loading";
import RecipesData from "./RecipesData";
import FallingVeggies from "./FallingVeggies";

interface Recipes {
  delayTime: number;
  executionTime: number;
  id: string;
  output: string[];
  status: string;
}

const Upload = () => {
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDone, setIsLoadingDone] = useState(false);
  const [recipesData, setRecipesData] = useState<Recipes>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileUpload(selectedFile ?? null);
  };

  async function waitForResponse(apiCall: Promise<Recipes>) {
    const response = await apiCall;

    console.log(response);

    if (response.status === "IN_QUEUE") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return waitForResponse(apiCall);
    } else {
      return response;
    }
  }

  function uploadFile() {
    if (
      fileUpload &&
      fileUpload instanceof File &&
      fileUpload.type.startsWith("image/")
    ) {
      const reader = new FileReader();
      reader.onload = async function (event) {
        const base64Image = (event.target?.result as string).split(",")[1];
        console.log();
        if (base64Image) {
          const requestBody = {
            input: {
              img: base64Image,
              threshold: 0.3,
            },
          };
          console.log(base64Image);

          setIsLoading(true);

          const request = await fetch(
            "https://api.runpod.ai/v2/mi1w7cfskbr6up/runsync",
            {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_RUNPOD_API_KEY}`,
              },
            },
          );

          const data = (await request.json()) as Recipes;

          setIsLoading(false);
          setIsLoadingDone(true);
          setRecipesData(data);
        }
      };
      reader.readAsDataURL(fileUpload);
    }
  }

  return (
    <>
      {!isLoadingDone ? (
        isLoading ? (
          <Loading />
        ) : (
          <div>
            <NotLoading
              handleFileUpload={uploadFile}
              handleFileChange={handleFileChange}
            />
          </div>
        )
      ) : (
        <h1>{JSON.stringify(recipesData)}</h1>
      )}
    </>
  );
};
export default Upload;
