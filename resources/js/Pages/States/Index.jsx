import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
export default function Index({states}){

    return(
        <AuthenticatedLayout
        header={
            <div className="text-xl font-semibold leading-tight text-green-800 flex justify-between">
                <div>
                    States
                </div>
            </div>
        }

        >
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
                                    {states.map((state) => (
                                        <tr key={state.id} className="odd:bg-gray-50 even:bg-white hover:bg-gray-100">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{state.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{state.code}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{state.name}</td>
                                        </tr>
                                    ))}

                            </tbody>
                        </table>
                        <div className="text-center">
                            <PrimaryButton 
                                onClick={() => {
                                    router.visit('/states/create');
                                }}
                            >
                                Add State
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}