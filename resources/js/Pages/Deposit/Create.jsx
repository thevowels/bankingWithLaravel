import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Input } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
export default function Create({account}){

    const {data, setData, post, errors, processing , reset, recentlySuccessful } = useForm({
        amount:0
    });

    const submit = (e) => {
        e.preventDefault();
        console.log('submitting ', data);
        post(route('accounts.deposits.store', account));
    }

    return(
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <div>
                        <span className="text-green-700 font-bold ">Deposit to </span><span className="font-bold text-xl"> {account.CustomerName}</span>

                    </div>
                    <div>
                        <SecondaryButton>
                            Back
                        </SecondaryButton>

                    </div>
                </div>
            }
        >
            <Head title="Deposit "/>
            
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <form onSubmit={submit} className="max-w-xs mx-auto">
                            <div className="py-2">
                                <InputLabel htmlFor="amount" value={"Amount"}/>
                                <Input
                                className={"mt-1 block w-full rounded-md border-gray-300"}
                                onChange={(e)=> setData('amount', e.target.value)}
                                type="number"
                                required
                                autoFocus
                                />
                            </div>
                            <div>
                                <PrimaryButton>
                                    Submit
                                </PrimaryButton>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}