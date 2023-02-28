import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import CategoryMenu from "./CategoryMenu"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="w-[90%] mx-auto flex justify-between gap-5">
                <div className="content w-[70%]">
                    <CategoryMenu />
                    {children}
                </div>
                <div className="sidebar w-[30%]">
                    <Sidebar />
                </div>
            </main>
            <Footer />
        </>
    )
}