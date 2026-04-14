import React from 'react';

const SummaryCard = () => {
    return (
        <div className='container mx-auto px-40'>
            <div className='grid grid-cols-4 gap-10'>
                <div className="card shadow-xl card-border bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-[#244D3F] text-3xl">10</h2>
                        <p className='text-[#64748B]'>Total Friends</p>
                    </div>
                </div>

                <div className="card shadow-xl card-border bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-[#244D3F] text-3xl">10</h2>
                        <p className='text-[#64748B]'>On Track</p>
                    </div>
                </div>

                <div className="card shadow-xl card-border bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-[#244D3F] text-3xl">10</h2>
                        <p className='text-[#64748B]'>Need Attention</p>
                    </div>
                </div>

                <div className="card shadow-xl card-border bg-base-100">
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title text-[#244D3F] text-3xl">10</h2>
                        <p className='text-[#64748B]'>Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryCard;