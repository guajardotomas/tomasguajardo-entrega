export default function Contact(){
    return (
        <>
        <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif] py-40">
            <h1 className="text-3xl text-gray-800 font-extrabold text-center">Contact us</h1>
            <form className="mt-8 space-y-4">
                <input type='text' placeholder='Name'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-gray-800" />
                <input type='email' placeholder='Email'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-gray-800" />
                <input type='text' placeholder='Subject'
                    className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-gray-800" />
                <textarea placeholder='Message' rows="6"
                    className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-gray-800"></textarea>
                <button type='button'
                    className="text-white bg-black hover:bg-slate-700 tracking-wide rounded-md text-sm px-4 py-3 w-full">Enviar</button>
            </form>
        </div>
        </>
    )
}