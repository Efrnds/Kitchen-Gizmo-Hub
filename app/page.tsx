import Header from "./header/page";
import Footer from "./footer/page";
import Main from "./main/page";

export default function Home() {
    return (
        <div className="">
            <Header />
            <hr className="mb-8 mt-1 mx-8 border-slate-200" />
            <Main />
            <hr className="mb-8 mt-1 mx-8 border-slate-200" />
            <Footer />
        </div>
    );
}
