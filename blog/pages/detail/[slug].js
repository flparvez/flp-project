import { useRouter } from "next/router"
import { useEffect, useState } from "react";



function Slug() {
   


    const [Blog, setBlog] = useState();

    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://127.0.0.1:8000/api/blogsD/?slug=${slug}`).then((a) => {
            return a.json();
        })
            .then((parsed) => {
                setBlog(parsed)
            })
    }, [router.isReady])
    return (
        <div>
       
        {Blog && Blog.map((data)=> (


            <div key={data.id} className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          
                <div className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                
                                <div>
                                
                                    <p className="text-base font-light text-black ">Author Name : {data.name}</p>
                                    <p className="text-base font-light text-black ">{ data.created_at }</p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{data.title}</h1>
                    </header>
                   <p>{data.content}</p>
                    <figure><img src={data.image} alt=""/>
                        <figcaption>Digital art by Anonymous</figcaption>
                    </figure>
                </div>
                 </div>
                 </div>
        ))  }
               
        </div>
    )
}



export default Slug
