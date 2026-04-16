"use client";
import React, { useEffect } from 'react';

const StatusPage = () => {

     useEffect(() => {
            const stored = JSON.parse(localStorage.getItem("interactions")) || [];
            console.log(stored);
        }, []);
     
    return (
        <div className='flex justify-center items-center m-10'>
            <div className='w-full max-w-5xl p-5 space-y-4 card shadow-sm'>
                <h1 className='text-4xl font-bold'>Friendship Analytics</h1>

                <div>
                    <p className='font-semibold text-xl mt-2'>By Interaction Type</p>
                    <div>
                        Pichart
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusPage;