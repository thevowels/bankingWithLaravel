import { Head,  useForm } from "@inertiajs/react"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from "clsx";

export default function Create({states}){

    const {data, setData, post, errors, processing, reset, recentlySuccessful} = useForm({
        code: '',
        name: '',
        state_id: states[0]
    })

    const setSelected = (value) =>{
        console.log('selected ', value)
        setData('state_id', value)
    }
    const submit = (e) =>{
        e.preventDefault();
        post(route('townships.store'))
    }

    return(
        <AuthenticatedLayout
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Township</h2>}
    >
        <Head title="Create Township"/>

        <div className="bg-white p-6 rounded-md max-w-md mx-auto mt-8">

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="code" value="Code"/>
                    <TextInput 
                        id="code"
                        className="mt-1 block w-full"
                        value={data.code}
                        onChange={(e) => setData('code', e.target.value)}
                        required
                        isFocused
                        />
                    <InputError message={errors.code}/>
                </div>
                <div>
                    <InputLabel htmlFor="name" value="Name"/>
                    <TextInput 
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        />
                    <InputError message={errors.name}/>
                </div>
                <div className="my-2">
                <InputLabel htmlFor="state_id" value="State"/>
                <Listbox value={data.state_id} onChange={setSelected}>
                        <ListboxButton
                        className={clsx(
                            'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 ',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                        )}
                        >
                            {data.state_id.name}
                            <ChevronDownIcon
                                className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
                                aria-hidden="true"
                            />
                        </ListboxButton>
                        <ListboxOptions
                        anchor="bottom"
                        transition
                        className={clsx(
                            'w-[var(--button-width)] rounded-xl border  p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none bg-white/80',
                            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                        )}
                        >
                        {states.map((state) => (
                            <ListboxOption
                            key={state.id}
                            value={state}
                            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                                <CheckIcon className="invisible size-4 group-data-[selected]:visible" />
                                <div className="text-sm/6 ">{state.name}</div>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Listbox>

                <InputError message={errors.state_id}/>

                </div>
                <div className="text-end">
                    <PrimaryButton>
                        Create
                    </PrimaryButton>
                </div>
            </form>

        </div>

        </AuthenticatedLayout>

    )
}