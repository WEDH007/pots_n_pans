import { useState, useEffect } from "react";

const Upload = () => {
  const [fileUpload, setFileUpload] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileUpload(selectedFile ?? null);
  };

  interface ApiResponse {
    status: string;
  }

  async function waitForResponse(apiCall: Promise<ApiResponse>) {
    const response = await apiCall;

    console.log(response);

    if (response.status === "IN_QUEUE") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return waitForResponse(apiCall);
    } else {
      return response;
    }
  }

  const handleFileUpload = () => {
    if (
      fileUpload &&
      fileUpload instanceof File &&
      fileUpload.type.startsWith("image/")
    ) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const base64Image = (event.target?.result as string).split(",")[1];
        console.log(base64Image);
        if (base64Image) {
          const requestBody = {
            input: {
              img: base64Image,
              threshold: 0.5,
            },
          };
          console.log(requestBody);
          return waitForResponse(
            fetch("https://api.runpod.ai/v2/mi1w7cfskbr6up/runsync", {
              method: "POST",
              body: JSON.stringify(requestBody),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_RUNPOD_API_KEY}`,
              },
            }).then((res: Response) => {
              return res.json() as Promise<ApiResponse>;
            }),
          ).then((data: ApiResponse) => {
            console.log(data);
          });
          //   fetch("https://api.runpod.ai/v2/mi1w7cfskbr6up/run", {
          //     method: "POST",
          //     body: JSON.stringify(requestBody),
          //     headers: {
          //       "Content-Type": "application/json",
          //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_RUNPOD_API_KEY}`,
          //     },
          //   })
          //     .then((res) => res.json())
          //     .then((data) => {
          //       console.log(data);
          //       // Handle response here
          //     })
          //     .catch((err) => {
          //       console.error("Error while uploading image:", err);
          //       // Handle the error or provide feedback to the user
          //     });
        }
      };
      reader.readAsDataURL(fileUpload);
    }
  };

  return (
    <div className="flex gap-20">
      <div className="delay-80 flex flex-row items-center justify-center rounded-full bg-red-100 py-3 pl-10 pr-4 drop-shadow-xl transition-colors duration-500 hover:bg-green-300">
        <input
          className="font-indie text-xl"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
      <button
        className="delay-80 rounded-full border-black bg-green-300 px-7 py-3 font-indie text-xl font-bold drop-shadow-xl transition ease-in-out hover:-translate-y-2 "
        onClick={handleFileUpload}
      >
        Find me Recipes!
      </button>
    </div>
  );
};
export default Upload;
