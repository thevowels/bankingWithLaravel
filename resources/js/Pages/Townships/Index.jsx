import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
export default function Index({townships}){

    return(
        <AuthenticatedLayout
        header={
            <div className="text-xl font-semibold leading-tight text-green-800 flex justify-between">
                <div>
                    Townships
                </div>
            </div>
        }
        >
            <Head title="Townships"/>
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="max-w-xl mx-auto">

                        <table className="table-auto w-full  divide-y divide-gray-200 text-center"> 
                            <thead className="text-center">
                                <tr>
                                    <th className="px-6 py-3  text-sm font-medium text-black uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3  text-sm font-medium text-black uppercase tracking-wider">Code</th>
                                    <th className="px-6 py-3  text-sm font-medium text-black uppercase tracking-wider">Name</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                    {townships.map((township) => (
                                        <tr key={township.id} className="odd:bg-gray-50 even:bg-white hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{township.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{township.code}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{township.name}</td>
                                        </tr>
                                    ))}

                            </tbody>
                        </table>
                        <div className="text-center">
                            <PrimaryButton 
                                onClick={() => {
                                    router.visit('/townships/create');
                                }}
                            >
                                Add Township
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}