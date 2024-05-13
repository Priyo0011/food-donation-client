import { SyncLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <SyncLoader size={100} color='#db4437'></SyncLoader>
        </div>
    );
};

export default Loader;