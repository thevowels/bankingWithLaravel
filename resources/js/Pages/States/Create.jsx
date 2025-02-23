import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create(){


    const {data, setData, post, put,  errors, processing, reset, recentlySuccessful } = 
    useForm({
        code: '',
        name: '',

    })
    const submit = (e) =>{
        e.preventDefault();
        post(route('states.store'), { 
            onSuccess: () => {
                reset('code','name');
            }
        });
    }

    return(
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create State</h2>}
        >
            <Head title="Create State"/>

            <div className="bg-white p-6 rounded-md max-w-md mx-auto mt-8">
                <form onSubmit={submit}>
                    <div>
                    <InputLabel htmlFor="code" value="Code"/>
                    <TextInput
                        id="code"
                        className="mt-1 block w-full"
                        value = {data.code}
                        onChange = {(e) => setData('code', e.target.value)}
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
                            value = {data.name}
                            onChange = {(e) => setData('name', e.target.value)}
                            required
                            />
                    </div>
                    <div className="mt-4 text-end">
                        <PrimaryButton>
                            Create
                        </PrimaryButton>
                    </div>
                </form>
            </div>

        </AuthenticatedLayout>
    )
}