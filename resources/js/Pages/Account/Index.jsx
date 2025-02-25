import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";

import { MagnifyingGlassCircleIcon } from "@heroicons/react/20/solid";
import PrimaryButton from "@/Components/PrimaryButton";
export default function Index({paginated}){

    const accounts = paginated.data;
    const links = paginated.links;
    console.log(paginated);
    return(
        <AuthenticatedLayout
        header={
            <div className=" flex justify-between">
                <div className="text-xl font-semibold leading-tight text-green-800">
                    Accounts
                </div>
                <div>
                    <PrimaryButton className="py-4 text-2xl font-bold"
                                onClick={() => {
                                    router.visit('/accounts/create');
                                }}
                    >
                        Add New Account
                    </PrimaryButton>
                </div>
            </div>
        }
        >
            <Head title="Accounts"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                        
                        <table className="table-auto w-full text-xs" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Account No</th>
                                    <th>Balance</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody >
                                {accounts.map((account) => (
                                    <tr key={account.id} className="border-b border-gray-200 ">
                                        <td className="px-3 py-2 whitespace-nowrap">{account.CustomerName}</td>
                                        <td className="px-3 py-2 whitespace-nowrap">{account.accountNo}</td>
                                        <td className="px-3 py-2 whitespace-nowrap">{account.balance}</td>
                                        <td>
                                            <button onClick={() => router.visit(`/accounts/${account.id}`)} className="bg-green-500 text-white rounded"><MagnifyingGlassCircleIcon width={18}/></button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <nav className="my-4">
                                <ul className="pagination flex justify-center space-x-2">
                                    {links.map((link, index) => (
                                    <li key={index}>
                                        {link.url ? (
                                        <button
                                            onClick={() => router.visit(link.url)}
                                            className={`inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4 border-transparent  ${
                                            link.active ? 'bg-gray-800 text-white' : 'bg-blue text-gray-900'
                                            } hover:bg-gray-900 hover:text-white transition`}
                                            // Render the label as HTML (to display entities like « correctly)
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                        ) : (
                                        <span
                                            className="inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm rounded-md py-2 px-4"
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                        )}
                                    </li>
                                    ))}
                                </ul>
                            </nav>
                                
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}