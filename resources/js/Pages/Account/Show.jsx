import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import dayjs from "dayjs";
export default function Show({account, state, township, deposits, withdraws, transactions}){
    console.log(account);
    console.log(transactions);
    return(
        <AuthenticatedLayout
            header={<h2>{account.CustomerName}</h2>}
        >
            <Head title={account.CustomerName} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden max-w-xs mx-auto bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
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

                    <div className="overflow-hidden mx-auto max-w-xs bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mt-4">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">
                            Balance
                            <p className="text-xl">
                                {account.balance}
                            </p>                            
                        </div>
                    </div>

                    <div className="overflow-hidden max-w-xl mx-auto bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mt-4">
                        <div className="max-w-lg mx-auto p-6 text-gray-900 dark:text-gray-100 text-center">
                            <h1>Deposits</h1>
                            <table className="table-fixed w-full text-sm ">
                                <thead>
                                    <tr>
                                        <th>Amount</th>
                                        <th>Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2">
                                    {account.deposits.map((deposit) => (
                                        <tr key={deposit.id}>
                                            <td>
                                                {deposit.amount}
                                            </td>
                                            <td>
                                                {dayjs(deposit.created_at).format('YYYY-MM-DD hh:mm:ss A') }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="overflow-hidden max-w-xl mx-auto bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mt-4">
                        <div className="max-w-lg mx-auto p-6 text-gray-900 dark:text-gray-100 text-center">
                            <h1>Withdraws</h1>
                        <table className="table-fixed w-full text-sm ">
                                <thead>
                                    <tr>
                                        <th>Amount</th>
                                        <th>Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2">
                                    {account.withdraws.map((withdraw) => (
                                        <tr key={withdraw.id}>
                                            <td>
                                                {withdraw.amount}
                                            </td>
                                            <td>
                                                {dayjs(withdraw.created_at).format('YYYY-MM-DD hh:mm:ss A') }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mt-4">
                        <div className="p-6 max-w-4xl mx-auto text-gray-900 dark:text-gray-100 text-center">
                            <h1>Transactions</h1>
                        <table className="table-fixed w-full text-sm ">
                                <thead>
                                    <tr>
                                        <th>Amount</th>
                                        <th>Timestamp</th>
                                        <th className="text-start">Debit/Credit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2">
                                    {transactions.map((transaction) => (
                                        <tr key={transaction.id}>
                                            <td>
                                                {transaction.amount}
                                            </td>
                                            <td>
                                                {dayjs(transaction.created_at).format('YYYY-MM-DD hh:mm:ss A') }
                                            </td>
                                            <td >
                                                {transaction.fromAccountNo == account.accountNo ?
                                                    <div className="text-center sm:text-start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="inline-block w-6 h-6 align-middle text-current ">
                                                            <path d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
                                                        </svg>
                                                        <span className="ml-4 mr-8 font-bold text-red-500">To</span>   <div className="inline-block">{transaction.To}</div>
                                                    </div>

                                                    :
                                                    <div className=" text-center sm:text-start">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="inline-block w-6 h-6 align-middle text-current ">
                                                            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                                                        </svg>
                                                        <span className="ml-4 mr-4 font-bold text-blue-500">From</span>
                                                        <div className="inline-block">{transaction.From}</div>
                                                    </div>
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    
                </div>
            </div>
        </AuthenticatedLayout>
    )
}