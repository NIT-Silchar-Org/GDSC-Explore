export default function Faq() {
    return(
        <>
            <div className="flex justify-center w-full">
                <div className="sm:px-6 flex flex-col sm:w-[80%] sm:py-14 w-full px-0 py-9 justify-center">
                    <h1 className="text-start text-[2rem] md:text-[48px] text-[#373F41] mb-5 text-center">FAQ</h1>
                    <div className="space-y-2 cursor-pointer">
                        <div className="m=0 p-5 bg-[#f3f3f3] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-normal text-[#737B7D] hover:text-gray-800 hover:font-normal">Do I have to pay to take part in GDSC Explore?</summary>
                                <p className="pt-2 font-normal text-[#737B7D]">No. All the events organized by GDSC Explore are free to participate in. So hop in.</p>
                            </details>
                        </div>
                        <div className="m=0 p-5 bg-[#F3F3F3] sm:rounded-lg rounded-none">
                            <details>
                                <summary className="flex justify-between text-summary font-normal text-[#737B7D] hover:text-gray-800 hover:font-normal">Do I have to register for each event individually?</summary>
                                <p className="pt-2 font-normal text-[#737B7D]">Yes. Interested students need to register for each event individually from the event cards to account for their presence by the platform.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}