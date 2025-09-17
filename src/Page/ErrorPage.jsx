import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router";

export default function ErrorPage(){
    return (
        <>
        <Link to='/' className="text-2xl font-bold hover:underline flex gap-2.5 m-3.5 items-center"><FaArrowAltCircleLeft/> Back to Home</Link>
        <main className="h-[88vh] w-full flex justify-center items-center">
            <section>
                <h1 className="text-4xl font-bold text-center">404 Not Found</h1>
                <p className="text-xl">OPPS! This path is not exist in this application</p>
            </section>
        </main>
        </>
    )
}