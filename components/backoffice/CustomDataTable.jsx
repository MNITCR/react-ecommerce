"use client";

import React, { useState } from 'react'
import data from '../../data.json';

const CustomDataTable = () => {
    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentDisplayData = data.slice(startIndex, endIndex);
    const numberOfPages = Math.ceil(data.length / PAGE_SIZE);
    const itemsStart = startIndex + 1;
    const itemsEnd = startIndex + numberOfPages;

    return (
        <div className='mt-8'>

            <h2 className='text-xl font-bold mb-5'>Recent Orders</h2>

            {/* table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-black">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-black">
                    <thead className="text-xs text-gray-200 uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentDisplayData.map((d, i) => (
                                <tr key={d.id} className="bg-gray-900 border-gray-700 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-800">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id={`checkbox-table-search-${i}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor={`checkbox-table-search-${i}`} className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className='px-6 py-4'>
                                        {d.id}
                                    </th>
                                    <th scope="row" className='px-6 py-4'>
                                        {d.first_name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {d.last_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {d.gender}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>

                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing
                    <span className="font-semibold text-gray-200"> {itemsStart}-{itemsEnd}</span> of
                        <span className="font-semibold text-gray-200"> {data.length}</span>
                    </span>

                    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                        <li>
                            <button
                                onClick={() => setCurrentPage(currentPage-1)}
                                disabled={currentPage === 1}
                                className="flex items-center justify-center px-3 h-8 ms-0 text-gray-500 bg-gray-800 border border-gray-600 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Previous
                            </button>
                        </li>

                        {
                            Array.from({length: numberOfPages}, (_, index) => {
                                return(
                                    <li key={index}>
                                        <button
                                            onClick={() => setCurrentPage(index + 1)}
                                            disabled={currentPage === index + 1}
                                            className={`${currentPage - 1 == index ? "bg-gray-700" : ""} flex items-center justify-center px-3 h-8 leading-tight text-gray-400 border border-gray-600 hover:bg-gray-700 hover:text-gray-400 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                                        >
                                        {index +1}
                                        </button>
                                    </li>
                                )
                            })
                        }

                        <li>
                            <button
                                onClick={() => setCurrentPage(currentPage+1)}
                                disabled={currentPage === numberOfPages}
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-800 border border-gray-600 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    )
}

export default CustomDataTable
