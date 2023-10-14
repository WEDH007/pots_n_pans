import { useState } from 'react';

const Upload = () => {
    const [fileUpload, setFileUpload] = useState<File | null>(null);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        setFileUpload(selectedFile ?? null);
    }


        const handleFileUpload = () => {
            if (fileUpload && fileUpload instanceof File && fileUpload.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const base64Image = (event.target?.result as string).split(',')[1];
                if (base64Image) {
                const requestBody = {
                    input: {
                    img: base64Image,
                    },
                };
                console.log(requestBody)
                fetch('https://api.runpod.ai/v2/mi1w7cfskbr6up/run', {
                    method: 'POST',
                    body: JSON.stringify(requestBody),
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_RUNPOD_API_KEY}`
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                    console.log(data);
                    // Handle response here
                    })
                    .catch((err) => {
                    console.error('Error while uploading image:', err);
                    // Handle the error or provide feedback to the user
                    });
                }
            };
            reader.readAsDataURL(fileUpload);
            }
        };
      
        
        return (
            <div className='flex gap-20'>
                <div className='flex flex-row justify-center delay-80 items-center rounded-full py-3 pl-10 pr-4 bg-red-100 hover:bg-green-300 drop-shadow-xl transition-colors duration-500'>
                    <input className="font-indie text-xl" type="file" accept="image/*" onChange={handleFileChange}/>
                </div>
                    <button className='delay-80 transition ease-in-out hover:-translate-y-2 font-bold font-indie border-black text-xl bg-green-300 px-7 py-3 rounded-full drop-shadow-xl ' onClick={handleFileUpload}>Find me Recipes!</button>
            </div>

        );
    }
    export default Upload;

