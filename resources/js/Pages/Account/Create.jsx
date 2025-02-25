import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function Create({townships}){
    console.log('townships ', townships);
    const {data, setData, post, errors, processing , reset, recentlySuccessful } = useForm({
        CustomerName: '',
        township: townships[0],
    })

    const submit = (e) =>{
        e.preventDefault();
        post(route('accounts.store'));
        console.log('submitting' , data);
    }

    return(
        <AuthenticatedLayout
        header={
            <div className=" flex justify-between">
                <div className="text-xl font-semibold leading-tight text-green-800">
                    Accounts
                </div>
                <div>
                    <SecondaryButton className="py-4 text-2xl font-bold"
                                onClick={() => {
                                    window.history.back();
                                }}
                    >
                        Back
                    </SecondaryButton>
                </div>
            </div>
        }
        >
            <Head title="Add Account"/>

            <div className="py-12">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-2">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <form onSubmit={submit} className="max-w-xs mx-auto">

                            <div>
                                <InputLabel htmlFor = "CustomerName" value="CustomerName"/>
                                <TextInput
                                    id="CustomerName"
                                    className="mt-1 block w-full"
                                    value={data.CustomerName}
                                    onChange= {(e) => setData('CustomerName', e.target.value)}
                                    required
                                    />
                                <InputError message={errors.CustomerName}/>
                            </div>
                            <div className="mt-2">
                                <InputLabel htmlFor = "township" value="Township"/>
                                <Listbox value={data.township} onChange={(value) => setData('township',value)} >
                                    <ListboxButton className="border inline-block rounded-md w-full py-2">{data.township.name}</ListboxButton>
                                    <ListboxOptions anchor="bottom" className="w-[var(--button-width)] h-64" >
                                        {townships.map(township => (
                                            <ListboxOption key={township.id} value={township} className="group flex gap-2 bg-white data-[focus]:bg-blue-100">
                                                {township.name}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>



                                </Listbox>

                            </div>

                            <div className="pt-4 text-center">
                                <PrimaryButton>
                                    Submit
                                </PrimaryButton>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>

    )
}