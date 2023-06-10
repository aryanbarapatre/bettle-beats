import Header from "@/components/Header";
import AccountContent from "./components/AccountContent";
import getSongsByUSerId from "@/actions/getSongsByUserId";


const Account = async () => {

    const userSongs = await getSongsByUSerId();

    return (
        <div
            className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto m"
        >
            <Header
                className=""
            >
                <div className="mb-2 flex flex-col gap-y-6">
                    <h1 className="text-white text-5xl font-semibold lg:text-6xl">
                        Your Account
                    </h1>
                </div>
            </Header>
            <div className="lg:mr-3">
                <AccountContent songs={userSongs} />
            </div>
        </div>
    )
}

export default Account;