import React from "react";

const SummaryCard = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">

                <div className="card shadow-xl bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center p-4 sm:p-6">
                        <h2 className="card-title text-[#244D3F] text-2xl sm:text-3xl">10</h2>
                        <p className="text-[#64748B] text-sm sm:text-base">Total Friends</p>
                    </div>
                </div>

                <div className="card shadow-xl bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center p-4 sm:p-6">
                        <h2 className="card-title text-[#244D3F] text-2xl sm:text-3xl">10</h2>
                        <p className="text-[#64748B] text-sm sm:text-base">On Track</p>
                    </div>
                </div>

                <div className="card shadow-xl bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center p-4 sm:p-6">
                        <h2 className="card-title text-[#244D3F] text-2xl sm:text-3xl">10</h2>
                        <p className="text-[#64748B] text-sm sm:text-base">Need Attention</p>
                    </div>
                </div>

                <div className="card shadow-xl bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center p-4 sm:p-6">
                        <h2 className="card-title text-[#244D3F] text-2xl sm:text-3xl">10</h2>
                        <p className="text-[#64748B] text-sm sm:text-base">
                            Interactions This Month
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SummaryCard;