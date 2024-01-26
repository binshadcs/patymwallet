export function Dashboard() {
    return (
        <div className="prl-40">
            <div className="flex justify-between items-center p-2 bg-white border border-gray-200 shadow">
                <h1 className="font-bold">Payments App</h1>
                <div className="flex gap-4 items-center">
                    <h3>Hello, User</h3>
                    <div className="bg-gray-300 rounded-full w-10 h-10 pt-2 text-center">
                            <h3>U</h3>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <h2 className="font-bold">Your Balance $5000</h2>
                <h2 className="mt-5">Users</h2>
               <div className="border p-1 rounded-md mt-1">
                <input className="w-full outline-none" type="text" name="" placeholder="search for users..." id="" />
               </div>
            </div>
            <div>
                <div className="flex justify-between m-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-300 rounded-full w-10 h-10 pt-2 text-center">
                                        <h3>U</h3>
                            </div>
                            <h3>User</h3>
                        </div>
                        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="bg-gray-600 rounded-lg p-2 text-white">Send Money</button>
                        <div id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative p-4 w-full max-w-md max-h-full">
                                <div class="relative bg-white rounded-lg shadow ">
                                    <button type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="popup-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="p-4 md:p-5 text-center">
                                        <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                        <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                            Yes, I'm sure
                                        </button>
                                        <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">No, cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>


                <div className="flex justify-between m-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-300 rounded-full w-10 h-10 pt-2 text-center">
                                        <h3>U</h3>
                            </div>
                            <h3>User</h3>
                        </div>
                        <button className="bg-gray-600 rounded-lg p-2 text-white">Send Money</button>
                </div>
                <div className="flex justify-between m-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-300 rounded-full w-10 h-10 pt-2 text-center">
                                        <h3>U</h3>
                            </div>
                            <h3>User</h3>
                        </div>
                        <button className="bg-gray-600 rounded-lg p-2 text-white">Send Money</button>
                </div>
            </div>

        </div>
    )
}