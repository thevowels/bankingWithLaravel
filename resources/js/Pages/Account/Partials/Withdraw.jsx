import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, usePage } from "@inertiajs/react"
import { Input, Transition } from "@headlessui/react";

export default function Withdraw(){

    const account = usePage().props.account;

    const {data, setData, post, errors, processing , reset, recentlySuccessful } = useForm({
        amount : ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('accounts.withdraws.store', account));
        reset();
    }

    return(
        <div>
        <form onSubmit={submit} className="max-w-xs mx-auto">
            <div className="py-2">
                <InputLabel htmlFor = "amount" value="Amount"/>
                <Input
                    className={"mt-1 block w-full rounded-md border-gray-300"}
                    onChange={(e)=> setData('amount', e.target.value)}
                    id="withdraw"
                    name="withdraw"
                    value={data.amount}
                    required
                    isFocused
                    />
            </div>
            <div>
                <PrimaryButton disabled={processing}>
                    Submit
                </PrimaryButton>
                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Saved.
                    </p>
                </Transition>
                
            </div>
            
            
        </form>
        </div>
    )
}