import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Show({account, state, township}){
    console.log(account);
    return(
        <AuthenticatedLayout
            header={<h2>{account.CustomerName}</h2>}
        >
            <Head title={account.CustomerName} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                            <img src="/profile.png" alt={account.CustomerName} width={160} height={160} className="mx-auto" />
                            <p>{account.CustomerName}</p>
                            <div className="row mt-4">
                                <span>
                                    {account.township.name}
                                </span>
                                <span className="mx-2">/</span>
                                <span>
                                {account.township.state.name}
                                </span>
                            </div>
                            <p>
                                123-456-7890
                            </p>
                            
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mt-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                            Balance
                            <p className="text-xl">
                                {account.balance}
                            </p>                            
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mt-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                            Transactions Todo
                        </div>
                    </div>


                    
                </div>
            </div>
        </AuthenticatedLayout>
    )
}